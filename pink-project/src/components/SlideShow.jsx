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
    <div className="testimonial__container">
      {slideArrayLength > 1 && (
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="testimonial__container__arrow testimonial__container__slide__arrow--prev"
          alt="flèche photos suivante"
          onClick={nextSlide}
        />
      )}

      <div className="testimonial__container__slide">
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
          onClick={prevSlide}
        />
      )}
    </div>
  );
};

SlideShow.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default SlideShow;
