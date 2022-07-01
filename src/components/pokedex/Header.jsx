import React from 'react'
import logo from '../../img/pokedex.png'
import icon from '../../img/icono.png'

const Header = () => {
    return (
        <div className="HeaderDashboard">
            <div className="RedLine">
                <div className="LogoContainer">
                    <img src={logo} alt="Pokedex_Logo" width="400px" />
                </div>
            </div>

            <div className="BlackLine">
                <div className="IconContainer">
                    <img src={icon} alt="Pokedex_Logo" width="120px" />
                </div>
            </div>
        </div>
    )
}

export default Header