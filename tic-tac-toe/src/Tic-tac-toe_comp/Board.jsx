import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    const [state, SetName] = useState(Array(9).fill(null));

    const handleclick = (index) => {
        console.log("Clicked on index", index)

    }
    return (
        <div className="Board-container">
            <div className="Board-row">
                <Square onClick={() => handleclick(0)} value={state[0]} />
                <Square onClick={() => handleclick(1)} value={state[1]} />
                <Square onClick={() => handleclick(2)} value={state[2]} />
            </div>
            <div className="Board-row">
                <Square onClick={() => handleclick(3)} value={state[3]} />
                <Square onClick={() => handleclick(4)} value={state[4]} />
                <Square onClick={() => handleclick(5)} value={state[5]} />
            </div>
            <div className="Board-row">
                <Square onClick={() => handleclick(6)} value={state[6]} />
                <Square onClick={() => handleclick(7)} value={state[7]} />
                <Square onClick={() => handleclick(8)} value={state[8]} />
            </div>
        </div>
    )
}




export default Board;