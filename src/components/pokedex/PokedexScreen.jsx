import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { FaBackward } from 'react-icons/fa'
import axios from 'axios'
import PokeCard from './PokeCard'
import Form from './Form'
import Header from './Header'
import Paginacion from '../general/Paginacion'
import { Link } from 'react-router-dom'

const PokedexScreen = () => {

    const nameUser = useSelector(state => state.nameUser)
    const [pokemons, setPokemons] = useState() //GUARDA TODOS LOS POKEMONES

    const [typeList, setTypeList] = useState() //GUARDA TODOS LOS NOMBRES DE LOS TIPOS
    const [filterType, setFilterType] = useState("All Pokemons") //GUARDA EL TIPO QUE ESTÉ LISTO

    const [pokeSearch, setPokeSearch] = useState("")
    const [filterPokemon, setFilterPokemon] = useState()

    const [pagina, setPagina] = useState(1) //PAGINA INICIAL
    const [porPagina, setPorPagina] = useState(8) //POKEMONS POR PAGINA
    const [maximo, setMaximo] = useState(pokemons?.length) //MAXIMO POKEMONS

    useEffect(() => {

        //SOLICITAMOS TODOS LOS NOMBRES DE LOS TIPOS
        const URL_POKEMONS = 'https://pokeapi.co/api/v2/type/'
        axios.get(URL_POKEMONS)
            .then(res => setTypeList(res.data.results))
            .catch(err => console.log(err))


        //SOLICITAMOS TODOS LOS POKEMON
        if (filterType === "All Pokemons") {
            const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500'
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
                    setFilterPokemon(array)
                    setPagina(1)
                    setPokeSearch(" ")
                })
                .catch(err => console.log(err))
        }
    }, [filterType])


    //-----------------FILTRO NAME--------------------------------------//

    useEffect(() => {
        if (pokemons) {
            setFilterPokemon(pokemons.filter(e => e.name.includes(pokeSearch.toLowerCase())))
            setPagina(1)
        }
    }, [pokeSearch])


    //-----------------PAGINACION--------------------------------------//


    useEffect(() => {
        if (filterPokemon) {
            setMaximo(Math.ceil(filterPokemon?.length / porPagina))
        } else {
            setMaximo(Math.ceil(pokemons?.length / porPagina))
        }
    }, [pokemons, filterPokemon])



    return (
        <div className="AppDashboard">

            <Header />


            <div className='PokedexDashboard'>


                <div className="WelcomeDashboard">
                    <h2><span>Bienvenido {nameUser},</span> aquí podrás encontrar tu pokemón favorito.</h2>
                    <Link to={`/`}><h3><FaBackward/> Haz click aquí para salir</h3></Link>
                </div>

                <Form
                    setPokeSearch={setPokeSearch}
                    typeList={typeList}
                    setFilterType={setFilterType}
                />


                <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
                <div className="PokemonGroup">
                    {
                        filterPokemon ?
                            filterPokemon?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map(pokemon => (
                                <PokeCard
                                    key={pokemon.url}
                                    url={pokemon.url}
                                />
                            ))
                            :
                            pokemons?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map(pokemon => (
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