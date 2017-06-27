import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const Tabs = ({
	tabs,
	selectedIndex,
	onTabChanged,
	onAddTab
}) => {

	const mappedTabs = tabs ? tabs.map(t => {
		return <NavItem eventKey={t.index}>{t.name}</NavItem>;
	}) : null;

	return(
		<Nav bsStyle="tabs" activeKey={selectedIndex} onSelect={onTabChanged}>
			{mappedTabs}
			<NavItem eventKey={0}><a onClick={onAddTab}>New</a></NavItem>
		</Nav>
	);
};

export default Tabs;