import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import ActivityCarousel from "./ActivityCarrousel";

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
    <div className={style.detail}>
      <div className={style.container}>
        <div className={style.titulo}>
          <img
            className={style.img}
            src={character.Bandera}
            alt={character.Nombre}
          />
          <h1>{character.Nombre}</h1>{" "}
        </div>
        <div className={style.stats}>
          <h1>Datos</h1>
          <h2>Continente: {character.Continente}</h2>
          <h2>Capital: {character.Capital}</h2>
          <h2>Subregion: {character.Subregion}</h2>
          <h2>Area (Km2): {Number(character.Area).toLocaleString("de-DE")}</h2>
          <h2>
            Poblacion (Hab):{" "}
            {Number(character.Poblacion).toLocaleString("de-DE")}
          </h2>
          <h2>Actividades:</h2>
          {character.Activities && character.Activities.length > 0 && (
            <ActivityCarousel activities={character.Activities} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
