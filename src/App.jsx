import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen'
import PokedexScreen from './components/pokedex/PokedexScreen'
import Pokemon from './components/pokemon/Pokemon'
import ProtectedRoutes from './components/general/ProtectedRoutes'


function App() {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<HomeScreen setIsLogged={setIsLogged}/>} />

        <Route element={<ProtectedRoutes isLogged={isLogged}/>}>
          <Route path="/pokedex" element={<PokedexScreen />} />
          <Route path="/pokedex/:id" element={<Pokemon />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App
