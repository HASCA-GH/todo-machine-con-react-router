import React from 'react'
import './CreateTodoButton.css';
// import {  } from '../TodoContext';
const CreateTodoButton = (props) => {

  // const onClickButton = ()=> {
  //   props.setOpenModal(prevState => !prevState)
  // }
  return (
    <button 
      className="CreateTodoButton"
      onClick={props.onClick}
      >+
    </button>
  )
}

export {CreateTodoButton}