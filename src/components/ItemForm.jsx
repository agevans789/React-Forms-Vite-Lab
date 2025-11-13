import React from "react";
import {useState} from 'react';
import { v4 as uuid, v4 } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [item, setItem] = useState({category: "Produce"});
  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({...item, id: v4});
  };
  function handleChange(e) {
    setItem((previous) => {
      return {...previous, [e.target.name] : e.target.value}
    });
  };
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;