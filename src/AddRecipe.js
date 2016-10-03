import React from 'react';

export default (props) => {
  return (
    <form className="add-form">
      <label >recipe: </label>
      <input id="recipe-name" type="text" />
      <label >ingredients: </label>
      <textarea
        placeholder="please enter ingredients, seperated by commas."
        id="ingredients">

      </textarea>
      <label >image url: </label>
      <input id="recipe-image" type="text" />
      <label >recipe link: </label>
      <input id="recipe-link" type="text" />
      <input
        className="btn btn-submit"
        type="submit"
        value="Submit"
        onClick={(event)=> {
          event.preventDefault();
          const recipeName = document.getElementById("recipe-name");
          const ingredients = document.getElementById("ingredients");
          const recipeImage = document.getElementById("recipe-image");
          const recipeLink = document.getElementById("recipe-link");
          props.addRecipe(
            recipeName.value,
            `${ingredients.value},${recipeLink.value} ,${recipeImage.value}`
          );
          recipeName.readOnly = false;
          recipeName.value = '';
          ingredients.value = '';
          recipeImage.value = '';
          recipeLink.value= '';

        }}
      />
    </form>
  );
};
