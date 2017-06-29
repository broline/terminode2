import React from "react";
import { Nav, NavItem } from "react-bootstrap";

const Tabs = ({
	terminals,
	selectedIndex,
	onTabChanged,
	onAddTab
}) => {

	const mappedTabs = terminals ? terminals.map(t => {
		const name = t.isLoading ? "loading..." : t.name || t.path;
		return <NavItem key={t.index} eventKey={t.index}>{name}</NavItem>;
	}) : null;

	return(
		<Nav bsStyle="tabs" activeKey={selectedIndex} onSelect={onTabChanged}>
			{mappedTabs}
			<NavItem eventKey={0}><a onClick={onAddTab}>New</a></NavItem>
		</Nav>
	);
};

export default Tabs;