import React, { Component } from "react";
import Tabs from "./Tabs";
import Terminal from "./Terminal";
import Nav from "./Nav";

export default class Root extends Component {

handleSelectTerminal = index => {
	if(index < 0) return;
	this.props.selectTerminalIndex(index);
}

handleAddTerminal = () => {
	this.props.addTerminal();
}

handleRemoveTerminal = (el, index) => {
	this.props.removeTerminal(index);
	el.stopPropagation(); //so the removed terminal is not selected
}

render () {
		return (
			<div>
				<Nav />
				<Tabs terminals={this.props.terminals} selectedIndex={this.props.selectedTerminal.index} onSelect={this.handleSelectTerminal} onAdd={this.handleAddTerminal} onRemove={this.handleRemoveTerminal} />
				<Terminal selectedTerminal={this.props.selectedTerminal} />
			</div>
		);
	}
}
