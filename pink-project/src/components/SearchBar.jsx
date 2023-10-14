import { useState } from "react";
// import Glass from "@/assets/Search.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

//composant pour afficher un article
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ width: "50px", color: "D9D9D9", fontSize: "24px" }}
      />
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchBar;
