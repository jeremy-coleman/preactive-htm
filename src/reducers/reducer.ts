import { INCREASE, DECREASE } from '../actions/actions';

const initialState = { count: 0 };

export default function gameReducer(state = initialState, action) {
	switch (action.type) {
		case INCREASE: {
			return (Object.assign({}, state, { count: state.count + 1 }));
		}
		case DECREASE: {
			return (Object.assign({}, state, { count: state.count - 1 }));
		}
		default:
			return state;
	}
}
