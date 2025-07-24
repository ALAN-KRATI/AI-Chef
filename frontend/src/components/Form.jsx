import React from 'react'

const Form = ({ addIngredient }) => {
  return (
    <form className='add-ingredient-form' action={addIngredient}>
        <input 
            type="text"
            placeholder='e.g. oregano'
            name="ingredient" 
        />
        <button>Add Ingredient</button>
    </form>
  )
}

export default Form