import React from 'react'

const Ingredients = ({ingredients, getRecipe, removeIngredient}) => {
  return (
    <>
    {ingredients.length > 0 &&
        <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
            {ingredients.map((ingredient,index)=>{
                return(
                    <li key={index}>{ingredient}
                        <button style={{border:"none", background:"none", marginLeft:"30px"}}onClick={()=>removeIngredient(index)}>X</button>
                    </li>
                )
            })}
        </ul>

        {ingredients.length >= 4 ?
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button
                onClick={getRecipe}
                >Get a recipe</button>
            </div>
            :
            <p>Add more items in the list</p>
        }

        </section>
    }
    </>
  )
}

export default Ingredients