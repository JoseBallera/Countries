import style from "./SearchBar.module.css"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchCountries } from "../../redux/actions";
import search from "../../assets/search.png";
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
    <div className={style.container}>
      <input type="search" onChange={handleChange} placeholder="Buscar Paises"/>
      <button onClick={() => onSearch(name)}><img src={search}></img></button>
    </div>
  );
};
export default SearchBar;
