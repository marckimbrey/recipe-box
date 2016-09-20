import React from 'react';

export default (props) => {
  return (
    <form className="add-form">
      <label>recipe: </label>
      <input id="recipe-name" type="text" />
      <label>ingredients: </label>
      <textarea
        placeholder="please enter ingredients, seperated by commas."
        id="ingredients">

      </textarea>
      <input
        className="btn"
        type="submit"
        value="Submit"
        onClick={(event)=> {
          event.preventDefault();
          console.log(document.getElementById("recipe-name").value,
          document.getElementById("ingredients").value);
          props.addRecipe(
            document.getElementById("recipe-name").value,
            document.getElementById("ingredients").value
          )

        }}
      />
    </form>
  );
};
