import React from 'react'

const PokeHabs = ({pokemon, backgroundStyle, secondColor}) => {
    return (

        <div className="InfoTypeHabs">

            <div className="Tipo">
                <h2>Tipo</h2>
                <div className="TipoContainer">
                    <p style={{ background: backgroundStyle }}>{pokemon?.types[0]?.type.name}</p>
                    {
                        pokemon?.types[1]?.type.name ?
                            <p style={{ background: secondColor }}>{pokemon?.types[1]?.type.name}</p> :
                            null
                    }
                </div>
            </div>

            <div className="Habilidades">
                <h2>Habilidades</h2>
                <div className="HabsContainer">
                    <p>{pokemon?.abilities[0].ability.name}</p>
                    {
                        pokemon?.abilities[1].ability.name ?
                            <p>{pokemon?.abilities[1].ability.name}</p> :
                            null
                    }
                </div>
            </div>

        </div>
    )
}

export default PokeHabs