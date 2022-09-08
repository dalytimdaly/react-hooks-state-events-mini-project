import React from "react";

function Task({ tasks, onHandleClick }) {

  const displayTasks = tasks.map((task) => (
    
    <div key={task.text} className="task">
        <div className="label">{task.category}</div>
        <div className="text" name={task.text}>{task.text}</div>
        <button onClick={() => onHandleClick(task.text)} className="delete">X</button>
      </div>
    ))

  return (
    <div>
    {displayTasks}
    </div>
  )


}

export default Task;
