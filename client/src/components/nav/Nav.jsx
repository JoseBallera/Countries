import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../searchbar/SearchBar";


const Nav = () => {
  return (
    <nav className={style.navContainer}>
      <div className={style.linksContainer}>
        <div className={style.link}>
          <Link to="/home">Home</Link>
          <Link to="/form">Crear Actividad</Link>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      
    </nav>
  );
};

export default Nav;
