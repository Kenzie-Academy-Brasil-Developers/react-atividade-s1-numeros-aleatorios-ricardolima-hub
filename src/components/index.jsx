import "./style.css"
import { useState } from 'react'

function GenerateRandom () {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

    function randomNumber () {
        setNumber(Math.floor(Math.random() * 100) + 1);
    }

    return (
        <div className="container">
            <p className="number">{number}</p>
            <button onClick={randomNumber}>Criar novo numero</button>
        </div>
    )
}

export default GenerateRandom