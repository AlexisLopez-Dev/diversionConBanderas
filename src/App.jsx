import { useForm } from 'react-hook-form';
import datos from './datos.json';
import { useState } from 'react';

function App() {

  const [paises] = useState(()=>{
    return [...datos].sort(() => Math.random() - 0.5)
  });
  
  const {register, handleSubmit, reset, formState: {errors}} = useForm();

  const [contador, setContador] = useState(0);

  const [puntos, setPuntos] = useState(0);

  const handleSubmitForm = handleSubmit(
    data => {
      if(data.nombreInput.toLowerCase().trim() === paises[contador].pais.toLowerCase()) setPuntos(puntos + 1)

      setContador(contador+1);

      reset();
    }
  );

  
  if (contador >= 5){
    return(
      <>
        <h1>¡Juego terminado!</h1>
        <h3>Puntuación total: {puntos}</h3>
      </>
    )
  }

  return (
    
    <>
      <h1>Diversión con banderas</h1>
      <h3>Ronda {contador+1}</h3>
        <form onSubmit={handleSubmitForm}>
          <img src={paises[contador].url} alt={paises[contador].pais} />

          Nombre del país:
          <input 
            type="text" 
            autoFocus
            {
              ...register('nombreInput', {
                required: '¡Escribe algo!',
                minLength: {
                  value: 2,
                  message: '¡Prueba con un nombre más largo!'
                }
              })
            }
          />
          <p> {errors.nombreInput?.message} </p>

          <button type="submit" >Enviar</button>
        </form>
    </>
    
  )
}

export default App
