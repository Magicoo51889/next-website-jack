import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
          <Nav>
            <Bars />
      
            <NavMenu>
              <NavLink to='/index' activeStyle>
                Home
              </NavLink>
              <NavLink to='/myProjects' activeStyle>
                My Projects
              </NavLink>
            </NavMenu>
          </Nav>
        </>
    );
}

export default Navbar;