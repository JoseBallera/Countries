import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../searchbar/SearchBar";

const Nav = () => {
  return (
    <nav className={style.navContainer}>
      <div className={style.link}>
        <Link to="/home" className={style.linkItem}>
          Home
        </Link>
        <Link to="/form" className={style.linkItem}>
          Crear Actividad
        </Link>
      </div>
      <div className={style.searchBar}>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Nav;
