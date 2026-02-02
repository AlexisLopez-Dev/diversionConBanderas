import './style.css'

export const Timer = ({porcentaje, timer}) => {

    const esCritico = porcentaje < 20;
    const claseBarra = esCritico ? 'timer-bar critical' : 'timer-bar';

  return (
    <div className="timer-container">
        <div className={claseBarra} style={{ width: `${porcentaje}%` }}>
            {porcentaje > 10 && <span className="timer-text">{timer}s</span>}
        </div>
    </div>  
  )
}
