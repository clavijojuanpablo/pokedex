import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useChangeBackground from '../../hooks/useChangeBackground'
import { Link } from 'react-router-dom';
import Stats from './Stats'
import Info from './Info';

const PokeCard = ({ url }) => {

    const [pokemon, setPokemon] = useState();
    const { backgroundStyle, borderStyle, changeBg } = useChangeBackground(pokemon)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setPokemon(res.data)
                changeBg()
            })
            .catch(err => console.log(err))

    }, [changeBg])


    return (
        <Link to={`/pokedex/${pokemon?.id}`}>

            <div className='PokemonCard' style={{ border: borderStyle }}>

                <div className="ImgCard" style={{ background: backgroundStyle }}>
                    <img src={pokemon?.sprites?.other["official-artwork"].front_default} alt={`Foto de ${pokemon?.name}`} />
                </div>

                <div className="InfoCard">
                    <Info pokemon={pokemon}/>
                    <hr></hr>
                    <Stats pokemon={pokemon} />
                </div>

            </div>

        </Link>
    )
}

export default PokeCard