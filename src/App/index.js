import React from 'react'
import { useTodos } from './useTodos';
import {TodoHeader} from '../TodoHeader/index.js';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {TodoItem} from '../TodoItem'
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';
import {TodoForm} from '../TodoForm';
import {CreateTodoButton} from '../CreateTodoButton'
import {Modal} from '../Modal'
import { ChangeAlert } from '../ChangeAlert';


function App() {
  const { state, stateUpdaters } = useTodos()

  const {
    error, 
    loading, 
    searchedTodos, 
    totalTodos, 
    completedTodos,
    openModal, 
    searchValue,
  } = state
  
  const {
    setOpenModal,
    addTodo, 
    deleteTodo,
    completeTodo, 
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos} 
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        error={error} 
        loading={loading} 
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError= {()=> <TodosError/> }
        onLoading= {()=> <TodosLoading/> }
        onEmptyTodos= {()=> <EmptyTodos/> }
        onEmptySearchResults= {
          (searchText)=> <p>No hay resultados para {searchText}</p> 
        }
        // render={todo => (
        //   <TodoItem 
        //     key={todo.text} 
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={()=>completeTodos(todo.tex)}
        //     onDelete={()=>deleteTodo(todo.text)}
        //   />
        // )}
        >
          {todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
            />
          )}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo} 
            setOpenModal={setOpenModal}
          />
        </Modal>
      ) }
      
      <CreateTodoButton setOpenModal={setOpenModal}/>
      
      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </>
  );
}

export default App;
