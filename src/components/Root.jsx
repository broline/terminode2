import React, { Component } from "react";
import Tabs from "./Tabs";
import Terminal from "./Terminal";

export default class Root extends Component {
	render () {
		return (
			<div>
				<Tabs />
				<Terminal tab={{ name: "terminal 1" }}/>
			</div>
		);
	}
}
