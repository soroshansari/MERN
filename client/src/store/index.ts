import { combineReducers, applyMiddleware, createStore } from "redux";
import {
  allRecipesReducer,
  recipesFetingReducer,
} from "./reducers/recipe.reducers";
import { allErrorsReducer } from "./reducers/error.reducers";
import thunk from "redux-thunk";

// const consoleMessages = (store) => (next) => (action) => {
//   let result;

//   console.groupCollapsed(`dispatching action => ${action.type}`);
//   console.log("ski days", store.getState().allSkiDays.length);
//   result = next(action);

//   let { allSkiDays, goal, errors, resortNames } = store.getState();

//   console.log(`

//     ski days: ${allSkiDays.length}
//     goal: ${goal}
//     fetching: ${resortNames.fetching}
//     suggestions: ${resortNames.suggestions}
//     errors: ${errors.length}

//   `);

//   console.groupEnd();

//   return result;
// };

const rootReducer = combineReducers({
  recipe: combineReducers({
    all: allRecipesReducer,
    fetching: recipesFetingReducer,
  }),
  errors: allErrorsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const InitialState: RootState = {
  errors: [],
  recipe: {
    all: [],
    fetching: false,
  },
};
export default (initialState = InitialState) => {
  return applyMiddleware(thunk)(createStore)(rootReducer, initialState);
};
