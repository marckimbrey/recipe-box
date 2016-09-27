import React, {Component} from 'react';
import Recipe from './Recipe';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: ''};
    this.recipes = this.props.recipes;
    this.remove = this.props.remove;
    this.edit = this.props.edit;
    this.onChildSelect = this.onChildSelect.bind(this);
  }
  onChildSelect(id) {
    this.setState({selected: id});
  }

  render () {
    const recipesList = this.props.recipes.map((recipe, index) => {
      return (
        <Recipe
        recipe={recipe}
        edit={this.edit}
        remove={this.remove}
        onToggle={this.onChildSelect}
        selected={this.state.selected === index  ? true: false}
        key={index}
        num={index}/>
      )
    });
    return (

      <ul className="recipe-list" >
        {recipesList}
      </ul>
    )
  }
}
