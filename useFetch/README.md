# useFetch
Se encarga de recibir una URL, hacer un fetch de la misma y retornar un estado con los datos.


Declaración:

```
    const url = 'www.api.com'; //endpoint de una api.
    const {data: null, loading: true, error: null} = useFetch(url);
```


Ejemplo de uso:

```
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
```
