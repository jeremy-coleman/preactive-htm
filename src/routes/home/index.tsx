import { h, Component } from 'preact';
import { Link } from 'preact-router';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import * as style from './style.css';

export default class Home extends Component {
	render() {
		return (
			<div id="home" class={`${style.home} page`}>
				<h1>Home route</h1>
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">Home card</h2>
						<div class=" mdc-typography--caption">Welcome to home route</div>
					</div>
					<div class={style.cardBody}>
						Hi! This is a template for preact-cli that implements material design and redux.
            Head over to <Link href="/demo">demo</Link> page to see redux in action.
					</div>
					<Card.Actions>
						<Card.ActionButton>OKAY</Card.ActionButton>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}
