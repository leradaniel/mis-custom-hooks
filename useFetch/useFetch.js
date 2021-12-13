import { useEffect, useRef, useState } from "react";
//Se pide por parámetro la url de la cual se va a hacer un fetch
export const useFetch = (url) => {
  //Se podría hacer una validación con un "if" de que la url no esté vacía.

  //useRef que indica que el componente está montado.
  //Va a llevar la referencia de si este hook sigue vivo.
  //También de si el componente que lo llama está montado.
  const isMounted = useRef(true);

  //Cuando este hook/componente se desmonta, se modifica el ref "isMounted"
  //Esto se hace por medio de su "current"
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  //Los datos predeterminados de cuando se crea el componente
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  //Efecto que se dispara cuando se recibe / cambia la URL
  useEffect(() => {
    //Al modificarse la URL, se vacían los datos y se indica que se carga de nuevo:
    setState({ data: null, loading: true, error: null });

    //El fetch se usa en un componente, que hace la llamada y recibe la respuesta
    //Si mientras se hace la petición al fetch el componente se desmonta, tira error.
    fetch(url)
      .then((resp) => resp.json()) //Devuelve una promesa. Se extrae el json
      //Se devuelve otra promesa con la data:
      .then((data) => {
        //Esta llamada solamente se hace si el componente está montado
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data, //No se especifica, porque es igual a la que devuelve la promesa
          });
        }
      });
  }, [url]);

  //Se devuelve el objeto con los datos:
  return state;
};
