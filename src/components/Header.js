import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, BrowserRouter } from 'react-router-dom'
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand > <NavLink to="/">Blog Forum</NavLink ></Navbar.Brand>
                <Nav className=" justify-content-end">
                </Nav>
            </Navbar>

        </div>
    )
}

export default Header
