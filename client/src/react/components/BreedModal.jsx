import React from "react";
import "../styles/BreedModal.css";
import notImage from "../../images/notImage.jpg";

const BreedModal = ({ breed, estado, cambiarEstado }) => {
  function handleImage(e) {
    e.target.src = notImage;
  }

  return (
    <>
      {estado && (
        <>
          <div className='card-container'>
            <div className='contenedor-modal'>
              <div className='image-container'>
                <img src={breed.image} alt={breed.name} onError={handleImage} />
              </div>
              <div className='card-content'>
                <div className='card-title'>
                  <h3>{breed.name}</h3>
                </div>
                <div className='card-body'>
                  <h3>
                    Weight:
                    <br />
                  </h3>
                  <p>{breed.weight} kg.</p>
                  <h3>
                    Height:
                    <br />
                  </h3>
                  <p>{breed.height} cm.</p>
                  <h3>
                    Life Span:
                    <br />
                  </h3>
                  <p>{breed.life_span}.</p>
                  <h3>
                    Temperaments:
                    <br />
                  </h3>
                  <p>{breed.temperament.join(", ")}</p>
                </div>
              </div>
              <div className='button-close'>
                <button onClick={() => cambiarEstado(false)}>Close</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BreedModal;
