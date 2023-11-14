import Navbar from "../layout/Navbar";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
import Air from "../assets/Air.svg";
import Cloud from "../assets/Cloud.svg";

export default function Header() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  return (
    <header className="header">
      <Navbar />
      <div className="header__container">
        <div className="header__container__title">
          <img
            className="header__container__title__icon--air"
            src={Air}
            alt="Logo Alifey et ses nuages"
          />
          <h1>Alifey</h1>
          <img
            className="header__container__title__icon--cloud"
            src={Cloud}
            alt=""
          />
        </div>
        <div className="header__container__quote">
          <blockquote>
            <p>
              Découvrez un tout nouveau niveau de relaxation en réservant un
              rendez-vous exclusif avec les nuages .
            </p>
          </blockquote>
        </div>
        {/* <button className="header__container__btn">
         
          <NavLink exact="true" to="" onClick={handleClick}>
            Réservation
          </NavLink>
        </button> */}
      </div>
    </header>
  );
}
