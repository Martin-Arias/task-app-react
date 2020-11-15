import React from 'react'

export const TaskBanner = ({taskItems,userName}) => {
   
    let remainingTasks = taskItems.filter(t => !t.done).length
    
    return (
        <div>
            <h3 className="bg-primary text-white text-center p-4">User: {userName}<br/> Remaining tasks: {remainingTasks}</h3>
          
        </div>
    )
}
