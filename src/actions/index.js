export function selectTerminalIndex (index) {
	return {
		type: TYPE.SELECT_TERMINAL,
		index
	};
}

export function addTerminal () {
	return {
		type: TYPE.ADD_TERMINAL
	};
}

export const TYPE = {
	SELECT_TERMINAL: "SELECT_TERMINAL",
	ADD_TERMINAL: "ADD_TERMINAL",
	REMOVE_TERMINAL: "REMOVE_TERMINAL"
};