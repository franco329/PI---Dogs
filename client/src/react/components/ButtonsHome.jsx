import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { breedsForPage } from "../../redux/actions";

const ButtonsHome = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.allBreeds);

  // ------------ Estados de Paginado ---------------------------
  const [ForPage, setForPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const breedsPerPage = 8;
    const indexOfLastBreed = currentPage * breedsPerPage;
    const indexOfFirstBreed = indexOfLastBreed - breedsPerPage;
    const currentBreeds = breeds.slice(indexOfFirstBreed, indexOfLastBreed);
    setForPage(currentBreeds);
  }, [currentPage, breeds]);

  // ------------ Seccion de Handles ---------------------------
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = breeds.length;

  // ------------ Seccion de Dispatch ---------------------------
  dispatch(breedsForPage(ForPage));

  return (
    <>
      <div className='buttons'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disable={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disable={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ButtonsHome;
