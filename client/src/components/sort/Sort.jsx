import { useDispatch } from 'react-redux';
import {
  sortCountriesByNameAsc,
  sortCountriesByNameDesc,
  sortCountriesByPopulationAsc,
  sortCountriesByPopulationDesc,
  resetCountries,
} from '../../redux/actions';
import style from "../filter/Filter&Sort.module.css";
const SortDropdown = () => {
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    switch (event.target.value) {
      case 'non-sort':
        dispatch(resetCountries());
        break;
      case 'name-asc':
        dispatch(sortCountriesByNameAsc());
        break;
      case 'name-desc':
        dispatch(sortCountriesByNameDesc());
        break;
      case 'population-asc':
        dispatch(sortCountriesByPopulationAsc());
        break;
      case 'population-desc':
        dispatch(sortCountriesByPopulationDesc());
        break;
      default:
        break;
    }
  };

  return (
    <select className={style.filter} onChange={handleChange}>
      <option value="non-sort">Ordenar por...</option>
      <option value="name-asc">Nombre (ascendente)</option>
      <option value="name-desc">Nombre (descendente)</option>
      <option value="population-asc">Poblacion (ascendente)</option>
      <option value="population-desc">Poblacion (descendente)</option>
    </select>
  );
};

export default SortDropdown;
