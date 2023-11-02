
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchGame } from "../../redux/actions";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const onSearch = (name) => {
    dispatch(searchGame(name));
  };
  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(name)}>Buscar</button>
    </div>
  );
};
export default SearchBar;
