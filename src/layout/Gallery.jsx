import { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { articles } from "../data/data.js";
import Load from "../components/Load";

function Gallery() {
  const [news, setNews] = useState([]); // État des articles
  const [filter, setFilter] = useState("all"); // Filtrage par catégorie
  const [showMore, setShowMore] = useState(5); // Nombre d'articles affichés
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Charger les articles au montage du composant
  useEffect(() => {
    setNews(articles);
  }, [searchTerm]);

  // Optimisation : Filtrage des articles avec useMemo pour éviter des recalculs inutiles
  const filteredNews = useMemo(() => {
    return filter === "all"
      ? news
      : news.filter((item) => item.type === filter);
  }, [filter, news]);

  // Gestion du filtrage
  const handleFilter = useCallback((type) => {
    setFilter(type);
  }, []);

  const handleSearch = (searchTerm) => {
    console.log("Recherche pour :", searchTerm);
    setSearchTerm(searchTerm);
  };

  // Restaurer le nombre d'articles affichés et afficher "Fin" quand tous sont visibles
  const loadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setShowMore((prev) => prev + 5); // Charger 5 articles comme avant
      setLoading(false);
    }, 2000);
  }, []);

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
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Affichage des articles */}
      <div className="gallery__container">
        {filteredNews.slice(0, showMore).map((item) => (
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
        ))}

        {/* Bouton Charger Plus avec "Fin" */}
        <div className="gallery__container__pages">
          <div className="gallery__container__pages__showmore">
            <button
              onClick={loadMore}
              disabled={showMore >= filteredNews.length || loading}
            >
              {loading ? (
                <Load />
              ) : showMore >= filteredNews.length ? (
                "Fin"
              ) : (
                "Charger plus"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
