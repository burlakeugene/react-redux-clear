import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {store, history} from './store/';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {Route} from 'react-router';
import {
    ConnectedRouter,
    push
  } from 'react-router-redux';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/about" component={App} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
registerServiceWorker();