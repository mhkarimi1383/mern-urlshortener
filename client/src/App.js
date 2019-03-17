import React, { Component } from 'react';
import {Header} from './Header';
import {Home} from './Home';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

class App extends Component {


	render() {

		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div>
					<Header/>
					<Switch>
						<Route exact path='/' component={Home}></Route>
					</Switch>
				</div>
			</Router>
		);
	}
}


export default App;
