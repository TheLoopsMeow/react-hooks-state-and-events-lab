import React from "react";
import Item from "./Item";
import {useState} from "react";

function ShoppingList({ items, mainCartArray, mainChangeCart }) {
  let [foodCategory, changeFoodCategory] = useState("")
  console.log(foodCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=>{
          changeFoodCategory(e.target.value)
          
        }
        }>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (foodCategory === item.category || foodCategory === "All"? 
          <Item key={item.id} name={item.name} category={item.category} item={item}
          mainCartArray={mainCartArray} mainChangeCart={mainChangeCart} />
         : ""
        ))}
      </ul>
    </div>
  );
}

// cartArray={cartArray} changeCart={changeCart}

export default ShoppingList;
