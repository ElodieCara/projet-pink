import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { articles } from "../data/data.js";
import Load from "../components/Load";

function Gallery() {
  const [news, setNews] = useState([]); // État pour tous les articles
  const [filteredNews, setFilteredNews] = useState([]); // État pour les articles filtrés
  const [filter, setFilter] = useState("all"); // État pour le type de filtre (all, interview, article)
  const [showMore, setShowMore] = useState(5); // Nombre d'articles supplémentaires à afficher
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setNews(articles); // Initialisation de l'état avec les articles provenant de data.js
  }, []);

  useEffect(() => {
    // Mise à jour des articles filtrés en fonction du type sélectionné
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

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setShowMore(showMore + 5); // Charger 5 articles supplémentaires
      setLoading(false);
    }, 2000);
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
        {filteredNews.slice(0, showMore).map(
          (
            item // Affichage restreint aux 'showMore' articles
          ) => (
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
          )
        )}
        {loading && <Load />}
        <div className="gallery__container__pages">
          <div className="gallery__container__pages__showmore">
            <button
              onClick={loadMore}
              disabled={showMore >= filteredNews.length || loading}
            >
              {showMore >= filteredNews.length ? "Fin" : "Charger plus"}

              <Load />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
