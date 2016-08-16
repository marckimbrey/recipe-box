import React from 'react';
import Recipe from './Recipe';

export default () => {
  const recipes = ["mac & cheese", "pizza", "toast"];
  const recipesList = recipes.map((recipe, index) => {
    return (
      <Recipe recipe={recipe} key={index} />
    )
  })
  return (
    <ul>
      {recipesList}
    </ul>
  )
}
