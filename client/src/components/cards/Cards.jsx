//import { useSelector } from 'react-redux';
import Card from "../card/Card";
import style from "./Cards.module.css";

const Cards = ({ currentCards }) => {
    return (
      <div className={style.container}>
        <div className={style.cards}>
          {currentCards.map((character) => (
            <Card
              key={character.ID}
              id={character.ID}
              nombre={character.Nombre}
              bandera={character.Bandera}
              continente={character.Continente}
            />
          ))}
        </div>
      </div>
    );
  }
export default Cards;
