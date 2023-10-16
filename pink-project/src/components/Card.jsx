const Card = ({ type, image, title, content }) => {
  console.log("Type:", type);
  return (
    <div
      className={`card__body ${type === "interview" ? "interview" : "article"}`}
    >
      <div className="card__image">
        <img src={image} alt={title} />
      </div>
      <div className="card__content">
        <h2 className="card__content-title">{title}</h2>
        <p className="card__content-text">{content}</p>
        <button className="card__content-btn">more</button>
        <div className="card__content-tagline">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
