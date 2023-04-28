import React, { useState } from 'react'
import { useReducer } from 'react';
import Todo from './Todo';
import Useref from './Useref';

export const ACTIONS = {
  ADD_TODOS: 'add-todos',
  TOGGLE_TODOS: 'toggle-todos',
  DELETE_TODOS: 'delete-todos'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODOS:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODOS:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE_TODOS:
      return todos.filter( todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODOS, payload: { name: name } })
    setName('')
  }
  console.log(todos);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
      <Useref />
    </>
  )
}
export default App;
