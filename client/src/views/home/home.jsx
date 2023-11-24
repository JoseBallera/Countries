import { useDispatch, useSelector } from "react-redux";
import { getCountries, setCurrentPage } from "../../redux/actions";
import Cards from "../../components/cards/Cards";
import { useEffect } from "react";
import Filter from "../../components/filter/Filter";
import Sort from "../../components/sort/Sort";
import ActivitiesFilter from "../../components/filter/ActivitiesFilter";
import styles from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.countries);
  const currentPage = useSelector((state) => state.currentPage);
  const cardsPerPage = 10;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = characters.slice(indexOfFirstCard, indexOfLastCard);
  // console.log(currentCards)
  const firstPage = () => dispatch(setCurrentPage(1));
  const nextPage = () => dispatch(setCurrentPage(currentPage + 1));
  const prevPage = () => dispatch(setCurrentPage(currentPage - 1));

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <Sort />
          <Filter />
          <ActivitiesFilter />
        </div>
        <div className={styles.cards}>
          <Cards currentCards={currentCards} />
        </div>
        <div className={styles.botones}>
          <button onClick={firstPage} disabled={currentPage === 1}>
            Primera página
          </button>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <button onClick={nextPage} disabled={indexOfLastCard >= characters.length}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
