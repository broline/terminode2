import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import Loading from "./Loading";
import Fa from "react-fontawesome";

const Tabs = ({
	terminals,
	selectedIndex,
	onAdd,
	onSelect
}) => {

	const mappedTabs = terminals ? terminals.map(t => {
		const name = t.isLoading ? <Loading /> : t.name || t.path;
		return <NavItem key={t.index} eventKey={t.index}>{name}</NavItem>;
	}) : null;

	return(
		<Nav bsStyle="tabs" activeKey={selectedIndex} onSelect={onSelect}>
			{mappedTabs}
			<NavItem eventKey={-1}><a href="#" onClick={onAdd}><Fa name="plus"/> New</a></NavItem>
		</Nav>
	);
};

export default Tabs;