import React from 'react'
import { TodoIcon } from './';

const DeleteIcon = ({onDelete}) => {
  return (
    <TodoIcon
        type="delete"
        onClick={onDelete}
    />
  )
}

export {DeleteIcon}