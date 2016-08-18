import React from 'react';

export default () => {
  return (
    <form className="add-form">
      <label>recipe: </label>
      <input type="text" />
      <label>ingredients: </label>
      <textarea
        placeholder="please enter ingredients, seperated by commas.">

      </textarea>
      <input className="btn" type="submit" value="Submit" />
    </form>
  );
};
