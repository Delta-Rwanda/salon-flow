import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import LogIn from './pages/LogIn';

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <h1 className="tex-blue-500">Salon flow</h1>
        <p>
          Salon management app that simplifies appointment scheduling, customer
          management, and daily operations for salon owners and staff.
        </p>
        <button className="bg-blue-500 text-white p-4 rounded">Click ME</button>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a className="text-7xl text-blue-700" href="/about">
                About
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="*" element={<LogIn />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
