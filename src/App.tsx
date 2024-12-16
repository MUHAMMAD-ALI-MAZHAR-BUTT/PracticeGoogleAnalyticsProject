
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,

  Link
} from 'react-router-dom';
import './index.css';
import { useEffect } from 'react';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  );
}


export default function App() {

  useEffect(() => {
    let environment = 'development'; // Default to local

    // Push the environment to the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'environment': environment,
    });
  }, []);
  
  return (
    <Router>
      <div className="app">
        <Header />
        <button type="submit" id='signInButtonClickID'>Sign In</button>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);


