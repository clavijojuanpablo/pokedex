import React from 'react'

const PokeMovements = ({pokemon}) => {
    return (
        <div className="InfoMovements">
            <h2>Movements</h2>
            <div className="MovementsContainer">

                {
                    pokemon?.moves.map(mov => (

                        <p key={mov.move.name}>{mov.move.name}</p>
                    ))
                }
            </div>

        </div>
    )
}

export default PokeMovements