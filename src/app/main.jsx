import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { store } from "./redux/store/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Layout from "layouts/Main.jsx";
import Index from 'containers/Index/index.jsx';
import Header from 'containers/Header/index.jsx';
import Footer from 'containers/Footer/index.jsx';
import Test from 'containers/Test/index.jsx';
import NotFound from 'containers/NotFound/index.jsx';
import Preloader from "components/Preloader";


class App extends Component {
  render() {
    let { loading = false } = this.props,
      className = "app-wrapper";
    if (!loading) className += " app-wrapper__loaded";
    return (
      <div className={className}>
        {/* <Preloader loading={loading} /> */}
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={Layout({main: Index, header: Header, footer: Footer})}
            />
            <Route
              path="/test"
              component={Layout({main: Test, header: Header, footer: Footer})}
            />
            <Route
              component={Layout({main: NotFound, header: Header, footer: Footer})}
            />
          </Switch>
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