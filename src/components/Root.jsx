import React, { Component } from "react";
import Tabs from "./Tabs";
import Terminal from "./Terminal";
import Nav from "./Nav";

export default class Root extends Component {

handleSelectTerminal = index => {
	if(!index || index < 0) return;
	this.props.selectTerminalIndex(index);
}

handleAddTerminal = () => {
	this.props.addTerminal();
}

render () {
		return (
			<div>
				<Nav />
				<Tabs terminals={this.props.terminals} selectedIndex={this.props.selectedTerminal.index} onSelect={this.handleSelectTerminal} onAdd={this.handleAddTerminal}/>
				<Terminal selectedTerminal={this.props.selectedTerminal} />
			</div>
		);
	}
}
