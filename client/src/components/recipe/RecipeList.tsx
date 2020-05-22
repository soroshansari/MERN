import * as React from "react";
import { Recipe } from "../../models/recipe.model";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store";
import { RemoveRecipe, LoadRecipes } from "../../controllers/recipe.controller";

export interface RecipeListProps {}

export interface RecipeListState {}

const mapStateToProps = (state: RootState) => ({
  fetching: state.recipe.fetching,
  recipes: state.recipe.all,
  errors: state.errors,
});

const mapDispatchToProps = {
  onSelect: (recipe: Recipe) => RemoveRecipe(recipe.id),
  onLoadRecipes: (skip = 0, limit = 25) => LoadRecipes(skip, limit),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & RecipeListProps;
class RecipeList extends React.Component<Props, RecipeListState> {
  constructor(props: Props) {
    super(props);
    if (!this.props.recipes || !this.props.recipes.length) {
      this.props.onLoadRecipes();
    }
  }
  render() {
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Recipes</h4>
          </li>
          {this.props.errors
            ? this.props.errors.map((err) => <p>{err}</p>)
            : ""}
          {this.props.fetching ? (
            <p>Loading..</p>
          ) : (
            this.props.recipes.map((item) => (
              <a
                href="#!"
                className="collection-item"
                key={item.id}
                onClick={this.props.onSelect.bind(this, item)}
              >
                {item.title}
              </a>
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default connector(RecipeList);
