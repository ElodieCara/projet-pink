import Navbar from "../layout/Navbar";
import Air from "../assets/Air.svg";
import Cloud from "../assets/Cloud.svg";

export default function Header() {
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
              "Il faut donc être au-dessus des nuages pour <br />
              que nos yeux s'y baignent..."
            </p>
            <cite>Jean Cocteau</cite>
          </blockquote>
        </div>
      </div>
    </header>
  );
}
