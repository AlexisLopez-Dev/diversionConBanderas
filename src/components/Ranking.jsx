import { useEffect, useState } from "react"
import './style.css'
import { useForm } from "react-hook-form";

export const Ranking = ({puntos}) => {

    const [listaRanking, setListaRanking] = useState([]);

    const [guardado, setGuardado] = useState(false);

    const {register, handleSubmit, reset} = useForm();

    const handleSubmitForm = handleSubmit(data => {
        const nombreUsuario = data.nombreUsuario;

        const nuevaLista = [...listaRanking, {nombreUsuario, puntos}]
        localStorage.setItem('ranking', JSON.stringify(nuevaLista));

        setListaRanking(nuevaLista);
        setGuardado(true);
        reset();
    })

    useEffect(()=>{

        const datosGuardados = localStorage.getItem('ranking');

        if(datosGuardados){

            setListaRanking(JSON.parse(datosGuardados));

        } else {

            localStorage.setItem('ranking', JSON.stringify([]));
        }

    }, [])


  return (
    <>
        <h1>¡Partida terminada!</h1>
        <h3>Puntuación total: {puntos}</h3>

        {guardado ? (
            <h3>¡Record guardado con éxito!</h3>
        ) : (
            <form onSubmit={handleSubmitForm}>
                Tu nombre:
                <input type="text" 
                    {
                        ...register('nombreUsuario')
                    }
                />
                <button>Guardar record</button>
            </form>
        )}

        
        <div>
            <h2>Ranking actual:</h2>
            <ul>
            {
                [...listaRanking]
                    .sort((a,b) => b.puntos - a.puntos)
                    .map((item, index) => (
                        <li key={index}> 
                            <strong>{item.nombreUsuario}:</strong> {item.puntos} puntos
                        </li>
                ))
            }
            </ul>
        </div>

        <button onClick={() => window.location.reload()} style={{marginTop:'20px'}}>
             Jugar otra vez
        </button>
    </>
  )
}
