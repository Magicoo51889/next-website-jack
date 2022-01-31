import React from 'react';
import { Home } from './pages/index'
import Navbar from './components/Navbar';
import myProjectsPage from './pages/myProjects';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return (
      <Router>
		<Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='./myProjects' component={myProjectsPage} />
        </Switch>
      </Router>
    );
  }

export default App;