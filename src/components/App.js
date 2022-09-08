import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selected, setSelected] = useState('')

  function handleClick(event) {
    setSelected(event.target.name)
    filterTasks(selected)
  }

  function onHandleClick(text) {
    const newTaskArray = TASKS.filter((task) => task.text !== text);
    setTasks(newTaskArray)
  }
  
  function submitFormData(newTask) {
    
    setTasks([...tasks, newTask])
  }
  
  function filterTasks(selected) {
    const filteredTasks = TASKS.filter((task) => {
      if (selected === "All") {
        return true;
      } else {
      return task.category === selected;
    }
    } )
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleClick} selected={selected}/>
      <NewTaskForm categories={CATEGORIES} submitFormData={submitFormData}/>
      <TaskList tasks={tasks} onHandleClick={onHandleClick}/>
    </div>
  );
}

export default App;