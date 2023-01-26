import React from "react";
import notImage from "../../images/notImage.jpg";

function CardDetail({ detail }) {
  function handleImage(e) {
    e.target.src = notImage;
  }
  return (
    <>
      <div className='boton-modal'>
        <label htmlFor='btn-modal'>Abrir modal</label>
      </div>
      <input type='checkbox' id='btn-modal' />
      <div className='container-modal'>
        <div className='content-modal'>
          <h2>Bienvenido!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla
            est accusamus recusandae veritatis dolor maxime aspernatur illo
            amet, deleniti animi. Laudantium eveniet vel accusantium repellat,
            sed molestiae neque dolorem!
          </p>
          <div className='btn-cerrar'>
            <label htmlFor='btn-modal'>Cerrar</label>
          </div>
        </div>
        <label htmlFor='btn-modal' className='cerrar-modal'></label>
      </div>
    </>
  );
}

export default CardDetail;

{
  /* <img src={detail.image} alt={detail.id} onError={handleImage} />
<div>{detail.name}</div>
<div>{detail.weight}</div>
<div>{detail.height}</div>
<div>{detail.life_span}</div>
<div>{detail.temperament ? detail.temperament.join(", ") : null}</div> */
}
