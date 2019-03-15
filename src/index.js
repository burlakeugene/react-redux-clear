import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store, history} from './store/';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { connect } from 'react-redux';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Main from './containers/Main';
import Sidebar from './containers/Sidebar';
import About from './containers/About';
import Layout from './layout/Main';

import {Detection} from 'burlak';
const Detect = new Detection();
class App extends Component{

    render(){
        let {loading = false} = this.props,
            mobile = Detect.isMobile(),
            className = 'app-wrapper';
        if(!loading) className += ' app-wrapper__loaded';
        return(
            <div className={className}>
                <Preloader loading={loading} />
                {!mobile && <Cursor />}
                <Router>
                    <div>
                        <Route exact path="/" component={Layout({sidebar: Sidebar, main: Main})} />
                    </div>
                </Router>
            </div>
        )
    }
};

App = connect((state) => {
    return {
        loading: state.appReducer.loading
    }
})(App);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('app'));
serviceWorker.unregister();