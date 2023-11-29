import style from "./Detail.module.css";

const Activity = ({ activity }) => {
  return (
    <div className={style.activity}>
      <h3>{activity.Nombre}</h3>
      <h4>Dificultad (1-5): {activity.Dificultad}</h4>
      <h4>Duración (hrs): {activity.Duracion}</h4>
      <h4>Temporada: {activity.Temporada}</h4>
    </div>
  );
};

export default Activity;
