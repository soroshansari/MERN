import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { ErrorActionTypes } from "./error.types";
import { RecipeActionTypes } from "./recipe.types";

export type ActionTypes = ErrorActionTypes | RecipeActionTypes;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ActionTypes
>;
