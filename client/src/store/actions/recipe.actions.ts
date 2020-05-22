import {
  ADD_RECIPE,
  RecipeActionTypes,
  REMOVE_RECIPE,
  SET_RECIPES,
  FETCHING_RECIPES,
} from "../types/recipe.types";
import { Recipe } from "../../models/recipe.model";

export function setRecipes(recipes: Recipe[]): RecipeActionTypes {
  return {
    type: SET_RECIPES,
    payload: recipes,
  };
}

export function addRecipe(newRecipe: Recipe): RecipeActionTypes {
  return {
    type: ADD_RECIPE,
    payload: newRecipe,
  };
}

export function removeRecipe(recipeId: string): RecipeActionTypes {
  return {
    type: REMOVE_RECIPE,
    payload: recipeId,
  };
}

export function startFetching(): RecipeActionTypes {
  return {
    type: FETCHING_RECIPES,
    payload: true,
  };
}
export function stopFetching(): RecipeActionTypes {
  return {
    type: FETCHING_RECIPES,
    payload: false,
  };
}
