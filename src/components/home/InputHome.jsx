import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/nameUser.slice'

const InputHome = () => {

    const { handleSubmit, reset, register } = useForm()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submit = data => {
        dispatch(setNameGlobal(data.nameUser))
        reset({
            nameUser: ""
        })
        navigate('/pokedex')
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input placeholder="Tu nombre..." type="text" {...register('nameUser')} />
            <button>Comenzar</button>
        </form>
    )
}

export default InputHome