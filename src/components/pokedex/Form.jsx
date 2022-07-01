import React from 'react'

const Form = ({ setPokeSearch, typeList, setFilterType }) => {

    const changeInputText = e => {
        setPokeSearch(e.target.value)
    }
    
    const changeSelect = e => {
        setFilterType(e.target.value)
    }

    return (
        <form action="" className='InputContainer'>

            <div className="InputName">

                <input type="text" placeholder='Búsqueda por nombre' onChange={changeInputText}/>                
                <button>Buscar</button>

            </div>

            <div className="InputType">

                <select id="types" onChange={changeSelect}>
                    <option value="All Pokemons">All Pokemons</option>
                    {
                        typeList?.map(type => (
                            <option key={type.name} value={type.name}>{type.name}</option>
                        ))
                    }
                </select>

            </div>
            
        </form>
    )
}

export default Form