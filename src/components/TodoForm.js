import React, { useState } from 'react'
// useState keeps track of what user types in. 
// { addTodo } imports the addTodo prop, so you can pass the state from TodoForm to TodoWrapper. 
export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("")
  // setValue is text that is typed, value is text that is submitted

  const handleSubmit = e => {
    e.preventDefault();

    // saves the value that is typed / submitted
    addTodo(value)

    // resets what was typed
    setValue("")
  }

  return (
    // Creates the form where you can add tasks and the layout 
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={value} placeholder="What are the tasks for today?" onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}