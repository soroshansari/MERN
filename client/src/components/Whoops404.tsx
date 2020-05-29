import * as React from "react";

export interface Woops404Props {
  location: any;
}

export interface Woops404State {}

class Woops404 extends React.Component<Woops404Props, Woops404State> {
  render() {
    return (
      <div className="whoops-404">
        <h1>Whoops, route not found</h1>
        <p>Cannot find content for {this.props.location.pathname}</p>
      </div>
    );
  }
}

export default Woops404;
