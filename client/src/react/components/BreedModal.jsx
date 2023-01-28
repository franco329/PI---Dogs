import React from "react";
import styled from "styled-components";
import notImage from "../../images/notImage.jpg";

const BreedModal = ({ breed, estado, cambiarEstado }) => {
  function handleImage(e) {
    e.target.src = notImage;
  }

  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <img src={breed.image} alt={breed.name} onError={handleImage} />
            </EncabezadoModal>

            <p>
              <strong>Name:</strong> {breed.name}
            </p>
            <p>
              <strong>Weight:</strong> {breed.weight} kg.
            </p>
            <p>
              <strong>Height:</strong> {breed.height} cm.
            </p>
            <p>
              <strong>Life Span:</strong> {breed.life_span}.
            </p>
            <p>
              <strong>Temperaments:</strong> {breed.temperament.join(", ")}
            </p>

            <BotonCerrar onClick={() => cambiarEstado(false)}>X</BotonCerrar>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default BreedModal;

const Overlay = styled.div`
  width: 100vw;
  height: 90vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 800px;
  min-height: 300px;
  background: #fff;
  position: relative;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 40px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid #e8e8e8;

  p {
    font-weight: 600;
    font-size: 16px;
    color: #00000;
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #1766dc;

  &:hover {
    background: #f2f2f2;
  }
`;
