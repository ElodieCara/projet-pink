import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Guillemets from "../assets/guillemets.svg";

const SlideShow = ({ testimonials, autoPlay = true, delay = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideArrayLength = testimonials.length;
  const slideRef = useRef(null);
  const intervalRef = useRef(null);

  // Fonction générique pour changer de slide
  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? slideArrayLength - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slideArrayLength);
  };

  // Gestion du swipe tactile
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

  // Défilement automatique
  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, delay);

      return () => clearInterval(intervalRef.current); // nettoyage
    }
  }, [currentSlide, autoPlay, delay]);

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div
      className="testimonial__container"
      ref={slideRef}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
    >
      {/* Flèche gauche */}
      {slideArrayLength > 1 && (
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="testimonial__container__arrow testimonial__container__slide__arrow--prev"
          alt="flèche précédente"
          onClick={prevSlide}
        />
      )}

      {/* Slide */}
      <div
        className={`testimonial__container__slide ${isTransitioning ? "fade-out" : "fade-in"
          }`}
      >
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

      {/* Flèche droite */}
      {slideArrayLength > 1 && (
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="testimonial__container__arrow testimonial__container__slide__arrow--next"
          alt="flèche suivante"
          onClick={nextSlide}
        />
      )}

      {/* Indicateurs */}
      {slideArrayLength > 1 && (
        <div className="testimonial__container__slide__indicators">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`indicator ${currentSlide === index ? "active" : ""
                }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

SlideShow.propTypes = {
  testimonials: PropTypes.array.isRequired,
  autoPlay: PropTypes.bool,
  delay: PropTypes.number,
};

export default SlideShow;
