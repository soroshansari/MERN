import { AppThunk } from "../store/types";
import {
  removeRecipe,
  setRecipes,
  startFetching,
  stopFetching,
} from "../store/actions/recipe.actions";
import client from "../graphql";
import { gql } from "apollo-boost";
import { addError } from "../store/actions/error.actions";
import { Recipe } from "../models/recipe.model";

export const LoadRecipes = (
  skip: number,
  limit: number
): AppThunk<void> => async (dispatch) => {
  dispatch(startFetching());
  try {
    const { data, errors } = await loadRecipes({ skip, limit });
    if (errors && errors.length) {
      errors.map((err) => dispatch(addError(err.message)));
    } else {
      dispatch(setRecipes(data.recipes));
    }
  } catch (error) {
    console.error(error);
    dispatch(addError(error.message ? error.message : JSON.stringify(error)));
  }
  dispatch(stopFetching());
};
export const RemoveRecipe = (recipeId: string): AppThunk<void> => {
  return async (dispatch) => {
    dispatch(removeRecipe(recipeId));
  };
};
const loadRecipes = (variables: { skip: number; limit: number }) => {
  return client.query<{ recipes: Recipe[] }>({
    query: gql`
      query Recipes($skip: Int, $take: Int) {
        recipes(skip: $skip, take: $take) {
          id
          title
          description
          creationDate
          ingredients
        }
      }
    `,
    variables,
  });
};
