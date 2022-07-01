import React from 'react'

const Info = ({pokemon}) => {
    
  return (
    <div className="InfoHeader">
    <h2>{pokemon?.name}</h2>
    <p>Type</p>
    <h3>
        {pokemon?.types[0]?.type.name}
        {
            pokemon?.types[1]?.type.name ?
                ` / ${pokemon?.types[1]?.type.name}` :
                null
        }
    </h3>
</div>
  )
}

export default Info