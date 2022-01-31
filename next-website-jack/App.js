import React from 'react';
import { Home, Navbar } from './index';
import myProjectsPage from './pages/myProjects';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
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