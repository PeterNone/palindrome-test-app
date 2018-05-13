import React, { Component } from 'react';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import Nav from './components/nav';
import PalindromesCheck from './containers/palindromes_check';
import PalindromesList from './containers/palindromes_list';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//Added Bootstrap just to give a little better UI look
//App is wrapped with Provider to create store with middleware
//to use axios requests to json-server
//2 containers that will have access to store and
//1 component just to dislplay static header to clean code

class App extends Component {
	render() {
		return (
			<Provider store={createStoreWithMiddleware(reducers)}>
				
				<div className="App">
					
					<Nav />
					
					<div className="container">
						
						<div className="row">
							
							<PalindromesCheck />
							
							<PalindromesList />
							
						</div>
					</div>
				</div>
				
			</Provider>
		);
	}
}

export default App;
