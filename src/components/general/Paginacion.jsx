import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io'

const Paginacion = ({ pagina, setPagina, maximo }) => {

    const [input, setInput] = useState(1)

    const nextPage = () => {
        setInput(input + 1)
        setPagina(pagina + 1)
        console.log(maximo)
    }

    const previousPage = () => {
        setInput(input - 1)
        setPagina(pagina - 1)
    }

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            setPagina(parseInt(e.target.value))
            if (parseInt(e.target.value < 1) ||
                parseInt(e.target.value) > Math.ceil(maximo) ||
                isNaN(parseInt(e.target.value))) {
                setPagina(1)
                setInput(1)
            } else {
                setInput(parseInt(e.target.value))
            }
        }
    }

    useEffect(() => {
        setInput(pagina)
    }, [pagina])


    const onChange = (e) => {
        setInput(e.target.value)
        
    }

    return (
        <div className='Pagination'>
            <button onClick={previousPage} disabled={pagina <= 1}><IoMdArrowRoundBack /></button>
            <input
                onChange={e => onChange(e)}
                onKeyDown={e => onKeyDown(e)}
                value={input}
                name="page"
                autoComplete='off'
            />
            <p> de {maximo}</p>
            <button onClick={nextPage} disabled={pagina >= maximo}><IoMdArrowRoundForward /></button>
        </div>
    )
}

export default Paginacion