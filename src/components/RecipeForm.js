// src/components/RecipeForm.js
import React, { useState } from 'react';
import './RecipeForm.css';

function RecipeForm({ dispatch }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(''); // Dodajemy stan dla URL zdjęcia

  const handleSubmit = () => {
    if (title && content) {
      dispatch({
        type: 'ADD_RECIPE',
        payload: { id: Date.now(), title, content, image, favorite: false },
      });
      setTitle('');
      setContent('');
      setImage(''); // Czyścimy pole po dodaniu przepisu
    }
  };

  return (
    <div className="RecipeForm">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tytuł przepisu"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Zawartość przepisu"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="URL zdjęcia"
      />
      <button onClick={handleSubmit}>Dodaj przepis</button>
    </div>
  );
}


export default RecipeForm;
