import React from "react";
import {
  getAllBreeds,
  getAllTemperaments,
  getDogName,
  getDogId,
  filterByName,
  filterByWeight,
  filterByTemperament,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import notImage from "../../images/notImage.jpg";
import "../styles/BreedCard.css";
import { useState, useEffect } from "react";
import BreedModal from "./BreedModal";

const BreedCard = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.allBreeds);
  const filterBreeds = useSelector((state) => state.breeds);
  const allTemperaments = useSelector((state) => state.temperaments);
  // // ------------ Estados de Modal ---------------------------
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [breedDetail, setBreedDetail] = useState(null);
  // ------------- Paginado ------------------------------------------

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  // -------------- Paginado --------------------------------------------------
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(filterBreeds.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterBreeds.slice(indexOfFirstItem, indexOfLastItem);

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
  // -------------- Handlers Filter ----------------------------------
  const [idTemp, setIdTemp] = useState(-1);
  function handlerFilterName(event) {}
  function handlerFilterWeight(event) {}
  function handlerFilterTemperament(event) {
    dispatch(filterByTemperament(event.target.value));
  }

  // ------------ Seccion de Handles Modal ---------------------------
  const handleSelectId = (id) => {
    setSelectedId(id);
    const breedId = filterBreeds.find((breed) => breed.id === id);
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
  useEffect(() => {
    dispatch(getAllBreeds());
    dispatch(getAllTemperaments());
  }, []);
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
        <div className='filters-container'>
          <select onChange={(event) => handlerFilterName(event)}>
            <option disabled defaultValue>
              {" "}
              Order by name
            </option>
            <option key={1} value='A-Z'>
              A-Z
            </option>
            <option key={2} value='Z-A'>
              Z-A
            </option>
          </select>

          <select onChange={(event) => handlerFilterWeight(event)}>
            <option disabled defaultValue>
              Order by weight
            </option>
            <option key={1} value='max_weight'>
              Max
            </option>
            <option key={2} value='mix_weight'>
              Min
            </option>
          </select>

          <select onChange={(event) => handlerFilterTemperament(event)}>
            <option disabled defaultValue>
              Temperaments
            </option>
            <option key={1 + "e"} value='All'>
              All
            </option>
            {allTemperaments.map((temp, i) => (
              <option value={temp.name} key={temp.id}>
                {temp.name}
              </option>
            ))}
          </select>
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
