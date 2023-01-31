import React from "react";
import { Label, GrupoInput, LeyendaError, Input } from "../styles/StyledForm";

const ComponenteInput = ({
  estado,
  cambiarEstado,
  tipo,
  label,
  placeholder,
  name,
  leyendaError,
  expresionRegular,
}) => {
  const onChange = (event) => {
    cambiarEstado({ ...estado, campo: event.target.value });
  };
  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
  };
  return (
    <div>
      <Label htmlFor={name} valido={estado.valido}>
        {label}
      </Label>
      <GrupoInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};

export default ComponenteInput;
