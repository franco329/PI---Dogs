import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { breedsForPage } from "../../redux/actions";
import "../styles/ButtonsHome.css";

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
  }, [breeds, currentPage]);

  // ------------ Seccion de Handles ---------------------------
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = breeds.length;

  // ------------ Seccion de Dispatch ---------------------------
  dispatch(breedsForPage(ForPage));

  return (
    <>
      <div className='pagination'>
        <ul>
          <li>
            <button
              className='btn btn-inicio btn-2'
              onClick={() => handlePageChange(currentPage - 1)}
              disable={currentPage === 1}
            >
              {`<<`}
              <span></span>
              <span></span>
            </button>
          </li>
          <li>
            <button className='btn btn-inicio btn-2'>
              {currentPage} <span></span>
              <span></span>
            </button>
          </li>
          <li>
            <button
              className='btn btn-inicio btn-2'
              onClick={() => handlePageChange(currentPage + 1)}
              disable={currentPage === totalPages}
            >
              {`>>`} <span></span>
              <span></span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ButtonsHome;
