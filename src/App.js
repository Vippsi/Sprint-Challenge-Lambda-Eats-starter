import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Switch, Link } from 'react-router-dom'
import Form from './Form'
import Pizza from './Pizza'
import formSchema from './formSchema'
import * as yup from 'yup'
import hero from './pizza.jpg'
import './App.css'


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    onions: false,
    pineapple: false,
  },
  instructions: '',
}

const initialFormErrors = {
  name: ''
}

const initialPizzas = []
const initialDisabled = true



const App = () => {

  const [pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled) 
  const [formErrors, setFormErrors] = useState(initialFormErrors)


  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////


 const postNewPizza = newPizza => {
   axios.post('https://reqres.in/api/users', newPizza)
    .then(res => {
      setPizzas([res.data, ...pizzas])
      
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
 }

//  useEffect(()=> {
//   formSchema.isValid(formValues)
//   .then(valid => {
//     setDisabled(!valid)
//   })
// }, [formValues])

 console.log(pizzas)
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target

    setFormValues({
      ...formValues, 
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  

  const onSubmit = evt => {
    evt.preventDefault()

    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce,
      instructions: formValues.instructions,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true)
    }
    postNewPizza(newPizza)
  }



  return (
    <div>
      <h1>Lambda Eats</h1>
      <Switch>
          <Route path='/Form' component={Form}>
            <Form
            values = {formValues}
            onInputChange = {onInputChange}
            disabled = {disabled}
            onSubmit = {onSubmit}
            onCheckboxChange = {onCheckboxChange}
            errors={formErrors}
            pizzas={pizzas}
            />
            <nav>
        <Link className='link' to='/Form'>Order Pizza</Link>
        <Link className='link' to='/'>Home</Link>
     </nav>
          </Route>

          <Route path='/'>
          <div>
          <img src={hero}/>
      <nav>
        <Link className='link' to='/Form'>Order Pizza</Link>
        <Link className='link' to='/'>Home</Link>
     </nav>
      </div>
          </Route>
          </Switch>
        

      
        

   </div>
  );
};
export default App;
