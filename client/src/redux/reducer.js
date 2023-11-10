// reducer.js
import {
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  SET_CURRENT_PAGE,
  RESET_COUNTRIES,
  FILTER_COUNTRIES_BY_CONTINENT,
  FILTER_COUNTRIES_BY_ACTIVITY,
  SORT_COUNTRIES_BY_NAME_ASC,
  SORT_COUNTRIES_BY_NAME_DESC,
  SORT_COUNTRIES_BY_POPULATION_ASC,
  SORT_COUNTRIES_BY_POPULATION_DESC,
} from "./actions";

const initialState = {
  countries: [],
  allCountries: [],
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload,
      };
    case RESET_COUNTRIES:
      return { ...state, countries: state.allCountries };
    case FILTER_COUNTRIES_BY_CONTINENT:
      return { ...state, countries: action.payload };
    case FILTER_COUNTRIES_BY_ACTIVITY:
      return { ...state, countries: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SEARCH_COUNTRIES:
      return { ...state, countries: action.payload };
    case SORT_COUNTRIES_BY_NAME_ASC:
      return {
        ...state,
        countries: [...state.countries].sort((a, b) =>
          a.Nombre.localeCompare(b.Nombre)
        ),
      };
    case SORT_COUNTRIES_BY_NAME_DESC:
      return {
        ...state,
        countries: [...state.countries].sort((a, b) =>
          b.Nombre.localeCompare(a.Nombre)
        ),
      };
    case SORT_COUNTRIES_BY_POPULATION_ASC:
      return {
        ...state,
        countries: [...state.countries].sort(
          (a, b) => a.Poblacion - b.Poblacion
        ),
      };
    case SORT_COUNTRIES_BY_POPULATION_DESC:
      return {
        ...state,
        countries: [...state.countries].sort(
          (a, b) => b.Poblacion - a.Poblacion
        ),
      };
    default:
      return state;
  }
};

export default reducer;
