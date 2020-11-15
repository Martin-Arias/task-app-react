import React, { useState,useEffect } from 'react'
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { TaskRow } from './components/TaskRow';
import { VisibilityControl } from './components/VisibilityControl';

export const App = () => {

  const [userName, setUserName] = useState('Martin')

  const [taskItems, setTaskItems] = useState([
    { name: 'Task One', done: false },
    { name: 'Task Two', done: false },
    { name: 'Task Three', done: false },
    { name: 'Task Four', done: true }
  ]);

  const [showCompleted, setShowCompleted] = useState(true);


  useEffect(() => {
   let data = localStorage.getItem('tasks');
   if (data != null) {
     setTaskItems(JSON.parse(data))
   } else {
     setTaskItems([
      { name: 'Task One', done: false },
      { name: 'Task Two', done: false },
      { name: 'Task Three', done: false },
      { name: 'Task Four', done: true }
     ])
   }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems]);

  const handleStatusChange = (task) => {
    //Recorro la lista de tareas hasta encontrar la coincidencia
    setTaskItems(taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)))

  }

  const handleAddTask = (taskName) => {
    //Si no hay una tarea con el mismo nombre la crea 
    if (!taskItems.find(t => t.name === taskName)) {

      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const handleShowCompleted = (e) => {
    setShowCompleted(e)
  }


  //Render table rows
  const taskTableRows = (doneValue) => taskItems
    .filter(task => task.done === doneValue)
    .map(task => (
      <TaskRow task={task} key={task.name} handleStatusChange={handleStatusChange} />
    ))

  return (
    <div>
      <TaskBanner taskItems={taskItems} userName={userName} />
      <TaskCreator handleAddTask={handleAddTask} />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>
      <div className="bg-secondary text-white text-center p-2">
        <VisibilityControl isChecked={showCompleted} handleShowCompleted={handleShowCompleted} />
      </div>

      {
        showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRows(true)}
            </tbody>
          </table>
        )
      }
    </div>
  )
}
