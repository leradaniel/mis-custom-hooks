import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  }
  // Se desestructura "target" del evento recibido
  const handleInputChange = ({ target }) => {
    // target.name se pone entre [] porque es un array (cadena de caracteres)
    setValues({ ...values, [target.name]: target.value });
  };

  return [values, handleInputChange, reset];
};
