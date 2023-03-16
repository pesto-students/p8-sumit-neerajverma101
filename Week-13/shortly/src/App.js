import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='nav-bar'>
          <section><h2>Shortly</h2></section>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} >
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
