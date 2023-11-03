import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/country/${id}`).then(({ data }) => {
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
          src={character.Bandera}
          alt={character.Nombre}
        />
      </div>
      <div className={style.stats}>
        <h1>Datos</h1>
        <h2>Continente: {character.Continente}</h2>
        <h2>Capital: {character.Capital}</h2>
        <h2>Subregion: {character.Subregion}</h2>
        <h2>Area: {character.Area}</h2>
        <h2>Poblacion: {character.Poblacion}</h2>

        
      </div>
    </div>
  );
};
export default Detail;
