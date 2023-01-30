import React from "react";
import { useSelector } from "react-redux";
import notImage from "../../images/notImage.jpg";
import "../styles/BreedCard.css";
import { useState, useEffect } from "react";
import BreedModal from "./BreedModal";
import ButtonsHome from "./ButtonsHome";

const BreedCard = () => {
  // ------------ Estados de Modal ---------------------------
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [breedDetail, setBreedDetail] = useState(null);
  const breeds = useSelector((state) => state.breedsForPage);
  //-------------  Estados de filtrado ---------------------------

  // ------------ Seccion de Handles ---------------------------

  const handleSelectId = (id) => {
    setSelectedId(id);
    const breedId = breeds.find((breed) => breed.id === id);
    setBreedDetail(breedId);
  };
  useEffect(() => {
    if (selectedId) {
      const breedId = breeds.find((breed) => breed.id === selectedId);
      setBreedDetail(breedId);
    }
  }, []);

  const handleImage = (e) => {
    e.target.src = notImage;
  };

  //----------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------
  return (
    <>
      <div className='pageBody'>
        <input
          type='text'
          className='btn btn-inicio btn-2'
          placeholder='Search by temperament'
          maxLength='20'
        ></input>
        <ButtonsHome />
        <div className='container'>
          {breeds.map((breed) => {
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
    </>
  );
};

export default BreedCard;
