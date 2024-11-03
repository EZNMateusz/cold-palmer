// src/components/RecipeList.js
import React from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

function RecipeList({ recipes, showFavoritesOnly, dispatch }) {
  const filteredRecipes = showFavoritesOnly
    ? recipes.filter(recipe => recipe.favorite)
    : recipes;

  return (
    <div className="RecipeList">
      {filteredRecipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default RecipeList;
