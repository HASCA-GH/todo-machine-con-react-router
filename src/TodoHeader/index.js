import React from 'react'

const TodoHeader = ({children, loading}) => {
  return (
    <header>
        {/* {children} */}
      {React.Children
        .toArray(children)
        .map(child => React.cloneElement(child,{loading}))}

    </header>
  )
}

export {TodoHeader}