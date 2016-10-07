import React, { Component } from 'react';
import RecipesList from "./RecipesList";
import AddRecipe from './AddRecipe';
import defaultRecipes from './defaultRecipes';

class App extends Component {
  constructor(props) {
    super(props);

    if (localStorage.length === 0) {
      defaultRecipes.forEach((recipe)=> {
        localStorage.setItem(recipe[0], recipe[1]);
      });
    }
    let recipes = [];
    for (let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      let recipeDetails = localStorage.getItem(key).split(',');
      let image = recipeDetails.pop();
      let link = recipeDetails.pop();
      recipes[i] = { name: key, ingredients: recipeDetails , image: image, link: link };
    }
    this.state = {recipes: recipes};
    this.getRecipes = this.getRecipes.bind(this);
  }

  getRecipes() {
    let recipes = [];
    for (let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      let recipeDetails = localStorage.getItem(key).split(',');
      let image = recipeDetails.pop();
      let link = recipeDetails.pop();
      recipes[i] = { name: key, ingredients: recipeDetails , image: image, link: link };
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
        <p>code for this project can be found at <a href="https://github.com/marckimbrey/recipe-box">https://github.com/marckimbrey/recipe-box</a></p>
        <button
          className="btn btn-add"
          onClick={()=>{
            const addForm = document.getElementsByClassName("add-form");
            const recipeName = document.getElementById("recipe-name");
            addForm[0].classList.toggle("add-form-active");
            recipeName.readOnly = false;
            recipeName.value = '';
            document.getElementById("ingredients").value = '';
            document.getElementById("recipe-image").value = '';
            document.getElementById("recipe-link").value = '';
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
