import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ type, image, title, content, date }) => {
  console.log("Type:", type);
  return (
    <div
      className={`card__body ${type === "interview" ? "interview" : "article"}`}
    >
      <div className="card__image">
        <img src={image} alt={title} loading="lazy" width="400" height="250" style={{ objectFit: "cover" }} />
        <div className="card__image-tagline">
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "D9D9D9", fontSize: "24px" }}
          />
        </div>
      </div>

      <div className="card__content">
        <div className="card__content__wrapper">
          <p className="card__content__wrapper-date">{date}</p>
          <h2 className="card__content__wrapper-title">{title}</h2>
          <p className="card__content__wrapper-text">{content}</p>
        </div>
        <div className="card__content__button">
          <button className="card__content__button-btn">more</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Card; 