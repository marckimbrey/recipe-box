import React, {Component} from 'react';
import Recipe from './Recipe';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: ''};
    this.recipes = ["mac & cheese", "pizza", "toast"];
    this.onChildSelect = this.onChildSelect.bind(this);
  }
  onChildSelect(id) {
    this.setState({selected: id});
  }

  render () {
    const recipesList = this.recipes.map((recipe, index) => {
      return (
        <Recipe
        recipe={recipe}
        onToggle={this.onChildSelect}
        selected={this.state.selected === index  ? true: false}
        key={index}
        num={index}/>
      )
    });
    return (

      <ul>
        {recipesList}
      </ul>
    )
  }
}
