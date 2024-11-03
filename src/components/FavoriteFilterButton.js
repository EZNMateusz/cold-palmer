// src/components/FavoriteFilterButton.js
import React from 'react';
import './FavoriteFilterButton.css';

function FavoriteFilterButton({ dispatch, showFavoritesOnly }) {
  return (
    <div className="FavoriteFilterButton">
      <button onClick={() => dispatch({ type: 'SET_FAVORITE_FILTER' })}>
        {showFavoritesOnly ? 'Pokaż wszystkie przepisy' : 'Pokaż ulubione'}
      </button>
    </div>
  );
}

export default FavoriteFilterButton;
