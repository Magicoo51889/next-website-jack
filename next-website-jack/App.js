import React from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import myProjectsPage from './pages/myProjects';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/myProjects' component={myProjectsPage} />
	</Switch>
	</Router>
);
}

export default App;

