import React from "react";
import T from "./../utils/T";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = (props) => {
	return (
		<Navbar
			activeKey="/"
			onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
			bg="dark"
			expand="lg"
			className="ftco-navbar-light"
		>
			<Container>
				<Navbar.Brand href="/">
					<T t="appName" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"  className="navbar-toggler"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto" as="ul">
					<Nav.Item as="li">
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li">
							<Nav.Link href="/">About</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li">
							<Nav.Link href="/">Blog</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li">
							<Nav.Link href="/">Contact</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li" className="cta">
							<Nav.Link href="/" >
								Get Started
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
