
import { combineReducers } from "redux";
import terminals from "./terminals";
import selectedTerminalIndex from "./selectedTerminalIndex";
import { maxBy } from "lodash";

const reducers = combineReducers({
	terminals,
	selectedTerminalIndex
});

export default reducers;

export function getTerminals (state) {
	return state.terminals;
}

export function getSelectedTerminal (state) {
	if(state.selectedTerminalIndex < 0)
		return state.terminals.find(x => x.index == maxBy(state.terminals, t => t.index).index);
	else
		return state.terminals.find(x => x.index == state.selectedTerminalIndex);
}