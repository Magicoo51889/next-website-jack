import React from 'react';
import styles from '../styles/Home.module.css'
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {Home, MyApp, myProjectsPage} from '../pages';

//class Navbar extends React.Component {
    ReactDOM.render((
        <Router history={browserHistory} >
          <Route path = "/" component={MyApp}>
          <IndexRoute component={Home} className={styles.Nav} /> Home
              <Route to='/pages/myProjects' component={myProjectsPage} className={styles.Nav} /> My Projects
          </Route>
        </Router>
), document.getElementById('app'));

/*export default Navbar; */