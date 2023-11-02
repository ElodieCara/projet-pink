import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { articles } from "../data/data.js";
import Air from "../assets/Air.svg";

function Gallery() {
  const [news, setNews] = useState([]); // État pour tous les articles
  const [filteredNews, setFilteredNews] = useState([]); // État pour les articles filtrés
  const [filter, setFilter] = useState("all"); // État pour le type de filtre (all, interview, article)

  useEffect(() => {
    setNews(articles); // Initialisation de l'état avec les articles provenant de data.js
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredNews(news); // Si le filtre est réglé sur 'all', afficher tous les articles
    } else {
      // Filtrer les articles en fonction du type sélectionné (interview ou article)
      const filtered = news.filter((item) => {
        if (filter === "interview") {
          return item.type === "interview"; // Afficher les articles de type 'interview'
        } else if (filter === "article") {
          return item.type === "article"; // Afficher les articles de type 'interview'
        }
        return true; // Renvoyer true pour les autres cas
      });
      setFilteredNews(filtered); // Mettre à jour l'état avec les articles filtrés
    }
  }, [filter, news]); // Mise à jour lorsque le filtre ou les articles changent

  const handleFilter = (type) => {
    setFilter(type); // Définir le type de filtre (all, interview, article)
  };

  return (
    <div className="gallery">
      <h2 className="gallery--title">Nos Actualités</h2>

      {/* Navigation pour filtrer les articles */}
      <div className="gallery__nav">
        <ul className="gallery__nav__list">
          <li
            className={filter === "all" ? "active" : ""}
            onClick={() => handleFilter("all")}
          >
            All
          </li>
          <li
            className={filter === "interview" ? "active" : ""}
            onClick={() => handleFilter("interview")}
          >
            Articles
          </li>
          <li
            className={filter === "article" ? "active" : ""}
            onClick={() => handleFilter("article")}
          >
            News
          </li>
        </ul>

        {/* Composant de barre de recherche */}
        <div className="gallery__nav__search">
          <SearchBar />
        </div>
      </div>

      {/* Afficher les articles filtrés */}
      <div className="gallery__container">
        {filteredNews.length > 0 ? ( // Vérifier s'il y a des articles à afficher
          filteredNews.map((item) => (
            <div className="card" key={item.id}>
              <Link to={`/news/${item.id}`}>
                <Card
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  type={item.type}
                  date={item.date}
                />
              </Link>
            </div>
          ))
        ) : (
          <p>Aucun article trouvé pour cette catégorie.</p> // Afficher s'il n'y a pas d'articles
        )}

        {/* Éléments supplémentaires pour la pagination ou charger plus d'articles */}
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
