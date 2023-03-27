import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// Creates the click functionality and layout (completed, delete, edit) 
export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      {/* toggles between task completed and not on click. And changes class*/}
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
      <div>
        {/* onclick: edits */}
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        {/* onclick: deletes */}
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}