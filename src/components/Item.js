import React from "react";
import { useState } from "react"

function Item({ name, category, cartHandler, mainCartArray, mainChangeCart }) {

  const [inCart, toggleInCart] = useState("Add to Cart")
  let [cartArray, changeCart] = useState([])

  function cartHandler(){
    let cartVariable = ""
    // console.log(name)

    if(inCart==="Add to Cart"){
      cartVariable = "Remove from Cart"
      //add to cart
      cartArray = mainCartArray.slice()
      cartArray.push([name, category])
    changeCart(cartArray)
    }
    else{
      cartVariable = "Add to Cart"
      //remove from cart
      
        // mainCartArray.pop()
        // changeCart(cartArray)
        mainCartArray.filter(([item])=>{
          if(item === name){
            mainCartArray[0] = ""
            mainCartArray[1] = ""
            mainCartArray[2] = ""
          }
        })
      

    }
    toggleInCart(cartVariable)
    // console.log(cartArray)
    //have an app level useState then be assigned to the value of cartArray
    mainChangeCart(cartArray)
    // console.log(mainCartArray)
    // console.log(mainCartArray.push(mainCartArray))
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartHandler}>{inCart}</button>
    </li>
  );
}

export default Item;
