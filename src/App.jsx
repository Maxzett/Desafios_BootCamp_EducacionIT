import { useState } from 'react'
import './App.scss'

function Form() {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  const handleForm = (event) => {
    event.preventDefault();
    if (nombre && edad) {
      if ((edad) < 18) {
        setMensaje(`Hola ${nombre}, eres muy joven para usar esta aplicacion.`)
      } else {
        setMensaje(`Bienvenido ${nombre}, gracias por usar nuestra aplicacion.`)
      }
      setError('')   
    } else {
        setMensaje('')
        setError('Por favor, ingrese su nombre y edad.')
      }
  };

  return (
    <main>
      <h1>Introduzca sus datos:</h1>
      <form onSubmit={handleForm}>
        <input type="text" placeholder='Nombre' id='nombre' 
        value={nombre}
        onChange={(event)=>setNombre(event.target.value)}
        />
        <input type="number" placeholder='Edad' id='edad' 
        value={edad}
        onChange={(event)=>setEdad(event.target.value)}
        />
        <button id='btn' type='submit'>Ingresar</button>
      </form>
      {mensaje && (
        <div className={`mensaje_bienvenida ${(edad) < 18 ? 'mensaje_bienvenida_joven' : ''}`}>
          {mensaje}
        </div>
      )}
      {error && (
        <div className='mensaje_error'>
          {error}
        </div>
      )}
    </main>
  );
};

export default Form
