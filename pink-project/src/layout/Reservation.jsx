import { reservation } from "../data/data.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Reservation() {
  const [clouds, setClouds] = useState([]);

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
            style={{ right: `${cl * 30}px` }}
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
