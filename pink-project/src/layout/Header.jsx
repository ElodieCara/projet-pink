import Navbar from "../layout/Navbar";
import Logo from "../assets/Logo.svg";
import Cloud from "../assets/Cloud.svg";

export default function Header() {
  return (
    <header>
      <Navbar />
      <div className="header__title">
        <img src={Logo} alt="Logo Alifey et ses nuages" />
        <h1>Alifey</h1>
        {/* <div className="header__title__cloud">
          <img src={Cloud} alt="" />
        </div> */}
      </div>
      <blockquote>
        <p>
          Il faut donc être au-dessus des nuages pour que nos yeux s'y baignent
        </p>
        <cite>Jean Cocteau</cite>
      </blockquote>
    </header>
  );
}
