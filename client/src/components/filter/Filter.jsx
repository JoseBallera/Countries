import { useDispatch } from "react-redux";
import { resetCountries, filterCountriesByContinent } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const continent = event.target.value;
    if (continent === "all") {
      dispatch(resetCountries());
    } else {
      dispatch(filterCountriesByContinent(continent));
    }
  };

  return (
    <div>
      <select onChange={handleChange}>
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
