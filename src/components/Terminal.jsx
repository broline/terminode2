import React from 'react';
import { Panel } from 'react-bootstrap';

const Tabs = ({
	tab : {
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