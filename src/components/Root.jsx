import React, { Component } from "react";
import Tabs from "./Tabs";
import Terminal from "./Terminal";
import Nav from "./Nav";

export default class Root extends Component {
	render () {
		return (
			<div>
				<Nav />
				<Tabs terminals={this.props.terminals} selectedIndex={this.props.selectedTerminal.index}/>
				<Terminal selectedTerminal={this.props.selectedTerminal} />
			</div>
		);
	}
}
