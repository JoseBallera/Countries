import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../searchbar/SearchBar";
import { useDispatch } from 'react-redux';
import {resetCountries} from '../../redux/actions';
const Nav = () => {
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(resetFiltersAndSort());
  };
  return (
    <nav className={style.navContainer}>
      <div className={style.link}>
        <Link to="/home" className={style.linkItem} onClick={handleHomeClick}>
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
