/* function NavBar() {
    return (
        <header class="boxHeather">
            <h1 class="titulo">Aventura Wear</h1>
            <nav class="barraNav">
                <a href="#">Nosotros</a>
                <a href="#">Carrito</a>
                <a href="#">Contacto</a>
            </nav>
        </header>
    )
} */
import {Navbar, Container, Nav } from "react-bootstrap"
import CartWidget from "./CartWidget";

function NavBar() {
    return (
			<heather className="boxHeather">
				<Navbar className="pt-4" collapseOnSelect expand="lg" bg="light" variant="light">
					<Container fluid>
						<Navbar.Brand href="#home" className="titulo " >Aventura Wear</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#features" className="mx-5">Nosotros</Nav.Link>
								<Nav.Link href="#pricing" className="mx-5">Carrito</Nav.Link>
								<CartWidget />
								<Nav.Link href="#deets" className="mx-4">Contacto</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</heather>
		);
}

export default NavBar