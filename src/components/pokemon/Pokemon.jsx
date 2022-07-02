import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../pokedex/Header";
import { RiSwordFill } from 'react-icons/ri'
import { FaHeart, FaShieldAlt, FaBackward } from 'react-icons/fa'
import { BsSpeedometer } from 'react-icons/bs'
import useChangeBackground from "../../hooks/useChangeBackground";
import PokeMovements from "./PokeMovements";
import PokeHabs from "./PokeHabs";

const Pokemon = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState();

    const { backgroundStyle, changeBg, secondColor } = useChangeBackground(pokemon)

    useEffect(() => {
        const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/${id}`

        axios.get(URL_POKEMON)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
            .finally(() => changeBg())
    }, [changeBg]);


    return (
        <>
            <div className="PokemonIndividualContainer">

                <Header />

                <Link to={`/pokedex`}>
                    <div className="ButtonReturn">
                        <h2><FaBackward /></h2>
                        <h2>Pokedex</h2>
                    </div>
                </Link>

                <div className="PokemonIndividual">

                    <div className="InfoPicture" style={{ background: backgroundStyle }}>
                        <img src={pokemon?.sprites?.other["official-artwork"].front_default} alt="" width="250px" />
                    </div>

                    <h2 className="PokemonID">#{pokemon?.id}</h2>

                    <h1>{pokemon?.name}</h1>

                    <div className="InfoName">
                        <div className="Peso">
                            <p>Peso</p>
                            <p>{pokemon?.weight}</p>
                        </div>

                        <div className="Altura">
                            <p>Altura</p>
                            <p>{pokemon?.height}</p>
                        </div>
                    </div>

                    <PokeHabs pokemon={pokemon} secondColor={secondColor} backgroundStyle={backgroundStyle}/>

                    <div className="InfoStats">
                        <h2>Stats</h2>

                        <div className="StatsContainer">
                            <p><FaHeart />: {pokemon?.stats[0].base_stat} </p>
                            <p><RiSwordFill />: {pokemon?.stats[1].base_stat} </p>
                            <p><FaShieldAlt />: {pokemon?.stats[2].base_stat} </p>
                            <p><BsSpeedometer />: {pokemon?.stats[5].base_stat} </p>
                        </div>
                    </div>


                </div>

               <PokeMovements pokemon={pokemon}/>

            </div>
        </>
    )
}

export default Pokemon