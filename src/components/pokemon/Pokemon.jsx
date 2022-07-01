import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Pokemon = () => {

    const { id } = useParams();
    const [type, setType] = useState("");
    const [pokemon, setPokemon] = useState({
        type: [],
        abilities: [],
        moves: [],
      });

    useEffect(() => {
        const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/${id}`

        axios.get(URL_POKEMON)
            .then(res => {
                setPokemon({
                    id: res.data.id,
                    name: res.data.name,
                    image: `https://cdn.traction.one/pokedex/pokemon/${res.data.id}.png`,
                    type: res.data.types,
                    height: res.data.height,
                    weight: res.data.weight,
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defense: res.data.stats[2].base_stat,
                    speed: res.data.stats[5].base_stat,
                    abilities: res.data.abilities,
                    moves: res.data.moves,
                });
                setType(res.data.types[0].type.name);
            })
            .catch(err => console.log(err))

    }, []);
    return (
        <div>
            <h1>{pokemon.id}</h1>
            <h1>{pokemon.name}</h1>
        </div>
    )
}

export default Pokemon