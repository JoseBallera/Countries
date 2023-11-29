import { useDispatch } from "react-redux";
import {
  resetCountries,
  filterCountriesByContinent,
  setCurrentPage,
} from "../../redux/actions";
import style from "./Filter&Sort.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const continent = event.target.value;
    if (continent === "all") {
      dispatch(resetCountries());
    } else {
      dispatch(filterCountriesByContinent(continent));
      dispatch(setCurrentPage(1))
    }
  };

  return (
    <div>
      <select
        className={style.filter}
        defaultValue="all"
        onChange={handleChange}
      >
        <option value="all">Todos los continentes</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antartico</option>
      </select>
    </div>
  );
};

export default Filter;
