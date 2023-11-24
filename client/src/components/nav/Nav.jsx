import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../searchbar/SearchBar";
import { useDispatch } from "react-redux";
import { resetFiltersAndSort } from "../../redux/actions";
const Nav = () => {
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(resetFiltersAndSort());
  };
  return (
    <nav className={style.navContainer}>
      <div className={style.linkContainer}>
        <div className={style.link}>
          <Link to="/home" onClick={handleHomeClick} style={{ textDecoration: 'none', color: '#f8efed'}}>
            Home
          </Link>
        </div>
        <div className={style.link}>
          <Link to="/form" style={{ textDecoration: 'none', color: '#f8efed'}}>
            Crear Actividad
          </Link>
        </div>
      </div>
      <div className={style.searchBar}>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Nav;
