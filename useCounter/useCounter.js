import { useState } from "react";

//Se declara similar a un componente, con un valor por defecto:
export const useCounter = (initialState = 0) => {
  //Se establece el valor inicial (tiene uno predeterminado opcional)
  const [counter, setCounter] = useState(initialState);

  //Función para sumar un valor (por defecto suma 1, se puede modificar al llamar)
  const increment = (factor = 1) => {
    setCounter(counter + factor);
  };

  //Función para restar un valor (por defecto se resta 1, se puede modificar al llamar)
  const decrement = (factor = 1) => {
    setCounter(counter - factor);
  };

  //Función para resetear el valor al predeterminado
  const reset = () => {
    setCounter(initialState);
  };

  //Se extrae y devuelve la lógica del hook
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};