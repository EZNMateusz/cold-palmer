// src/App.js
import React, { useReducer } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import FavoriteFilterButton from './components/FavoriteFilterButton';
import './App.css';

const initialState = {
  recipes: [],
  showFavoritesOnly: false,
};

function recipeReducer(state, action) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return { ...state, recipes: [...state.recipes, action.payload] };
    case 'REMOVE_RECIPE':
      return { ...state, recipes: state.recipes.filter(r => r.id !== action.payload) };
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        recipes: state.recipes.map(recipe =>
          recipe.id === action.payload ? { ...recipe, favorite: !recipe.favorite } : recipe
        ),
      };
    case 'SET_FAVORITE_FILTER':
      return { ...state, showFavoritesOnly: !state.showFavoritesOnly };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <div className="App">
      <h1>Przepisy</h1>
      <RecipeForm dispatch={dispatch} />
      <FavoriteFilterButton
        dispatch={dispatch}
        showFavoritesOnly={state.showFavoritesOnly}
      />
      <RecipeList
        recipes={state.recipes}
        showFavoritesOnly={state.showFavoritesOnly}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
