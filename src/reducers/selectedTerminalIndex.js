import { TYPE } from "./../actions";

const selectedTerminalIndex = (state = 0, action) => {
	switch(action.type) {
	case TYPE.SELECT_TERMINAL:
		return action.index;
	case TYPE.ADD_TERMINAL:
		return -1;
	default:
		return state;
	}
};

export default selectedTerminalIndex;