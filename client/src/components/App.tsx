import * as React from "react";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="/" className="brand-logo">
                My app
              </a>
            </div>
          </nav>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
