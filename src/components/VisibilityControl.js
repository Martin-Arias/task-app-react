import React from 'react'

export const VisibilityControl = ({isChecked,handleShowCompleted}) => {
    return (
        <div className="form-check">
            
            <input 
            type="checkbox"
            className="form-check-input"
            checked={isChecked}
            onChange={(e) => handleShowCompleted(e.target.checked)}
            />
            <label htmlFor="form-check-label">Show Completed Tasks</label>
        </div>
    )
}
