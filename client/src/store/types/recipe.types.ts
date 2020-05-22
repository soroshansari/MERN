import { Recipe } from "../../models/recipe.model";

export const SET_RECIPES = "SET_RECIPES";
interface SetRecipesAction {
  type: typeof SET_RECIPES;
  payload: Recipe[];
}

export const ADD_RECIPE = "ADD_RECIPE";
interface AddRecipeAction {
  type: typeof ADD_RECIPE;
  payload: Recipe;
}

export const REMOVE_RECIPE = "REMOVE_RECIPE";
interface RemoveRecipeAction {
  type: typeof REMOVE_RECIPE;
  payload: string; // recipe index
}

export const FETCHING_RECIPES = "FETCHING_RECIPES";
interface FetchingRecipesAction {
  type: typeof FETCHING_RECIPES;
  payload: boolean;
}

export type RecipeActionTypes =
  | SetRecipesAction
  | AddRecipeAction
  | RemoveRecipeAction
  | FetchingRecipesAction;
