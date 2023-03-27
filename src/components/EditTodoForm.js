import React, { useState } from 'react'


// Makes edit work. Works the same as "Add task", but instead of adding, it edits / updates a task
export const EditTodoForm = ({ editTodo, task }) => {
  /* the useState(task.task) is the already written task that will be displayed before changing anything */
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id)

    setValue("")
  }

  return (
    // Creates the edit click functionality and layout  
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={value} placeholder="Update Task" onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="todo-btn">Update Task</button>
    </form>
  )
}