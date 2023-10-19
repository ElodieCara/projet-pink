import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const SlideShow = ({ testimonials }) => {
  // Utilisation de useState pour gérer l'état local du composant
  const [currentSlide, setCurrentSlide] = useState(0); // État actuel de la diapositive
  const slideArrayLength = testimonials.length; // Longueur du tableau de témoignages

  // paramétre notre composant pour qu'il gère le déroulement des slides
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideArrayLength - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slideArrayLength - 1 ? 0 : currentSlide + 1
    );
  };

  // Accéder au témoignage actuel en fonction de la diapositive actuelle
  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className="testimonial__container__slide">
      {slideArrayLength > 1 && (
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="container__slide__arrow--prev"
          alt="flèche photos suivante"
          onClick={nextSlide}
        />
      )}
      {slideArrayLength > 1 && (
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="container__slide__arrow--next"
          alt="flèche photos précédente"
          onClick={prevSlide}
        />
      )}
      <div className="testimonial__container__slide__image">
        <img src={currentTestimonial.photo} alt={currentTestimonial.name} />
      </div>
      <div className="testimonial__container__slide__content">
        <h2 className="testimonial__container__slide__name">
          {currentTestimonial.name}
        </h2>
        <p className="testimonial__container__slide__date">
          {currentTestimonial.date}
        </p>
        <p className="testimonial__container__slide__story">
          {currentTestimonial.content}
        </p>
      </div>
      <span
        style={
          slideArrayLength > 1 ? { display: "block" } : { display: "none" }
        }
        className="container__slide__number"
      >
        {currentSlide + 1}/{slideArrayLength}
      </span>
    </div>
  );
};

SlideShow.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default SlideShow;
