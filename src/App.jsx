import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
const App = () => {
  return (
    <div>
      <Navigation />
      <h1>Salon flow</h1>
      <p>
        Salon management app that simplifies appointment scheduling, customer
        management, and daily operations for salon owners and staff.
      </p>
      <button className="bg-blue-500 text-white p-4 rounded">Click Me</button>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
export default App;
