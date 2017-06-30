import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import Loading from "./Loading";
import Fa from "react-fontawesome";

const Tabs = ({
	terminals,
	selectedIndex,
	onTabChanged,
	onAddTab
}) => {

	const mappedTabs = terminals ? terminals.map(t => {
		const name = t.isLoading ? <Loading /> : t.name || t.path;
		return <NavItem key={t.index} eventKey={t.index}>{name}</NavItem>;
	}) : null;

	return(
		<Nav bsStyle="tabs" activeKey={selectedIndex} onSelect={onTabChanged}>
			{mappedTabs}
			<NavItem eventKey={0}><a href="#" onClick={onAddTab}><Fa name="plus"/> New</a></NavItem>
		</Nav>
	);
};

export default Tabs;