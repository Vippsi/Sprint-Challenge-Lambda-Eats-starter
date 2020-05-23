import React from 'react'
import './pizza.css'

function Pizza ({pizzaInfo}) {

    return(
        <div>
            <h2>{pizzaInfo.name} Your Pizza is Ready!</h2>
            <p>Size: {pizzaInfo.size}in</p>
            <p>Sauce: {pizzaInfo.sauce}</p>
            {
            <div>
                <p>Toppings:</p>
                <ul>
                    {pizzaInfo.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                </ul>
            </div>
            }
            <p>Instructions: {pizzaInfo.instructions}</p>
        </div>
    )
}

export default Pizza 

// size: '',
//   sauce: '',
//   toppings: {
//     pepperoni: false,
//     sausage: false,
//     onions: false,
//     pineapple: false,
//   },
//   instructions: '',