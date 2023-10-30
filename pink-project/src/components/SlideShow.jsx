import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Guillemets from "../assets/guillemets.svg";

const SlideShow = ({ testimonials }) => {
  // État local pour gérer la diapositive actuelle
  const [currentSlide, setCurrentSlide] = useState(0);
  // Longueur du tableau de témoignages
  const slideArrayLength = testimonials.length;
  // Référence pour le conteneur du carrousel
  const slideRef = useRef(null);

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideArrayLength - 1 : currentSlide - 1
    );
  };

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slideArrayLength - 1 ? 0 : currentSlide + 1
    );
  };

  // Gestion des gestes tactiles pour changer de diapositive
  const touchStart = (e) => {
    slideRef.current.startX = e.touches[0].clientX; // Enregistre la position initiale du toucher
  };

  const touchMove = (e) => {
    if (slideRef.current.startX || slideRef.current.startX === 0) {
      const diff = slideRef.current.startX - e.touches[0].clientX; // Calcul de la différence de position
      if (diff > 50) {
        nextSlide(); // Passer à la diapositive suivante si le mouvement est suffisant
        slideRef.current.startX = null; // Réinitialisation de la position initiale du toucher
      } else if (diff < -50) {
        prevSlide(); // Passer à la diapositive précédente si le mouvement est suffisant
        slideRef.current.startX = null; // Réinitialisation de la position initiale du toucher
      }
    }
  };

  // Accéder au témoignage actuel en fonction de la diapositive actuelle
  const currentTestimonial = testimonials[currentSlide];

  return (
    <div
      className="testimonial__container"
      ref={slideRef}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
    >
      {/* Flèche gauche pour la version desktop */}
      {slideArrayLength > 1 && (
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="testimonial__container__arrow testimonial__container__slide__arrow--prev"
          alt="flèche photos suivante"
          onClick={prevSlide}
        />
      )}

      <div className="testimonial__container__slide">
        <div className="testimonial__container__slide--logo">
          <img
            src={Guillemets}
            alt="logo-guillemets"
            style={{ width: "20%" }}
          />
        </div>
        <div className="testimonial__container__slide__image">
          <img src={currentTestimonial.photo} alt={currentTestimonial.name} />
        </div>
        <div className="testimonial__container__slide__content">
          <h2 className="testimonial__container__slide__content__name">
            {currentTestimonial.name}
          </h2>
          <p className="testimonial__container__slide__content__date">
            {currentTestimonial.date}
          </p>
          <p className="testimonial__container__slide__content__story">
            {currentTestimonial.content}
          </p>
        </div>
      </div>

      {/* Flèche droite pour la version desktop */}
      {slideArrayLength > 1 && (
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="testimonial__container__arrow testimonial__container__slide__arrow--next"
          alt="flèche photos précédente"
          onClick={nextSlide}
        />
      )}

      {/* Indicateurs de diapositives pour la version mobile */}
      {slideArrayLength > 1 && (
        <div className="testimonial__container__slide__indicators">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`indicator ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

SlideShow.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default SlideShow;
