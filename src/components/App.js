import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";


function App() {
  let [mode, changeMode] = useState(false)
  let [mainCartArray, mainChangeCart] = useState([[]])
 
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  let appClass = mode ? "App dark" : "App light"
  

  //Change dark mode
  function toggleMode() {
    if(mode){
      mode = false
    }
    else{
      mode = true
    }
    changeMode(mode)
}

console.log(mainCartArray)

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>
          Dark Mode
        </button>
      </header>
      <ShoppingList items={itemData} mainCartArray={mainCartArray} mainChangeCart={mainChangeCart} />
    </div>
  );
}

// cartArray={cartArray} changeCart={changeCart}

export default App;
