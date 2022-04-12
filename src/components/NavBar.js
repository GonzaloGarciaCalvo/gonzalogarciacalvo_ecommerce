
import {Navbar, Container, Nav } from "react-bootstrap"
import CartWidget from "./CartWidget";
import { Link , NavLink } from "react-router-dom";
import { useContext } from "react"
import { contextoCarrito } from "./CartContext"


function NavBar() {

	const resultado = useContext(contextoCarrito)
    const carrito = resultado.carrito

    return (
			<header className="boxHeather">
				<Navbar className=" w-100 py-0" collapseOnSelect expand="lg" bg="light" variant="light">
					<Container fluid>
						<Link as="Navbar.Brand" to="/" className="titulo" >AVENTURA WEAR</Link>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="w-100 pt-1 d-flex flex-row justify-content-evenly">
								<NavLink to="category/hombre" className={({isActive})=>isActive ?"linkActivo px-2":"linkNoActivo px-2"}>Hombre</NavLink>
								<NavLink to="category/mujer" className={({isActive})=>isActive ?"linkActivo px-2":"linkNoActivo px-2"}>Mujer</NavLink>
								<NavLink to="/" className={({isActive})=>isActive ?"linkActivo px-2":"linkNoActivo px-2"}>Ver todo</NavLink>
								{carrito.length? <CartWidget /> : ""}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
	);
}

export default NavBar