import React from 'react'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

const defaultTodos = [
  { text: 'Clean Code', completed:true },
  { text: 'Se aprende Boobstrap', completed:false },
  { text: 'Aprendes a trabajar con estados derivados', completed:true },
  { text: 'Se usa Java', completed:false }
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={20}/>
      <TodoSearch/>
      <TodoList>
       {defaultTodos.map(todo =>(
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
       ))}
      </TodoList>
     <CreateTodoButton/>
    </>
  )
}

export default App;
