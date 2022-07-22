import React from "react";
import { useState } from "react";
import Lista from "./Components/Lista";
import Preco from "./Components/Preco";
import Button from "./Components/Button"

import './App.css';

function App() {
  const [fruits, setFruits] = useState([
    {name: "Banana", color: "yellow", price:2},
    {name: "Cherry", color: "red", price:3},
    {name:"Strawberry", color: "red", price:4}
  ]);

  function filterRedFruits (){
    const filter =  fruits.filter(fruit => 
        fruit.color === "red"
    );
    return setFruits(filter);
  }

  const totalPrice = fruits.reduce(function(acumulador, valorAtual){
    
    return acumulador + valorAtual.price 

  },0);
  return (
   <div className="App">
      <div>
        <Preco totalPrice={totalPrice}/>
        <div className="lista">
          { 
            fruits.map((fruit, id) => 
              (
                  <Lista 
                    key={id}
                    fruit={fruit.name}
                  />
              )
            )
          }
        </div>

        <Button callBack={filterRedFruits}/>

      </div>
    </div>
  );
}

export default App;
