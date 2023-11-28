import style from "./Detail.module.css"; 



const Activity = ({ activity }) => {
  return (
    <div className={style.activity}>
      <h3>{activity.Nombre}</h3>
      <p>Dificultad (1-5): {activity.Dificultad}</p>
      <p>Duración (hrs): {activity.Duracion}</p>
      <p>Temporada: {activity.Temporada}</p>
    </div>
  );
};

export default Activity;

