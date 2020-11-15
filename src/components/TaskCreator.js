import React, { useState } from 'react'

export const TaskCreator = ({handleAddTask}) => {
    
    const [taskName, setTaskName] = useState('');    


    const handleInputChange = (event) => {
        setTaskName(event.target.value)
    }

    //Clear input and and send data 
    const handleOnSubmit = () => {
        setTaskName('')
        handleAddTask(taskName)
    }
    return (
        <div className="m-1">
            <input 
            className="form-comtrol"
            type="text"
            value={taskName}
            onChange={(event) => handleInputChange(event)}
            />
            <button className="btn btn-primary ml-2" onClick={handleOnSubmit}>Add </button>
        </div>
    )
}
