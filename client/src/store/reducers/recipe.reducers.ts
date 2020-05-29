import {
  ADD_RECIPE,
  RecipeActionTypes,
  FETCHING_RECIPES,
  REMOVE_RECIPE,
  SET_RECIPES,
} from "../types/recipe.types";
import { Recipe } from "../../models/recipe.model";

export function allRecipesReducer(
  state: Recipe[] = [],
  action: RecipeActionTypes
): Recipe[] {
  switch (action.type) {
    case SET_RECIPES:
      return action.payload;
    case ADD_RECIPE:
      if (state.findIndex((item) => item.id === action.payload.id) > -1) {
        return state.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      } else {
        return [...state, action.payload];
      }
    case REMOVE_RECIPE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export function recipesFetingReducer(
  state = false,
  action: RecipeActionTypes
): boolean {
  switch (action.type) {
    case FETCHING_RECIPES:
      return action.payload;
    default:
      return state;
  }
}
