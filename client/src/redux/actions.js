import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const FILTER_COUNTRIES_BY_CONTINENT = "FILTER_COUNTRIES_BY_CONTINENT";
export const SORT_COUNTRIES_BY_NAME_ASC = 'SORT_COUNTRIES_BY_NAME_ASC';
export const SORT_COUNTRIES_BY_NAME_DESC = 'SORT_COUNTRIES_BY_NAME_DESC';
export const SORT_COUNTRIES_BY_POPULATION_ASC = 'SORT_COUNTRIES_BY_POPULATION_ASC';
export const SORT_COUNTRIES_BY_POPULATION_DESC = 'SORT_COUNTRIES_BY_POPULATION_DESC';

export const sortCountriesByNameAsc = () => ({ type: SORT_COUNTRIES_BY_NAME_ASC});
export const sortCountriesByNameDesc = () => ({ type: SORT_COUNTRIES_BY_NAME_DESC });
export const sortCountriesByPopulationAsc = () => ({ type: SORT_COUNTRIES_BY_POPULATION_ASC });
export const sortCountriesByPopulationDesc = () => ({ type: SORT_COUNTRIES_BY_POPULATION_DESC});


export const getCountries = () => {
  return async (dispatch) => {
    const countries = await axios.get("http://localhost:3001/country");
    dispatch({ type: GET_COUNTRIES, payload: countries.data });
  };
};

// export const filterCountriesByContinent = (continent) => {
//   return (dispatch, getState) => {
//     const countries = getState().countries;
//     const filteredCountries = countries.filter((country) =>
//       country.Continente === continent
//     );
//     dispatch({ type: FILTER_COUNTRIES_BY_CONTINENT, payload: filteredCountries });
//   };
// };


export const searchCountries = (name) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/country/name?name=${name}`
    );
    if (response.data.length === 0) {
      window.alert(`No Country was found with the name '${name}'`);
    } else {
      dispatch({ type: SEARCH_COUNTRIES, payload: response.data });
    }
  };
};

export const filterCountriesByContinent = (continent) => {
  return (dispatch, getState) => {
    const allCountries = getState().allCountries;
    let filteredCountries;
    if (continent === "all") {
      filteredCountries = allCountries;
    } else {
      filteredCountries = allCountries.filter((country) =>
        country.Continente === continent
      );
    }
    dispatch({ type: FILTER_COUNTRIES_BY_CONTINENT, payload: filteredCountries });
  };
};

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
