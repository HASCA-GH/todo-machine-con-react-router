import React from 'react'
import { TodoIcon } from './';

const CompleteIcon = ({completed, onComplete}) => {
  return (
    <TodoIcon
        type="check"
        color={completed ? '#4caf50' : 'gray'}
        onClick={onComplete}
    />
  )
}

export {CompleteIcon}