import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Router>
          <NavBar />
          <switch>
             <Route path='/' exact/>
          </switch>
      </Router>
     </>
  );
}

export default App;
