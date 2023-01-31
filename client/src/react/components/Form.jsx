import React, { useState } from "react";
import "../styles/StyledForm.css";
import ComponenteInput from "./ComponenteInput";
import {
  Formulario,
  ContenedroBotonCerrado,
  Boton,
  MensajeExito,
  MensajeError,
} from "../styles/StyledForm.js";

const Form = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const expresiones = {
    usuario: /^[a-zA-Z0-9-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  return (
    <main>
      <Formulario action=''>
        {/* ------------------------------------------------------------------------------------- */}
        <ComponenteInput
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          tipo='text'
          label='Usuario'
          placeholder='guauuf'
          name='usuario'
          leyendaError='El usuario tiene que ser de 4 a 16 digitos y solo puede tener numeros, letras y guion bajo.'
          expresionRegular={expresiones.usuario}
        />
        {/* ------------------------------------------------------------------------------------- */}
        {
          <MensajeError>
            <MensajeError>
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </MensajeError>
          </MensajeError>
        }
        <ContenedroBotonCerrado>
          <Boton type='submit'>Enviar</Boton>
          <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
        </ContenedroBotonCerrado>
        {/* ------------------------------------------------------------------------------------- */}
      </Formulario>
    </main>
  );
};
//        Nombre
//        Altura (Diferenciar entre altura mínima y máxima)
//        Peso (Diferenciar entre peso mínimo y máximo)
//        Años de vida
// [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
// [ ] Botón/Opción para crear una nueva raza de perro
// Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre de la raza no pueda contener números o símbolos, que el peso/altura mínimo no pueda ser mayor al máximo y viceversa, etc.

export default Form;
