// reducer.js
import {
  GET_GAMES,
  SEARCH_GAMES,
  SET_CURRENT_PAGE,
  FILTER_GAMES_BY_GENRE,
  SORT_GAMES_BY_NAME_ASC,
  SORT_GAMES_BY_NAME_DESC,
  SORT_GAMES_BY_RATING_ASC,
  SORT_GAMES_BY_RATING_DESC,
} from "./actions";

const initialState = {
  games: [],
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, games: action.payload };
    case FILTER_GAMES_BY_GENRE:
      return { ...state, games: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SEARCH_GAMES:
      return { ...state, games: action.payload };
    case SORT_GAMES_BY_NAME_ASC:
      return { ...state, games: [...state.games].sort((a, b) => a.Nombre.localeCompare(b.Nombre)) };
    case SORT_GAMES_BY_NAME_DESC:
      return { ...state, games: [...state.games].sort((a, b) => b.Nombre.localeCompare(a.Nombre)) };
    case SORT_GAMES_BY_RATING_ASC:
      return { ...state, games: [...state.games].sort((a, b) => a.Rating - b.Rating) };
    case SORT_GAMES_BY_RATING_DESC:
      return { ...state, games: [...state.games].sort((a, b) => b.Rating - a.Rating) };
    default:
      return state;
  }
};

export default reducer;
