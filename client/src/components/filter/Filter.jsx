import { useDispatch } from "react-redux";
import { getCountries, filterCountriesByContinent } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const continent = event.target.value;
    if (continent === "all") {
      dispatch(getCountries());
    } else {
      dispatch(filterCountriesByContinent(continent));
    }
  };
  return (
    <select onChange={handleChange}>
      <option value="all">Todos</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europa</option>
      <option value="Oceania">Oceania</option>
      <option value="Antarctic">Antartico</option>
    </select>
  );
};

export default Filter;
