# useCounter
Es un contador, que sirve para incrementar / decrementar / resetear el valor de una variable


• El valor por defect de useCounter() es 0.

• El valor por defect de increment() y decrement() es 1.

Declaración:

```
    const { counter, increment, decrement, reset } = useCounter(10);
```


Ejemplo de uso:

```
    <h1>Counter value: {counter}</h1>
    <button onClick={() => increment()} className="btn btn-success"> +1 </button>
    <button onClick={() => decrement(10)} className="btn btn-danger"> -10 </button>
    <button onClick={reset} className="btn btn-info"> Reset </button>
```