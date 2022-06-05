const Alarma = (props) => {

    return (
        <div>
        <button onClick={()=>props.alarmar(7)}>son las 7</button>
        <button onClick={()=>props.alarmar(11)}>son las 11</button>
        </div>
    )
}

export default Alarma