import { useDispatch } from "react-redux";
import {  getGames, filterGamesByGenre } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const genre = event.target.value;
    if (genre === "all") {
      dispatch(getGames());
    } else {
      dispatch(filterGamesByGenre(genre));
    }
  };
  return (
    <select onChange={handleChange}>
      <option value="all">Todos</option>
      <option value="Action">Accion</option>
      <option value="Indie">Indie</option>
      <option value="Adventure">Aventura</option>
      <option value="RPG">RPG</option>
      <option value="Strategy">Estrategia</option>
      <option value="Shooter">Shooter</option>
      <option value="Casual">Casual</option>
      <option value="Simulation">Simulacion</option>
      <option value="Puzzle">Puzzle</option>
      <option value="Arcade">Arcade</option>
      <option value="Platformer">Plataformer</option>
      <option value="Massively Multiplayer">MMO</option>
      <option value="Racing">Carrera</option>
      <option value="Sports">Deportes</option>
      <option value="Fighting">Lucha</option>
      <option value="Family">Familia</option>
      <option value="Board Games">Juegos de mesa</option>
      <option value="Educational">Educacion</option>
      <option value="Card">Cartas</option>
    </select>
  );
};

export default Filter;
