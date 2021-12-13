# useForm
Sirve para manejar los valores de un formulario. Devuelve un arreglo.


Declaración:

```
    const initialForm = {
        name:"",
        age:0,
        email:"mail@gmail.com"
    };

    const { formValues, handleInputChange, reset } = useForm( initialForm );
```


Ejemplo de uso:

```
    const [formValues, handleInputChange] = useForm({ username: "", email: "", password: ""});
    const { username, email, password } = formValues;
```
```
    <form>
        <div className="form-group">
            <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={username}
            onChange={handleInputChange}
            />
        </div>
    </form>
```