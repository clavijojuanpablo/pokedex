import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen'
import PokedexScreen from './components/pokedex/PokedexScreen'
import Pokemon from './components/pokemon/Pokemon'


function App() {


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/pokedex" element={<PokedexScreen />} />
        <Route path="/pokedex/:id" element={<Pokemon />} />
      </Routes>

    </div>
  )
}

export default App
