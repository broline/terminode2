import React from "react";
import { Panel } from "react-bootstrap";

const Tabs = ({
	selectedTerminal : {
		name
	}
}) => {

	return(
		<Panel>
			{name}
		</Panel>
	);
};

export default Tabs;