import React from 'react';
import { Home, myProjectsPage } from './pages/'
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/index';

const App = () => {
    return (
      <Router>
		  <Navbar/>
        <Routes>
          <Route path='/' exact element={Home} />
          <Route path='./myProjects' element={myProjectsPage} />
        </Routes>
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