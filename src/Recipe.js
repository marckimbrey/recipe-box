import React from 'react';

import RecipeDetail from './RecipeDetail';

export default (props) => {


  return (

    <li
      className={props.selected ? 'recipe recipe-selected': 'recipe'}

      onClick={() =>  props.onToggle(props.num)}
    >
      <h4>{props.recipe}</h4>
      <RecipeDetail
        recipeName={props.recipe}
        edit={props.edit}
        remove={props.remove}
        getrecipes={props.getRecipes}
      />

    </li>
    );
}
