const Card = ({ image, title, content }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={title} />
      </div>
      <div className="card__body">
        <h2 className="card__body-title">{title}</h2>
        <p className="card__body-content">{content}</p>
        <button className="card__body-btn">more</button>
        <div className="card-tagline">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
