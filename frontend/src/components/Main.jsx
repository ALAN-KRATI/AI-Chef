import React from 'react'
import { useState } from 'react';
import Form from './Form';
import Ingredients from './Ingredients';
import RecipeShown from './RecipeShown';

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(null);

  const addIngredient = (formData)=>{
    // IMPORTANT - How to access form data via DOM
    // const formData = new FormData(e.currentTarget)
    // const newIngredient = formData.get("ingredient");

    const newIngredient =  formData.get("ingredient");
    setIngredients(prev=>[...prev, newIngredient]); // This is the way to update arrays state
    console.log(newIngredient);
  }

  const removeIngredient = (index)=>{
    setIngredients(prev=>prev.filter((_,i)=> i!=index));
  }


  // Function to get the recipe
  const getRecipe = async () => {
    try {
      const prompt = `Generate a recipe using these ingredients: ${ingredients.join(", ")}`;
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      console.log("Response from server:", data); // <-- check here
      setRecipe(data.recipe || "No recipe generated");
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipe("Error generating recipe");
    }
  };

  return (
    <main>
      <Form addIngredient={addIngredient}/>
      <Ingredients ingredients={ingredients} getRecipe={getRecipe} removeIngredient={removeIngredient}/>
      {recipe && <RecipeShown recipe={recipe}/>}
    </main>
  )
}

export default Main


// Challenges
/**
     * Challenge:
     * 1. Create a boolean state that, for now, will represent whether
     *    we've gotten a recipe back from the "chef". Default to false.
     *    Can call it recipeShown.
     * 2. Grab the markup in recipeCode.md and paste it below. This will
     *    be a placeholder for the content that will come back from the 
     *    chef once we set up that feature.
     * 3. When the user clicks the "Get a recipe" butto n, flip the
     *    recipeShown state to true.
     * 4. Only display the recipe code content if recipeShown is true.
     */