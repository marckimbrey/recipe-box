import React, { Component } from 'react';
import RecipesList from "./RecipesList";
import AddRecipe from './AddRecipe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = window.sessionStorage;
  }
  render() {
    return (
      <div className="app">
        <button className="btn btn-add">add</button>
        <AddRecipe />
        <RecipesList
          recipes={this.state}

        />
      </div>
    );
  }
}

export default App;
