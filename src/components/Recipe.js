// src/components/Recipe.js
import React from 'react';
import './Recipe.css';

function Recipe({ recipe, dispatch }) {
  const { id, title, content, image, favorite } = recipe;

  return (
    <div className="Recipe">
      <h2>{title}</h2>
      {image && <img src={image} alt={title} className="recipe-image" />} {/* Wyświetlanie obrazka */}
      <p>{content}</p>
      <button onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: id })}>
        {favorite ? 'Usun z ulubionych' : 'Dodaj do ulubionych'}
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_RECIPE', payload: id })}>Usuń</button>
    </div>
  );
}

export default Recipe;
