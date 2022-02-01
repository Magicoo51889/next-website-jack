import React from 'react';
import { Home, myProjectsPage } from './pages/'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/index';

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


  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root'),
  );

export default App;