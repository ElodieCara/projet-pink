import { useState, useEffect } from "react";
import { listFooter } from "../data/data.js";
import Logo from "../assets/Logo.png";
import Collapse from "../components/Collpase.jsx";

export default function Footer() {
  const [list, setList] = useState([]);

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    console.log(listFooter);
    setList(listFooter);
    console.log(list);
  }, [list]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60); // Mise à jour toutes les heures pour s'assurer que l'année est toujours à jour
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__column">
          <Collapse label="Innovation">
            {list[0]?.innovation.map((texte, e) => {
              return <li key={e}>{texte}</li>;
            })}
          </Collapse>
        </div>
        <div className="footer__container__column">
          <Collapse label="Inspiration">
            {list[0]?.inspiration.map((texte, e) => {
              return <li key={e}>{texte}</li>;
            })}
          </Collapse>
        </div>
        <div className="footer__container__column">
          <Collapse label="Shop">
            {list[0]?.shop.map((texte, e) => {
              return <li key={e}>{texte}</li>;
            })}
          </Collapse>
        </div>
        <div className="footer__container__column  footer__container__column--socials">
          <h2>Socials</h2>
          <div className="footer__container__column--socials__content">
            {list[0]?.socials.map((icon, i) => {
              return <img key={i} src={icon} />;
            })}
          </div>
        </div>
        <div className="footer__container__logo">
          <img src={Logo} alt="logo social" />
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {currentYear} ECara. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
