
import { useDispatch } from 'react-redux';
import {
  sortGamesByNameAsc,
  sortGamesByNameDesc,
  sortGamesByRatingAsc,
  sortGamesByRatingDesc,
} from '../../redux/actions';

const SortDropdown = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (event.target.value) {
      case 'name-asc':
        dispatch(sortGamesByNameAsc());
        break;
      case 'name-desc':
        dispatch(sortGamesByNameDesc());
        break;
      case 'rating-asc':
        dispatch(sortGamesByRatingAsc());
        break;
      case 'rating-desc':
        dispatch(sortGamesByRatingDesc());
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
      <option value="rating-asc">Calificación (ascendente)</option>
      <option value="rating-desc">Calificación (descendente)</option>
    </select>
  );
};

export default SortDropdown;
