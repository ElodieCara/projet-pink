import { useState, useEffect } from "react";
import { listFooter } from "../data/data.js";
import Logo from "../assets/Logo.png";
import Collapse from "../components/Collpase.jsx";

export default function Footer() {
  const [list, setList] = useState([]); // État vide au début

  useEffect(() => {
    console.log("Chargement des données du footer :", listFooter);
    setList(listFooter);
  }, []); // Supprimer `list` dans les dépendances pour éviter une boucle infinie

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Vérifier si list[0] existe avant d'afficher Collapse */}
        {list.length > 0 && (
          <>
            <div className="footer__container__column">
              <Collapse label="Innovation">
                {list[0].innovation.length > 0 ? (
                  list[0].innovation.map((texte, e) => <li key={e}>{texte}</li>)
                ) : (
                  <p>Aucune donnée disponible</p>
                )}
              </Collapse>
            </div>

            <div className="footer__container__column">
              <Collapse label="Inspiration">
                {list[0].inspiration.length > 0 ? (
                  list[0].inspiration.map((texte, e) => (
                    <li key={e}>{texte}</li>
                  ))
                ) : (
                  <p>Aucune donnée disponible</p>
                )}
              </Collapse>
            </div>

            <div className="footer__container__column">
              <Collapse label="Shop">
                {list[0].shop.length > 0 ? (
                  list[0].shop.map((texte, e) => <li key={e}>{texte}</li>)
                ) : (
                  <p>Aucune donnée disponible</p>
                )}
              </Collapse>
            </div>

            <div className="footer__container__column footer__container__column--socials">
              <h2>Socials</h2>
              <div className="footer__container__column--socials__content">
                {list[0].socials.length > 0 ? (
                  list[0].socials.map((icon, i) => (
                    <img key={i} src={icon} alt="social icon" />
                  ))
                ) : (
                  <p>Aucun réseau social disponible</p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="footer__container__logo">
          <img src={Logo} alt="logo social" />
        </div>
      </div>
    </footer>
  );
}
