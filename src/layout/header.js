import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top">
                    <div className="container">

                        <Link className="navbar-brand" to="/">
                            <h1>My first project</h1>
                        </Link>

                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item menu"><NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink></li>
                                <li className="nav-item menu"><NavLink activeClassName='is-active' to="/about">About</NavLink></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header;