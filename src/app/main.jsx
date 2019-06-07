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

import {loadSwitch} from 'actions/App';

class App extends Component {
  componentDidMount(){
    setTimeout(() => {
      store.dispatch(loadSwitch(false));
    }, 3000);
  }
  render() {
    let { loadingShow = false, loadingMini = false } = this.props,
      className = "app-wrapper";
    if (!loadingShow) className += " app-wrapper__loaded";
    return (
      <div className={className}>
        <Preloader
          mini={loadingMini}
          loading={loadingShow} />
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
    loadingShow: state.appReducer.loading.show || false,
    loadingMini: state.appReducer.loading.mini || false,
  };
})(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
serviceWorker.unregister();