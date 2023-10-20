import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__column">
          <ul>
            <h2>Innovation</h2>
            <li>Ressources</li>
            <li>Blog</li>
            <li>Produits</li>
          </ul>
        </div>
        <div className="footer__container__column">
          <ul>
            <h2>Inspiration</h2>
            <li>Succes Stories</li>
            <li>Galerie de projets</li>
            <li>Citations Inspirantes</li>
          </ul>
        </div>
        <div className="footer__container__column">
          <ul>
            <h2>Shop</h2>
            <li>Catalogue</li>
            <li>Offres spéciales</li>
            <li>Promotions</li>
          </ul>
        </div>
        <div className="footer__container__column footer__container__column--socials">
          <h2>Socials</h2>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faPinterest}
                style={{ fontSize: "24px" }}
              />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "24px" }} />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "24px" }}
              />
            </li>
          </ul>
        </div>
        <div className="footer__container__logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </footer>
  );
}
