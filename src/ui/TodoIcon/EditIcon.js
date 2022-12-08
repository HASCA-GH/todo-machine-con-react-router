import React from 'react'
import { TodoIcon } from './';

const EditIcon = ({onEdit}) => {
  return (
    <TodoIcon
        type="edit"
        onClick={onEdit}
    />
  )
}

export {EditIcon}