/* eslint-disable eol-last */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
	const config = {
    apiKey: 'AIzaSyAwflM7rRJ1Y6zkm_iMbNq6xmgbuZ-Uy0Q',
    authDomain: 'manager-d0405.firebaseapp.com',
    databaseURL: 'https://manager-d0405.firebaseio.com',
    projectId: 'manager-d0405',
    storageBucket: 'manager-d0405.appspot.com',
    messagingSenderId: '311180827212'
  };
  firebase.initializeApp(config);
	}
	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<Router />
			</Provider>
		);
	}
}

export default App;
