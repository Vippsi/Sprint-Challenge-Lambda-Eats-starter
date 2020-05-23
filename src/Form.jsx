import React from 'react'
import './form.css'
import Pizza from './Pizza'

export default function Form(props) {
    const {
        values,
        onInputChange,
        disabled,
        onCheckboxChange,
        onSubmit, 
        errors,
        pizzas
    } = props
    
    return (
       
        <form onSubmit={onSubmit}>
            <h2>Build your own pizza</h2> 

            <div>
            
            <label>Name: 
                <input
                type='text'
                name='name'
                value={values.name}
                onChange={onInputChange}/>

            </label>
            <div>{errors.name}</div>
        </div>

            <div className='pizzaSizes'>
                <label> 
                    <h3>Choice of Size</h3>
                    
                    <select
                    onChange={onInputChange}
                    value={values.size}
                    name='size'>
                        <option value=''>Select a size</option>
                        <option value='8'>8in</option>
                        <option value='12'>12in</option>
                        <option value='14'>14in</option>
                        <option value='16'>16in</option>
                    </select>
                </label>
                </div>

        <div className='pizzaSauces'>
            <h3>Choice of Sauce</h3>
            <label>Original Red
                <input
                type='radio'
                name='sauce'
                value='Original Red'
                onChange={onInputChange}
                />
            </label>

            <label>Garlic Ranch
                <input
                type='radio'
                name='sauce'
                value='Garlic Ranch'
                onChange={onInputChange}
                />
            </label>

            <label>BBQ Sauce
                <input
                type='radio'
                name='sauce'
                value='BBQ Sauce'
                onChange={onInputChange}
                />
            </label>

            <label>Spinach Alfredo
                <input
                type='radio'
                name='sauce'
                value='Spinach Alfredo'
                onChange={onInputChange}
                />
            </label>
            </div>


        <div className='pizzaToppings'>
            <h3>Add Toppings</h3>
            <label>Pepperoni
                <input
                type='checkbox'
                name='pepperoni'
                checked={values.toppings.pepperoni}
                onChange={onCheckboxChange}
                />
            </label>

            <label>Sausage
                <input
                type='checkbox'
                name='sausage'
                checked={values.toppings.sausage}
                onChange={onCheckboxChange}
                />
            </label>

            <label>Onions
                <input
                type='checkbox'
                name='onions'
                checked={values.toppings.onions}
                onChange={onCheckboxChange}
                />
            </label>

            <label>Pineapple
                <input
                type='checkbox'
                name='pineapple'
                checked={values.toppings.pineapple}
                onChange={onCheckboxChange}
                />
            </label>
        </div>
        <div className='pizzaInstructions'>
            <h3>Special Instructions</h3>
            <label> 
                <input id='instructionsBox'
                placeholder='Anything else?'
                type='text'
                name='instructions'
                value={values.instructions}
                onChange={onInputChange}/>

            </label>
        </div>

            <button className='submit'  >Submit order</button>
            <div>
            {
            pizzas.map(pizza => {
              return(
                <Pizza pizzaInfo = {pizza}/>
              )
            })
        }
        </div>
        </form>
        
    )
}