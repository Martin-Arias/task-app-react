import React from 'react'

export const TaskRow = ({ task, handleStatusChange }) => (
    <tr key={task.name}>

        <td>{task.name}</td>
        
        <td>
        <input 
        type="checkbox" 
        checked={task.done} 
        onChange={() => handleStatusChange(task)}     
        />
        </td>

    </tr>
)
