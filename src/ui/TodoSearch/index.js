import React from 'react'
import './TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue, loading}) => {
  const onSearchValueChange = (event)=> {
    setSearchValue(event.target.value)
  }
  return (
    <>
    <input 
      className="TodoSearch" 
      type="text" 
      placeholder='Ingresar el texto...'
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
    {/* <p>{searchValue}</p> */}
    </>
  )
}

export {TodoSearch}