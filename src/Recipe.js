import React from 'react';

import RecipeDetail from './RecipeDetail';

export default (props) => {


  return (

    <li
      className={props.selected ? 'recipe recipe-selected': 'recipe'}

      onClick={() =>  props.onToggle(props.num)}
    >
      <img src={props.recipe.image} alt={props.recipe.name} />
      <h4>{props.recipe.name}</h4>
      <RecipeDetail
        recipe={props.recipe}
        edit={props.edit}
        remove={props.remove}
        getrecipes={props.getRecipes}
      />

    </li>
    );
}
