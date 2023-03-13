import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import About from './router/About';
import Contact from './router/Contact'
import Home from './router/Home'
import Menu from './nesting/menu';

function App() {
  return (
    <div className="App">
      <h2>React demo</h2>
        <nav>
          <ul>
          <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
            <li> <Link to="/menu">Menu</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route path='/home'Component={Home}/>
          <Route path='/about'Component={About}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/menu' Component={Menu}/>
        
          </Routes>
    </div>
  );
}

export default App;
