import { useDispatch, useSelector } from "react-redux";
import { getCountries, setCurrentPage } from "../../redux/actions";
import Cards from "../../components/cards/Cards";
import { useEffect } from "react";

const Home = () => {
   const dispatch = useDispatch();
  
   const characters = useSelector((state) => state.countries);
   const currentPage = useSelector((state) => state.currentPage);
   const cardsPerPage = 15;
   const indexOfLastCard = currentPage * cardsPerPage;
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
   const currentCards = characters.slice(indexOfFirstCard, indexOfLastCard);
  // console.log(currentCards)
   const nextPage = () => dispatch(setCurrentPage(currentPage + 1));
   const prevPage = () => dispatch(setCurrentPage(currentPage - 1));

   useEffect(() => {
     dispatch(getCountries());
   }, [dispatch]);

  return (
    <>
      <div>
        <Cards currentCards ={currentCards} />
      </div>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={nextPage} disabled={indexOfLastCard >= characters.length}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default Home;
