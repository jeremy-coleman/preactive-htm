import { h, Component } from 'preact';
import { INCREASE, DECREASE } from '../../actions/actions'
import { connect } from 'preact-redux';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import * as style from './style.css';

class Demo extends Component<any, any> {

	increase = () => {
		this.props.dispatch({
			type: INCREASE
		});
	};

	decrease = () => {
		this.props.dispatch({
			type: DECREASE
		});
	};

	// Note: `user` comes from the URL, courtesy of our router
	render(props) {
		return (
			<div class={`${style.profile} page`}>
				<h1>Demo page</h1>
				<p>This is the redux demo page.</p>

				<p>
					<Button raised ripple onClick={this.decrease}>-</Button>
					{' '}
					Current count:  {props.reducer.count}.
					{' '}
					<Button raised ripple onClick={this.increase}>+</Button>
				</p>
			</div>
		);
	}
}

export default connect((state) =>
	({
		reducer: state.reducer
	})
)(Demo);