import { useState } from "react";
import style from "./Detail.module.css";
import Activity from "./Activity";

const ActivityCarousel = ({ activities }) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0); // Nuevo estado para el índice de la actividad actual

  // Función para ir a la actividad anterior
  const prevActivity = () => {
    setCurrentActivityIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : activities.length - 1
    );
  };

  // Función para ir a la actividad siguiente
  const nextActivity = () => {
    setCurrentActivityIndex((prevIndex) =>
      prevIndex < activities.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={style.carousel}>
      <Activity activity={activities[currentActivityIndex]} />
      <div className={style.buttons}>
        {activities.length > 1 && (
          <button onClick={prevActivity}>Anterior</button>
        )}
        {activities.length > 1 && (
          <button onClick={nextActivity}>Siguiente</button>
        )}
      </div>
    </div>
  );
};

export default ActivityCarousel;
