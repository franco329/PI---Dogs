import React from "react";
import { useSelector } from "react-redux";
import notImage from "../../images/notImage.jpg";
import "../styles/BreedCard.css";
import { useState, useEffect } from "react";
import BreedModal from "./BreedModal";

const BreedCard = () => {
  // ------------ Estados de Modal ---------------------------
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [breedDetail, setBreedDetail] = useState(null);
  const breeds = useSelector((state) => state.breedsForPage);
  console.log(breeds);

  // ------------ Seccion de Handles ---------------------------

  function handleSelectId(id) {
    setSelectedId(id);
    const breedId = breeds.find((breed) => breed.id === id);
    setBreedDetail(breedId);
  }
  useEffect(() => {
    if (selectedId) {
      const breedId = breeds.find((breed) => breed.id === selectedId);
      setBreedDetail(breedId);
    }
  }, [selectedId, breeds]);

  function handleImage(e) {
    e.target.src = notImage;
  }

  return (
    <>
      <section className='container'>
        {breeds.map((breed) => {
          return (
            <div className='card' key={breed.id}>
              <div className='imgBox'>
                <div className='img-detail'>
                  <img
                    src={breed.image === null ? notImage : breed.image}
                    alt={breed.id}
                    onError={handleImage}
                    onClick={() => {
                      handleSelectId(breed.id);
                      cambiarEstadoModal(!estadoModal);
                    }}
                  />
                  <p>
                    <strong className='img-text'>{breed.name}</strong>
                  </p>
                </div>
              </div>
              <div className='content'>
                <p>
                  <strong>Weight:</strong>
                  <br />
                  {"  "}
                  {breed.weight}
                </p>
                <p>
                  <strong>Temperament:</strong>
                  <br />
                  {"  "}
                  {breed.temperament ? breed.temperament.join(", ") : null}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <BreedModal
        breed={breedDetail}
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
      />
    </>
  );
};

export default BreedCard;
