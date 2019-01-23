import {h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';
import Store from './components/store';

import Header from './components/header';
import Home from './routes/home';
import Demo from './routes/demo';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

// import {stylesheet} from 'typestyle'

// let mystyles = stylesheet({
// 	root: {
// 		backgroundColor: 'green'
// 	}
// })

export default class App extends Component<any, any> {

	handleRoute = e => {
		this.currentUrl = e.url;
	};
	currentUrl: any;

	render() {
		return (
			<Provider store={Store}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Demo path="/demo" />
					</Router>
				</div>
			</Provider>
		);
	}
}

