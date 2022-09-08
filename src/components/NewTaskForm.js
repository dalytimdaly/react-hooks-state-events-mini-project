import React, { useState } from "react";

function NewTaskForm({ categories, submitFormData }) {

  const [selectCategory, setSelectCategory] = useState('Money')
  const [selectTask, setSelectTask] = useState("")

  const newCategories = categories.filter((category) => category !== "All")

  const displayCategories = newCategories.map((category) => (
    <option>{category}</option>
  ))

  function handleTaskChange(event) {
    setSelectTask(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    submitFormData({
      text: selectTask,
      category: selectCategory
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={selectTask} onChange={handleTaskChange}/>
      </label>
      <label>
        Category
        <select name="category" value={selectCategory} onChange={handleCategoryChange}>
          {displayCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
