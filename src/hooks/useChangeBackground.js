import React, { useState } from 'react'

const useChangeBackground = (pokemon) => {

  const [backgroundStyle, setBackgroundStyle] = useState("")
  const [borderStyle, setBorderStyle] = useState("")
  const [secondColor, setSecondColor] = useState("")

  const changeBg = () => {
    let color = pokemon?.types[0]?.type?.name

    if (color == "normal") { setBackgroundStyle("linear-gradient(0deg, rgba(173,173,173,1) 0%, rgba(40,39,39,1) 100%)"), setBorderStyle("15px solid rgba(40,39,39,1)") }
    if (color == "fighting") { setBackgroundStyle("linear-gradient(0deg, rgba(255,21,0,1) 0%, rgba(99,8,0,1) 100%)"), setBorderStyle("15px solid rgba(99,8,0,1)") }
    if (color == "flying") { setBackgroundStyle("linear-gradient(0deg, rgba(0,255,181,1) 0%, rgba(0,174,255,1) 100%)"), setBorderStyle("15px solid rgba(0,174,255,1)") }
    if (color == "poison") { setBackgroundStyle("linear-gradient(180deg, rgba(92,0,255,1) 0%, rgba(0,4,139,1) 100%)"), setBorderStyle("15px solid rgba(92,0,255,1)") }
    if (color == "ground") { setBackgroundStyle("linear-gradient(0deg, rgba(66,32,0,1) 0%, rgba(14,11,9,1) 100%)"), setBorderStyle("15px solid rgba(14,11,9,1)") }
    if (color == "rock") { setBackgroundStyle("linear-gradient(180deg, rgba(46,46,46,1) 0%, rgba(143,143,143,1) 100%)"), setBorderStyle("15px solid rgba(46,46,46,1)") }
    if (color == "bug") { setBackgroundStyle("linear-gradient(0deg, rgba(0,13,2,1) 0%, rgba(73,129,81,1) 100%)"), setBorderStyle("15px solid rgba(73,129,81,1)") }
    if (color == "ghost") { setBackgroundStyle("linear-gradient(0deg, rgba(0,27,99,1) 0%, rgba(19,22,32,1) 100%)"), setBorderStyle("15px solid rgba(19,22,32,1)") }
    if (color == "steel") { setBackgroundStyle("linear-gradient(0deg, rgba(148,148,148,1) 0%, rgba(238,238,238,1) 100%)"), setBorderStyle("15px solid rgba(148,148,148,1)") }
    if (color == "fire") { setBackgroundStyle("linear-gradient(180deg, rgba(255,147,0,1) 0%, rgba(255,38,0,1) 100%)"), setBorderStyle("15px solid rgba(255,38,0,1)") }
    if (color == "water") { setBackgroundStyle("linear-gradient(180deg, rgba(88,253,255,1) 0%, rgba(0,71,255,1) 100%)"), setBorderStyle("15px solid rgba(0,71,255,1)") }
    if (color == "grass") { setBackgroundStyle("linear-gradient(0deg, rgba(0,255,215,1) 0%, rgba(158,255,140,1) 100%)"), setBorderStyle("15px solid rgba(158,255,140,1)") }
    if (color == "electric") { setBackgroundStyle("linear-gradient(180deg, rgba(255,246,0,1) 0%, rgba(255,147,0,1) 100%)"), setBorderStyle("15px solid rgba(255,246,0,1)") }
    if (color == "psychic") { setBackgroundStyle("linear-gradient(0deg, rgba(66,45,102,1) 0%, rgba(0,50,255,1) 100%)"), setBorderStyle("15px solid rgba(66,45,102,1)") }
    if (color == "ice") { setBackgroundStyle("linear-gradient(0deg, rgba(168,255,252,1) 0%, rgba(255,255,255,1) 100%)"), setBorderStyle("15px solid rgba(168,255,252,1)") }
    if (color == "dragon") { setBackgroundStyle("linear-gradient(0deg, rgba(51,115,0,1) 0%, rgba(255,0,174,1) 100%)"), setBorderStyle("15px solid rgba(51,115,0,1)") }
    if (color == "dark") { setBackgroundStyle("linear-gradient(0deg, rgba(102,102,102,1) 0%, rgba(0,0,0,1) 58%)"), setBorderStyle("15px solid rgba(0,0,0,1)") }
    if (color == "fairy") { setBackgroundStyle("linear-gradient(0deg, rgba(255,0,217,1) 0%, rgba(0,255,250,1) 100%)"), setBorderStyle("15px solid rgba(0,255,250,1)") }
    if (color == "unknown") { setBackgroundStyle("linear-gradient(0deg, rgba(129,129,129,1) 0%, rgba(129,129,129,1) 100%)"), setBorderStyle("15px solid rgba(129,129,129,1)") }
    if (color == "shadow") { setBackgroundStyle("linear-gradient(0deg, rgba(129,129,129,1) 0%, rgba(0,0,0,1) 100%)"), setBorderStyle("15px solid rgba(0,0,0,1)") }

    if (pokemon?.types[1]?.type?.name) {
      let color2 = pokemon?.types[1]?.type?.name

      if (color2 == "normal") { setSecondColor("linear-gradient(0deg, rgba(173,173,173,1) 0%, rgba(40,39,39,1) 100%)")}
      if (color2 == "fighting") { setSecondColor("linear-gradient(0deg, rgba(255,21,0,1) 0%, rgba(99,8,0,1) 100%)")}
      if (color2 == "flying") { setSecondColor("linear-gradient(0deg, rgba(0,255,181,1) 0%, rgba(0,174,255,1) 100%)")}
      if (color2 == "poison") { setSecondColor("linear-gradient(180deg, rgba(92,0,255,1) 0%, rgba(0,4,139,1) 100%)")}
      if (color2 == "ground") { setSecondColor("linear-gradient(0deg, rgba(66,32,0,1) 0%, rgba(14,11,9,1) 100%)")}
      if (color2 == "rock") { setSecondColor("linear-gradient(180deg, rgba(46,46,46,1) 0%, rgba(143,143,143,1) 100%)")}
      if (color2 == "bug") { setSecondColor("linear-gradient(0deg, rgba(0,13,2,1) 0%, rgba(73,129,81,1) 100%)")}
      if (color2 == "ghost") { setSecondColor("linear-gradient(0deg, rgba(0,27,99,1) 0%, rgba(19,22,32,1) 100%)")}
      if (color2 == "steel") { setSecondColor("linear-gradient(0deg, rgba(148,148,148,1) 0%, rgba(238,238,238,1) 100%)")}
      if (color2 == "fire") { setSecondColor("linear-gradient(180deg, rgba(255,147,0,1) 0%, rgba(255,38,0,1) 100%)")}
      if (color2 == "water") { setSecondColor("linear-gradient(180deg, rgba(88,253,255,1) 0%, rgba(0,71,255,1) 100%)")}
      if (color2 == "grass") { setSecondColor("linear-gradient(0deg, rgba(0,255,215,1) 0%, rgba(158,255,140,1) 100%)")}
      if (color2 == "electric") { setSecondColor("linear-gradient(180deg, rgba(255,246,0,1) 0%, rgba(255,147,0,1) 100%)")}
      if (color2 == "psychic") { setSecondColor("linear-gradient(0deg, rgba(66,45,102,1) 0%, rgba(0,50,255,1) 100%)")}
      if (color2 == "ice") { setSecondColor("linear-gradient(0deg, rgba(168,255,252,1) 0%, rgba(255,255,255,1) 100%)")}
      if (color2 == "dragon") { setSecondColor("linear-gradient(0deg, rgba(51,115,0,1) 0%, rgba(255,0,174,1) 100%)")}
      if (color2 == "dark") { setSecondColor("linear-gradient(0deg, rgba(102,102,102,1) 0%, rgba(0,0,0,1) 58%)")}
      if (color2 == "fairy") { setSecondColor("linear-gradient(0deg, rgba(255,0,217,1) 0%, rgba(0,255,250,1) 100%)")}
      if (color2 == "unknown") { setSecondColor("linear-gradient(0deg, rgba(129,129,129,1) 0%, rgba(129,129,129,1) 100%)")}
      if (color2 == "shadow") { setSecondColor("linear-gradient(0deg, rgba(129,129,129,1) 0%, rgba(0,0,0,1) 100%)")}
    }
  }

  return { backgroundStyle, borderStyle, changeBg, secondColor }
}

export default useChangeBackground