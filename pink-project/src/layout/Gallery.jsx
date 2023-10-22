// import Search from "../assets/Search.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { articles } from "../data/data.js";
import Air from "../assets/Air.svg";

function Gallery() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(articles);
  }, []);

  return (
    <div className="gallery">
      <div className="gallery__nav">
        <ul className="gallery__nav__list">
          <li className="gallery__nav__list__link">All</li>
          <li className="gallery__nav__list__link">News</li>
          <li className="gallery__nav__list__link">Articles</li>
        </ul>
        <div className="gallery__nav__search">
          <SearchBar />
        </div>
      </div>
      <div className="gallery__container">
        {news.map((news, id) => (
          <div className="card" key={id}>
            <Link to={`/news/${news.id}`}>
              <Card
                image={news.image}
                title={news.title}
                content={news.content}
                type={news.type}
                date={news.date}
              />
            </Link>
          </div>
        ))}
        <div className="gallery__container__pages">
          <div className="gallery__container__pages__loader">
            <img src={Air} alt="Logo Cloud" style={{ width: "80px" }} />
            <p>Charger les news suivantes</p>
          </div>
          <div className="gallery__container__pages__number">123...5</div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
