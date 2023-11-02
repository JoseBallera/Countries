
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchCountries } from "../../redux/actions";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const onSearch = (name) => {
    dispatch(searchCountries(name));
  };
  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(name)}>Buscar</button>
    </div>
  );
};
export default SearchBar;
