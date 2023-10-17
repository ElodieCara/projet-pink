const Card = ({ type, image, title, content, date }) => {
  console.log("Type:", type);
  return (
    <div
      className={`card__body ${type === "interview" ? "interview" : "article"}`}
    >
      <div className="card__image">
        <img src={image} alt={title} />
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
        <div className="card__content-tagline">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
