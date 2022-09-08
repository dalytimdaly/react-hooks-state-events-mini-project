import React from "react";
import Task from "./Task";

function TaskList({ tasks, onHandleClick }) {


  return (
    <div className="tasks">
      <Task tasks={tasks} onHandleClick={onHandleClick}/>
    </div>
  );
}

export default TaskList;
