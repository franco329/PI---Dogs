import React from "react";
import notImage from "../../images/notImage.jpg";

function CardDetail({ detail }) {
  function handleImage(e) {
    e.target.src = notImage;
  }
  return (
    <>
      <img src={detail.image} alt={detail.id} onError={handleImage} />
      <div>{detail.name}</div>
      <div>{detail.weight}</div>
      <div>{detail.height}</div>
      <div>{detail.life_span}</div>
      <div>{detail.temperament ? detail.temperament.join(", ") : null}</div>
    </>
  );
}

export default CardDetail;
