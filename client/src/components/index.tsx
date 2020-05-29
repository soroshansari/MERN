import * as React from "react";
import { HashRouter } from "react-router-dom";
import App from "./App";
import Whoops404 from "./Whoops404";
import { Switch, Route } from "react-router";
import RecipeList from "./recipe/RecipeList";

export interface RoutsProps {}

export interface RoutsState {}

class Routs extends React.Component<RoutsProps, RoutsState> {
  constructor(props: RoutsProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route exact path="/" component={RecipeList} />
            <Route path="*" component={Whoops404} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default Routs;
