import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid' /* uuid is used to generate unique ID's*/
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  /* addTodo takes a todo (value) 
  setTodos([...todos]) makes a copy of the current state / todos*/
  const addTodo = todo => {
    setTodos([...todos, {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false
    }])
  }

  // toggles between completed or NOT completed
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  // deletes item with specific ID 
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // toggles "isEditing" on item with specific ID so that editing is possible
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }

  // edits the task and toggles "isEditing" on item with specific ID.
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>

      {/* adds the option to "Add tasks"*/}
      <TodoForm addTodo={addTodo} />

      {/* if todo is currently being edited ('isEditing' is 'true') it renders an 'EditTodoForm' component.  */}
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          /* if not, render 'Todo' component with several functions as props for handling user interactions. */
          <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      ))}
    </div>
  )
}