import React from 'react';

import RecipeDetail from './RecipeDetail';

export default (props) => {


  return (

    <li
      className={props.selected ? 'recipe recipe-selected': 'recipe'}

      onClick={() =>  props.onToggle(props.num)}
    >
      <h4>{props.recipe[0]}</h4>
      <RecipeDetail
        recipe={props.recipe}
        edit={props.edit}
        remove={props.remove}
        getrecipes={props.getRecipes}
      />

    </li>
    );
}
