import { useForm } from "react-hook-form";

export const GameZone = ({rondaActual, paisActual, alTerminarTurno}) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const handleSubmitForm = handleSubmit(
    data => {
        let resultado = 0;

        if(data.nombreInput.toLowerCase().trim() === paisActual.nombre.toLowerCase()) resultado = 1;
      
        alTerminarTurno(resultado);
        
        reset();
    }
  );

  return (
    <>
      <h3>Ronda {rondaActual}</h3>
        <form onSubmit={handleSubmitForm}>
          <img src={paisActual.url} alt={paisActual.nombre} />

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
