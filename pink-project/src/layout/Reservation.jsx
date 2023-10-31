import { reservation } from "../data/data.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Reservation() {
  const [clouds, setClouds] = useState([]);
  const isMobile = window.innerWidth > 768;

  useEffect(() => {
    setClouds(reservation);
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
              right: isMobile ? `${cl * 30}px` : "",
              top: !isMobile ? `${cl * 160}px` : "",
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
