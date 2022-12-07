import React from 'react'
import './TodoForm.css'

const TodoForm = ({addTodo, setOpenModal})=> {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    
    const onChange = (e)=> {
        setNewTodoValue(e.target.value)
    }
    const onCancel = ()=> {
        setOpenModal(false)
    }
    const onSubmit = (e)=> {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                cols="30" 
                rows="10" 
                placeholder='Escriba un TODO...'>
            </textarea>
            <div className='TodoForm-buttonContainer'>
                <button 
                    type="button" 
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}