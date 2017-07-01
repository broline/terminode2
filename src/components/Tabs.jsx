import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import Loading from "./Loading";
import Fa from "react-fontawesome";

const Tabs = ({
	terminals,
	selectedIndex,
	onAdd,
	onSelect,
	onRemove
}) => {

	const Remove = ({ index }) => terminals.length > 1 && (<a title="Close" href="#" onClick={el => onRemove(el, index)}><Fa name="times"/></a>);

	const mappedTabs = terminals ? terminals.map(t => {
		const name = t.isLoading ? <Loading /> : t.name || t.path;
		return <NavItem key={t.index} eventKey={t.index}>{name} <Remove index={t.index}/></NavItem>;
	}) : null;

	return(
		<Nav bsStyle="tabs" activeKey={selectedIndex} onSelect={onSelect}>
			{mappedTabs}
			<NavItem title="Add a new terminal" eventKey={-1} onClick={onAdd}><a href="#" ><Fa name="plus"/> New</a></NavItem>
		</Nav>
	);
};

export default Tabs;