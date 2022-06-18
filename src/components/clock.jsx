import React, { useState, useEffect } from 'react'
import '../sass/clock.scss'

const Clock = () => {

    // Estado privado del componente
    const [state, setState] = useState(
        {
            // Se genera una fe4cha como estado inicial del componente
            fecha: new Date(),
            edad: 0,
            nombre: 'Martín',
            apellidos: 'San José'
        }
    );

    useEffect(() => {

        const tick = () => {
            let edad = state.edad + 1
            setState(
                {
                    ...state,
                    fecha: new Date(),
                    edad
                }
            )
        }

        const timerID = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerID)
        }
    }, [state])

    return (
        <div className='clock-container
        '>
            <h2 className='clock-time'>
                Hora Actual: {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {state.nombre} {state.apellidos}
            </h3>
            <h1>
                Edad: {state.edad}
            </h1>
        </div>
    );
}

export default Clock;
