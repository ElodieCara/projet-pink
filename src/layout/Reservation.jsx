import { reservation } from "../data/data.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Reservation() {
  // State pour stocker les données des nuages
  const [clouds, setClouds] = useState([]);

  // Points de rupture pour les médias query
  const desktopBreakpoint = 990;
  const tabletBreakpoint = 768;

  // State pour suivre la largeur de la fenêtre
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effet de redimensionnement pour mettre à jour la largeur de la fenêtre
  useEffect(() => {
    // Initialisez les données des nuages
    setClouds(reservation);

    // Gérez le redimensionnement de la fenêtre
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Ajoutez un écouteur d'événements de redimensionnement
    window.addEventListener("resize", handleResize);

    // Retirez l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="reservation">
      <h2>Nos Nuages !</h2>
      <div className="reservation__container">
        {clouds.map((clouds, cl) => (
          <div
            className="reservation__container__card"
            key={cl}
            style={{
              top: windowWidth < tabletBreakpoint ? `${cl * 160}px` : "",
              right:
                window.innerWidth >= tabletBreakpoint &&
                window.innerWidth < desktopBreakpoint
                  ? `${cl * 160}px`
                  : window.innerWidth >= desktopBreakpoint
                  ? `${cl * 30}px`
                  : "",
            }}
          >
            <Link to={`/reservations/${clouds.id}`}>
              <div className="reservation__container__card__text">
                <p>{clouds.title}</p>
                <h4>{clouds.name}</h4>
                <blockquote>{clouds.content}</blockquote>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
