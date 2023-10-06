import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="header__navbar">
      <div className="header__navbar__container">
        <img src={Logo} alt="" style={{ width: "80px" }} />
        <ul className={click ? "nav--menu active" : "nav--menu"}>
          <li className="header__navbar__container__link--nude">
            <NavLink exact="true" to="" onClick={handleClick}>
              About us
            </NavLink>
          </li>
          <li className="header__navbar__container__link--nude">
            <NavLink exact="true" to="" onClick={handleClick}>
              Contacts
            </NavLink>
          </li>
          <li className="header__navbar__container__link--btn">
            <NavLink exact="true" to="" onClick={handleClick}>
              Boutique
            </NavLink>
          </li>
        </ul>
        <div className="header__navbar__container__icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
