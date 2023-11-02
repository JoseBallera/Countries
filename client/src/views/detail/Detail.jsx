import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/videogames/${id}`).then(({ data }) => {
      if (data.ID) {
        setCharacter(data);
      }
    });
  }, [id]);
  return (
    <div className={style.container}>
      <div className={style.titulo}>
        <h2>{character.ID}</h2>
        <h1>{character.Nombre}</h1>
        <img
          className={style.img}
          src={character.Imagen}
          alt={character.Nombre}
        />
      </div>
      <div className={style.stats}>
        <h1>Stats</h1>
        <h2>Descripcion: {character.Descripcion}</h2>
        {/* <h2>Plataformas: {character.Plataformas}</h2> */}
        <h2>Fecha de lanzamiento: {character.Lanzamiento}</h2>
        <h2>Rating: {character.Rating}</h2>

        
      </div>
    </div>
  );
};
export default Detail;
