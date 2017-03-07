import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './components/App';
import { reducers } from './reducers/index';

import './stylesheets/main.scss'

    let users = [];


    for (let i=1; i<=10; i++) {
        users.push(
            {
                ID: i,
                UserName: 'Anu ' + i,
            });
    }

    const initial_state = {
        users: users,
    }


    const store = createStore(reducers , initial_state);

    /*ReactDOM.render(<App/>, document.getElementById('app'));*/

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('content'));