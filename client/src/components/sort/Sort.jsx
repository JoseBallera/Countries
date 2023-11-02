
import { useDispatch } from 'react-redux';
import {
  sortCountriesByNameAsc,
  sortCountriesByNameDesc,
  sortCountriesByPopulationAsc,
  sortCountriesByPopulationDesc,
} from '../../redux/actions';

const SortDropdown = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (event.target.value) {
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
    <select onChange={handleChange}>
      <option value="">Ordenar por...</option>
      <option value="name-asc">Nombre (ascendente)</option>
      <option value="name-desc">Nombre (descendente)</option>
      <option value="population-asc">Poblacion (ascendente)</option>
      <option value="population-desc">Poblacion (descendente)</option>
    </select>
  );
};

export default SortDropdown;
