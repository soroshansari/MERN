import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routs from "./components";
import storeFactory from "./store";

const store = storeFactory();

ReactDOM.render(
  <Provider store={store}>
    <Routs />
  </Provider>,
  document.getElementById("root")
);
