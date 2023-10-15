// import Search from "../assets/Search.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { articles } from "../data/data.js";

function Gallery() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(articles);
  }, []);

  return (
    <div className="gallery">
      <div className="gallery__nav">
        <ul className="gallery__nav__list">
          <li className="gallery__nav__list__link">News</li>
          <li className="gallery__nav__list__link">Articles</li>
          <li className="gallery__nav__list__link">Blog</li>
        </ul>
        <div className="gallery__nav__search">
          <SearchBar />
        </div>
      </div>
      <div className="gallery__container">
        {news.map((news, id) => (
          <section className="gallery__container__cards" key={id}>
            <Link to={`/news/${news.id}`}>
              <Card
                image={news.image}
                title={news.title}
                content={news.content}
              />
            </Link>
          </section>
        ))}
        <div className="gallery__container__pages">
          <div className="gallery__container__pages__loader">
            <img src="" alt="" />
            <p>load more articles</p>
          </div>
          <div className="gallery__container__pages__number">123...5</div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
