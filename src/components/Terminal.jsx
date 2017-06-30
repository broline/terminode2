import React, { Component } from "react";
import { Panel, FormControl } from "react-bootstrap";
import injectSheet from "react-jss";

// todo: custom themes
const textBgColor = "#2A2A2A";
const textColor = "white";

const styles = {
	panel: {
		marginBottom:0,
		"& .panel-body": {
			minHeight: "600px",
			backgroundColor: textBgColor
		}
	},
	terminal: {
		backgroundColor: textBgColor,
		color: textColor
	},
	text: {
		extend: "terminal",
		border: "none"
	}
};

const Tabs = class componentName extends Component {
	constructor (props) {
		super(props);

		this._input = null;
		this._panel = null;
	}

	handlePanelClicked = () => {
		if(this._input)
			this._input.focus();
	}

	render () {
		const { selectedTerminal : {
			name,
			path,
			text
		},
		classes } = this.props;

		const displayName = name || path;

		return (
			<div>
				<Panel ref={ el => this._panel = el} onClick={this.handlePanelClicked} header={displayName} className={classes.panel}>
					<pre className={classes.text}>{text}</pre>
				</Panel>
				<FormControl inputRef={ el => this._input = el} className={classes.terminal} />
			</div>
		);
	}
};

export default injectSheet(styles)(Tabs);