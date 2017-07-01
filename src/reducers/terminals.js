import Immutable from "seamless-immutable";
import { TYPE } from "./../actions";
import { maxBy } from "lodash";

const terminals = (state = Immutable([newTerminal(0)]), action) => {
	switch (action.type) {
	case TYPE.ADD_TERMINAL:
		return [
			...state,
			newTerminal(maxBy(state, t => t.index).index + 1)
		];
	case TYPE.REMOVE_TERMINAL:
		return state.filter(terminal => terminal.get(t => t.index !== action.index));
	default:
		return state;
	}};

const newTerminal = index => {
	return Immutable({
		index,
		name: null,
		path: null,
		text: ">_",
		isLoading: true,
		isLoaded: false
	});
};

export default terminals;
