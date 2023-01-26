import React from "react";
import { Link } from "react-router-dom";
import notImage from "../../images/notImage.jpg";

export const Card = ({ breedData }) => {
  function handleImage(e) {
    e.target.src = notImage;
  }

  return (
    <>
      {breedData.map((breed) => {
        return (
          <div className='card' key={breed.id}>
            <div className='imgBox'>
              <Link to={`/home/detail/${breed.id}`}>
                <img
                  src={breed.image === null ? notImage : breed.image}
                  alt={breed.id}
                  onError={handleImage}
                />
                <p>
                  <strong className='img-text'>{breed.name}</strong>
                </p>
              </Link>
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
    </>
  );
};
