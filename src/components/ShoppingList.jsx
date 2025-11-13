import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
     return true;
    }; 
    return item.category === selectedCategory;
  }).filter((item) => {
    if (!search) {
      return true;
    };
    return new RegExp(search, "i").test(item.name);
  });

  function handleSearchChange(event) {
    console.log(`Search input change: ${event.target.value}`)
    setSearch(event.target.value)
  };

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter search={search} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;