import React from "react"
import './counterStyled.css';
import { useState } from 'react';

function Counter() {
    const [valor, setValor] = useState(0);
    const add = () => {
        setValor(valor + 1)
    }

    const sub = () => {
        setValor(valor -1)
    }


    return (
        <div className="counter">
            <p>{valor}</p>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
        </div>
    )
}

export default Counter