import React from "react";
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

const Tabs = ({
	selectedTerminal : {
		name,
		path,
		isLoading,
		text
	},
	classes
}) => {
	const displayName = isLoading ? "loading..." : name || path;
	return(
		<div>
			<Panel header={displayName} className={classes.panel}>
				<pre className={classes.text}>{text}</pre>
			</Panel>
			<FormControl className={classes.terminal} />
		</div>
	);
};

export default injectSheet(styles)(Tabs);