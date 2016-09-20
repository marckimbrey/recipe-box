import React, { Component } from 'react';
import RecipesList from "./RecipesList";
import AddRecipe from './AddRecipe';

class App extends Component {
  constructor(props) {
    super(props);
    let recipes = [];
    for (let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      recipes[i] = localStorage.getItem(key).split(',');
    }
    this.state = {recipes: recipes};
    this.getRecipes = this.getRecipes.bind(this);
  }

  getRecipes() {
    let recipes = [];
    for (let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      recipes[i] = localStorage.getItem(key).split(',');
    }
    this.setState({recipes: recipes});
  }

  addRecipe(recipe) {
    localStorage.setItem(recipe[0], recipe[1]);
    this.getRecipes();

  }

  deleteRecipe(recipe) {
    localStorage.removeItem(recipe);
    this.getRecipes();
  }

  editRecipe(recipe) {
    localStorage.setItem(recipe[0], recipe[1]);
    this.getRecipes();

  }

  render() {
    return (
      <div className="app">
        <button
          className="btn btn-add"
          onClick={()=>{
            const addForm = document.getElementsByClassName("add-form");
            addForm[0].classList.toggle("add-form-active");
          }}
        >add</button>
        <AddRecipe
          addRecipe={this.addRecipe.bind(this)}
        />
        <RecipesList
          recipes={this.state.recipes}
          remove={this.deleteRecipe.bind(this)}
          edit={this.editRecipe.bind(this)}
          getRecipes={this.props.getRecipes}
        />
      </div>
    );
  }
}

export default App;
