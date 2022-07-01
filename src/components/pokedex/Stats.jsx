import React from 'react'
import { RiSwordFill } from 'react-icons/ri'
import { FaHeart, FaShieldAlt } from 'react-icons/fa'
import { BsSpeedometer } from 'react-icons/bs'

const Stats = ({ pokemon }) => {

    return (
        <div className="Stats">

            <div className="StatsRow1">
                <div className="Stat">
                    <p><FaHeart /></p>
                    <span>{pokemon?.stats[0].base_stat}</span>
                </div>
                <div className="Stat">
                    <p><RiSwordFill /></p>
                    <span>{pokemon?.stats[1].base_stat}</span>
                </div>
            </div>

            <div className="StatsRow2">
                <div className="Stat">
                    <p><FaShieldAlt /></p>
                    <span>{pokemon?.stats[2].base_stat}</span>
                </div>
                <div className="Stat">
                    <p><BsSpeedometer /></p>
                    <span>{pokemon?.stats[5].base_stat}</span>
                </div>
            </div>

        </div>
    )
}

export default Stats