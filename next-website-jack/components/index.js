import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
import styles from '../styles/Home.module.css'


class Navbar extends React.Component {
    render() {
      return (
        <>
          <Nav>
            <Bars />
            <NavMenu>
              <NavLink to='/pages/index' className={styles.Nav}>
                Home
              </NavLink>
              <NavLink to='/pages/myProjects' className={styles.Nav}>
                My Projects
              </NavLink>
            </NavMenu>
          </Nav>
        </>
      );
    };
}

export default Navbar;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);