import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TodoForm.css'

const TodoForm = (props)=> {
    const navigate = useNavigate()
    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '')
    
    const onChange = (e)=> {
        setNewTodoValue(e.target.value)
    }
    const onCancel = ()=> {
        navigate('/')
    }
    const onSubmit = (e)=> {
        e.preventDefault()
        props.submitEvent(newTodoValue)
        navigate('/')
    }

    return (
        <form onSubmit={onSubmit} >
            <label>{props.label}</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                cols="30" 
                rows="10" 
                placeholder='Escriba un TODO...'
            />
            <div className='TodoForm-buttonContainer'>
                <button 
                    type="button" 
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    {props.submitText}
                </button>
            </div>
        </form>
    )
}

export {TodoForm}