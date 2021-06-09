import React, { useState } from 'react';
import './header.css';
import {
    Nav,
    NavLink,
    StyledBurger,
    Ul
} from './NavbarElements'

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <header>
                <div className="container">
                    <Nav>
                        <NavLink exact to="/">
                            <h1>Learning React</h1>
                        </NavLink>
                        <StyledBurger open={open} onClick={() => setOpen(!open)}>
                            <div />
                            <div />
                            <div />
                        </StyledBurger>
                        <Ul open={open}>
                            <li onClick={() => setOpen(!open)}><NavLink exact to="/">Home</NavLink></li>
                            <li onClick={() => setOpen(!open)}><NavLink to="/about">About</NavLink></li>
                        </Ul>
                    </Nav>
                </div>
            </header>
        </>
    );
}
export default Header;