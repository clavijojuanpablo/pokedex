import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import PokeCard from './PokeCard'
import Form from './Form'
import Header from './Header'

const PokedexScreen = () => {

    const nameUser = useSelector(state => state.nameUser)
    const [pokemons, setPokemons] = useState() //GUARDA TODOS LOS POKEMONES

    const [typeList, setTypeList] = useState() //GUARDA TODOS LOS NOMBRES DE LOS TIPOS
    const [filterType, setFilterType] = useState("All Pokemons") //GUARDA EL TIPO QUE ESTÉ LISTO

    useEffect(() => {

        //SOLICITAMOS TODOS LOS NOMBRES DE LOS TIPOS
        const URL_POKEMONS = 'https://pokeapi.co/api/v2/type/'
        axios.get(URL_POKEMONS)
            .then(res => setTypeList(res.data.results))
            .catch(err => console.log(err))


        //SOLICITAMOS TODOS LOS POKEMON
        if (filterType === "All Pokemons") {
            const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24'
            axios.get(URL_POKEMONS)
                .then(res => setPokemons(res.data.results))
                .catch(err => console.log(err))


        //SOLICITAMOS TODOS LOS POKEMON POR TIPO
        } else {
            const URL = `https://pokeapi.co/api/v2/type/${filterType}`
            axios.get(URL)
                .then(res => {
                    const array = res.data.pokemon.map(e => e.pokemon)
                    setPokemons(array)
                })
                .catch(err => console.log(err))
        }
    }, [filterType])


    //-----------------FILTRO NAME--------------------------------------//
    const [pokeSearch, setPokeSearch] = useState("")
    const [filterPokemon, setFilterPokemon] = useState()

    useEffect(() => {
        if (pokemons) {
            setFilterPokemon(pokemons.filter(e => e.name.includes(pokeSearch.toLowerCase())))
        }
    }, [pokeSearch])
    


    return (
        <div className="AppDashboard">

            <Header />

            <div className='PokedexDashboard'>

                <div className="WelcomeDashboard">
                    <h2><span>Bienvenido {nameUser},</span> aquí podrás encontrar tu pokemón favorito.</h2>
                </div>

                <Form
                    setPokeSearch={setPokeSearch}
                    typeList={typeList}
                    setFilterType={setFilterType}
                />


                <div className="PokemonGroup">
                    {
                        filterPokemon ?
                            filterPokemon?.map(pokemon => (
                                <PokeCard
                                    key={pokemon.url}
                                    url={pokemon.url}
                                />
                            ))
                            :
                            pokemons?.map(pokemon => (
                                <PokeCard
                                    key={pokemon.url}
                                    url={pokemon.url}
                                />
                            ))
                    }
                </div>
            </div>

        </div>

    )
}

export default PokedexScreen