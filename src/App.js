import React, { Component } from 'react';
import RecipesList from "./RecipesList";
import AddRecipe from './AddRecipe';

class App extends Component {
  constructor(props) {
    super(props);
    let recipes = [];
    for (let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      let ingredients = localStorage.getItem(key).split(',');
      let image = ingredients.pop();
      recipes[i] = { name: key, ingredients: ingredients , image: image };
    }
    this.state = {recipes: recipes};
    this.getRecipes = this.getRecipes.bind(this);
  }

  getRecipes() {
    let recipes = [];
    for (let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      let ingredients = localStorage.getItem(key).split(',');
      let image = ingredients.pop();
      recipes[i] = { name: key, ingredients: ingredients , image: image };
    }
    this.setState({recipes: recipes});

  }

  addRecipe(recipeName, ingredients) {
    localStorage.setItem(recipeName, ingredients);
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
        <h1>Recipe Box</h1>
        <button
          className="btn btn-add"
          onClick={()=>{
            const addForm = document.getElementsByClassName("add-form");
            const recipeName = document.getElementById("recipe-name");
            addForm[0].classList.toggle("add-form-active");
            recipeName.readOnly = false;
          }}
        >Add</button>
        <AddRecipe
          addRecipe={this.addRecipe.bind(this)}
        />
        <RecipesList
          recipes={this.state.recipes}
          remove={this.deleteRecipe.bind(this)}
          edit={this.editRecipe.bind(this)}
        />
      </div>
    );
  }
}

export default App;
