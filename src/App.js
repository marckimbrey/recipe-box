import React, { Component } from 'react';
import RecipesList from "./RecipesList";

class App extends Component {
  constructor(props) {
    super(props);
    this.setState(window.sessionStorage);
  }
  render() {
    return (
      <div className="App">
        <button className="btn btn-add">+</button>
        <RecipesList />
      </div>
    );
  }
}

export default App;
