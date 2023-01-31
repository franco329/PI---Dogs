import React from "react";
import { useSelector } from "react-redux";
import notImage from "../../images/notImage.jpg";
import "../styles/BreedCard.css";
import { useState, useEffect } from "react";
import BreedModal from "./BreedModal";

const BreedCard = () => {
  const breeds = useSelector((state) => state.allBreeds);
  // // ------------ Estados de Modal ---------------------------
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [breedDetail, setBreedDetail] = useState(null);
  // ------------- Paginado ------------------------------------------
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  // -------------- Busqueda ----------------------------------------

  // ----------------------------------------------------------------

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    setData(breeds);
  }, [breeds]);
  // ------------ Seccion de Handles Modal ---------------------------
  const handleSelectId = (id) => {
    setSelectedId(id);
    const breedId = data.find((breed) => breed.id === id);
    setBreedDetail(breedId);
  };

  // -------------------- Handles next/prev ---------------------------------
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }
  // -------------------- Error de imagen -----------------------------------
  const handleImage = (e) => {
    e.target.src = notImage;
  };
  // -------------------- Input busqueda -------------------------------------

  //-----------------------------------------------------------------------------------
  return (
    <>
      {/* ---------------------------------------------------------------------------- */}
      <header>
        <div className='pagination'>
          <ul className='pageNumbers'>
            <li>
              <button
                onClick={handlePrevbtn}
                disabled={currentPage === pages[0] ? true : false}
              >
                Prev
              </button>
            </li>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}

            <li>
              <button
                onClick={handleNextbtn}
                disabled={currentPage == pages[pages.length - 1] ? true : false}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
        {/* ---------------------------------------------------------------------------- */}
        <div className='pageBody'>
          <div className='container'>
            {currentItems.map((breed) => {
              return (
                <div className='card' key={breed.id}>
                  <div className='boxImg'>
                    <div className='img-detail'>
                      <img
                        className='breedImg'
                        src={breed.image === null ? notImage : breed.image}
                        alt={breed.id}
                        onError={handleImage}
                        onClick={() => {
                          handleSelectId(breed.id);
                          cambiarEstadoModal(!estadoModal);
                        }}
                      />
                      <h4>{breed.name}</h4>
                    </div>
                  </div>
                  <div className='textContent'>
                    <h4>
                      Weight:
                      <br />
                    </h4>
                    {"  "}
                    {breed.weight}
                    <h4>
                      Temperament:
                      <br />
                    </h4>
                    {"  "}
                    {breed.temperament ? breed.temperament.join(", ") : null}
                  </div>
                </div>
              );
            })}
          </div>

          <BreedModal
            breed={breedDetail}
            estado={estadoModal}
            cambiarEstado={cambiarEstadoModal}
          />
        </div>
      </header>
    </>
  );
};

export default BreedCard;
