import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey           : 'xxxxxxxxxxxx',
            authDomain       : 'xxxxxxxxxxxx',
            databaseURL      : 'xxxxxxxxxxxx',
            storageBucket    : 'xxxxxxxxxxxx',
            messagingSenderId: 'xxxxxxxxxxxx'
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={ store }>
               <Router/>
            </Provider>
        );
    }
}

export default App;