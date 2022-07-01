import React from 'react'
import InputHome from './InputHome'
import logo from '../../img/pokedex.png'
import icon from '../../img/icono.png'

const HomeScreen = () => {
  return (

    <div className='HomeScreen'>

      <div className="HomeInfo">
        <img src={logo} width="600px" alt="" />
        <h1>¡Hola entrenador!</h1>
        <h2>Para poder comenzar, dame tu nombre</h2>
        <InputHome />
      </div>

      <div className='HomeFooter'>
        <div className="RedLine">
        </div>

        <div className="BlackLine">
            <img src={icon} alt="Pokedex_Logo" width="100px" />

        </div>
      </div>
    </div>

  )
}

export default HomeScreen