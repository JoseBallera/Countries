 import style from "./Card.module.css";
 import { Link } from "react-router-dom";

const Card = ({id, nombre, imagen, genero}) => {
  
  return (
    <>
    <Link to={`/detail/${id}`}>
      <div className={style.container}>
        <h3 key={id}>{id}</h3>
        <img src={imagen} alt="game" width="180px" height="200px" />
        <h2>{nombre}</h2>
        {/* <ul>
          {genero.map((genre) => (
            <li key={genre.ID}>{genre.Nombre}</li>
          ))}
        </ul> */}
      </div>
    </Link>
  </>
  );
};

export default Card;
