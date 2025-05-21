import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Signup from './pages/Signup';
const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      <Signup />
    </div>
  );
};

export default App;
