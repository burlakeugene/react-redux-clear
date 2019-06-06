import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { store } from "./redux/store/";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./layout/Main.jsx";
import * as serviceWorker from "./serviceWorker";
import Index from './containers/Index/index.jsx';
import Preloader from "./components/Preloader";

class App extends Component {
  render() {
    let { loading = false } = this.props,
      className = "app-wrapper";
    if (!loading) className += " app-wrapper__loaded";
    return (
      <div className={className}>
        <Preloader loading={loading} />
        <Router>
          <div>
            <Route
              exact
              path="/"
              component={Layout({main: Index })}
            />
          </div>
        </Router>
      </div>
    );
  }
}

App = connect(state => {
  return {
    loading: state.appReducer.loading
  };
})(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
serviceWorker.unregister();