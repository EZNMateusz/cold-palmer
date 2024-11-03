// src/reducer.js
export const initialState = {
    recipes: [],
    showFavoritesOnly: false,
  };
  
  export function recipeReducer(state, action) {
    switch (action.type) {
      case 'ADD_RECIPE':
        return {
          ...state,
          recipes: [...state.recipes, action.payload],
        };
      case 'REMOVE_RECIPE':
        return {
          ...state,
          recipes: state.recipes.filter(recipe => recipe.id !== action.payload),
        };
      case 'TOGGLE_FAVORITE':
        return {
          ...state,
          recipes: state.recipes.map(recipe =>
            recipe.id === action.payload ? { ...recipe, favorite: !recipe.favorite } : recipe
          ),
        };
      case 'EDIT_RECIPE':
        return {
          ...state,
          recipes: state.recipes.map(recipe =>
            recipe.id === action.payload.id ? { ...recipe, content: action.payload.content } : recipe
          ),
        };
      case 'SET_FAVORITE_FILTER':
        return {
          ...state,
          showFavoritesOnly: !state.showFavoritesOnly,
        };
      default:
        return state;
    }
  }
  