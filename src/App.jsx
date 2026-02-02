import datos from './datos.json';
import { useEffect, useState } from 'react';
import { GameZone } from './components/GameZone';
import { Ranking } from './components/Ranking';
import { Timer } from './components/Timer';

function App() {

  const [paises] = useState(()=>{
    return [...datos].sort(() => Math.random() - 0.5)
  });
  
  const [contador, setContador] = useState(0);

  const [puntos, setPuntos] = useState(0);

  function alTerminarTurno (resultado) {
    setPuntos(puntos + resultado)
    setContador(contador+1);
  }

  // TIMER
  const TIEMPO_TOTAL = 30;
  const [timer, setTimer] = useState(TIEMPO_TOTAL);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTimer(tiempo => {
        if (tiempo <= 0) {
            clearInterval(intervalo);
            return 0;
        }
        return tiempo - 1;
      });
    }, 1000); 

    return () => clearInterval(intervalo);
  }, []); 

  const porcentaje = (timer / TIEMPO_TOTAL) * 100; // Parámetro necesario para el timer
  
  if (timer <= 0){
    return(
      <>
        <Ranking puntos={puntos}></Ranking>
      </>
    )
  }

  const paisActual = paises[contador];
  return (
    <>
      <h1 id='titulo-juego'>Diversión con banderas</h1>
      <GameZone rondaActual={contador+1} paisActual={paisActual} alTerminarTurno={alTerminarTurno} />
      <Timer porcentaje={porcentaje} timer={timer} />
    </>
  )
}

export default App
