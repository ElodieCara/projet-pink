import { reservation } from "../data/data.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Reservation() {
  const [clouds, setClouds] = useState([]);
  const desktopBreakpoint = 990;
  const tabletBreakpoint = 768;
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // const [isTablet, setIsTablet] = useState(window.innerWidth < 990);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setClouds(reservation);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // setIsTablet(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="reservation">
      <h2>Nos Nuages !</h2>
      <div
        className="reservation__container"
        style={
          {
            // display: isTablet ? "grid" : "flex",
            // gridTemplateColumns: isTablet ? "200px 300px" : "1fr", // Deux colonnes pour les tablettes
            // gridAutoRows: isTablet ? "1fr" : "",
            // placeItems: "center",
          }
        } // Espace autour des éléments
      >
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
              // right: !isMobile ? `${cl * 30}px` : "",
            }}
          >
            <Link to={`/reservations/${clouds.id}`}>
              <div className="reservation__container__card__text">
                <p>{clouds.title}</p>
                <h4>{clouds.name}</h4>
                <quote>{clouds.content}</quote>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
