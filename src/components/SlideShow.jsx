import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Guillemets from "../assets/guillemets.svg";

const SlideShow = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // État pour gérer la transition fluide
  const slideArrayLength = testimonials.length;
  const slideRef = useRef(null);

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slideArrayLength - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  };

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slideArrayLength);
      setIsTransitioning(false);
    }, 300);
  };

  // Gestion des gestes tactiles pour changer de diapositive
  const touchStart = (e) => {
    slideRef.current.startX = e.touches[0].clientX;
  };

  const touchMove = (e) => {
    if (slideRef.current.startX || slideRef.current.startX === 0) {
      const diff = slideRef.current.startX - e.touches[0].clientX;
      if (diff > 50) {
        nextSlide();
        slideRef.current.startX = null;
      } else if (diff < -50) {
        prevSlide();
        slideRef.current.startX = null;
      }
    }
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div
      className="testimonial__container"
      ref={slideRef}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
    >
      {slideArrayLength > 1 && (
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="testimonial__container__arrow testimonial__container__slide__arrow--prev"
          alt="flèche photos suivante"
          onClick={prevSlide}
        />
      )}

      <div
        className={`testimonial__container__slide ${isTransitioning ? "fade-out" : "fade-in"
          }`}
      >
        {console.log(
          "Classe CSS appliquée :",
          isTransitioning ? "fade-out" : "fade-in"
        )}
        <div className="testimonial__container__slide--logo">
          <img
            src={Guillemets}
            alt="logo-guillemets"
            style={{ width: "8%" }}
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

      {slideArrayLength > 1 && (
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="testimonial__container__arrow testimonial__container__slide__arrow--next"
          alt="flèche photos précédente"
          onClick={nextSlide}
        />
      )}

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
