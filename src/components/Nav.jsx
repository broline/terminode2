import React from "react";
import { Navbar } from "react-bootstrap";

const Nav = () => {
	return(
		<Navbar inverse fluid>
			<Navbar.Header>
				<Navbar.Brand>
					<i className="fa fa-terminal"/> terminode
				</Navbar.Brand>
			</Navbar.Header>
		</Navbar>
	);
};

export default Nav;