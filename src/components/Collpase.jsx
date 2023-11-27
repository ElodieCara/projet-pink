import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Icon from "../assets/arrow-down.png";

function Collapse(props) {
  const [visible, setVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768); // Définir par défaut la vue mobile
  const contentRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Mettre à jour isMobileView en fonction de la largeur de l'écran
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Si c'est un écran de bureau, afficher le contenu sans le collapsible
  if (!isMobileView) {
    return (
      <div className="collapse desktop">
        <div className="collapse__content__text">
          <h2>{props.label}</h2>
          <div>{props.children}</div>
        </div>
      </div>
    );
  }

  // Si c'est un écran mobile, afficher le collapse
  return (
    <div className="collapse">
      <button className="collapse__toggle" onClick={() => setVisible(!visible)}>
        {props.label}
        <img
          className="collapse__toggle__icon"
          src={Icon}
          alt="Icon flèche"
          style={
            visible
              ? { transform: "rotate(180deg)", width: "10px" }
              : { transform: "rotate(0deg)", width: "10px" }
          }
        />
      </button>
      <div
        className="collapse__content"
        ref={contentRef}
        style={
          visible
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <ul className="collapse__content__text">{props.children}</ul>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
