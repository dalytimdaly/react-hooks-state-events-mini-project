import React from "react";

function CategoryFilter({ categories, handleClick, selected }) {

  const renderCategories = categories.map((category) => (
    <>
    <button key={category.toString()} onClick={handleClick} name={category} className={selected ? "selected" : ""}>{category}</button>
    </>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
          {renderCategories}
    </div>
  );

}

export default CategoryFilter;