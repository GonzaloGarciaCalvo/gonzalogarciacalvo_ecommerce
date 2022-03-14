
import {Navbar, Container, Nav } from "react-bootstrap"
import CartWidget from "./CartWidget";
import { Link , NavLink } from "react-router-dom";


function NavBar() {
    return (
			<heather className="boxHeather">
				<Navbar className="pt-4v w-100" collapseOnSelect expand="lg" bg="light" variant="light">
					<Container fluid>
						<Link as="Navbar.Brand" to="/" className="titulo " >Aventura Wear</Link>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<NavLink to="category/1" className="mx-5">Hombre</NavLink>
								<NavLink to="category/2" className="mx-5">Mujer</NavLink>
								<CartWidget />
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</heather>
		);
}

export default NavBar