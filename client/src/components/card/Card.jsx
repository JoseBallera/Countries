 import style from "./Card.module.css";
 import { Link } from "react-router-dom";

const Card = ({id, nombre, bandera, continente}) => {
  
  return (
    
    <Link to={`/detail/${id}`} style={{ textDecoration: 'none'}}>
      <div className={style.container}>
        <h3 key={id}>{id}</h3>
        <img src={bandera} alt="game" width="120px" height="80px" />
        <h2>{nombre}</h2>
        <h2>{continente}</h2>
      </div>
    </Link>
  
  );
};

export default Card;
