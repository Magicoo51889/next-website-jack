import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';

const Navbar = () => {
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to ='/' activeStyle>
                        Home
                    </NavLink>
                    <Bars />
                    <NavLink to ='../pages/myProjects' activeStyle>
                        My Projects
                    </NavLink>
                </NavMenu>
            </Nav>
        </>  
    );
};

export default Navbar;