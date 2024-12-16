
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
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

function Home() {
  return (
    <main>
      <h1>Welcome to Our Website</h1>
      <p>This is the homepage.</p>
    </main>
  );
}

function About() {
  return (
    <main>
      <h1>About Us</h1>
      <p>Learn more about us on this page.</p>
    </main>
  );
}

function Contact() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>Reach out to us via this page.</p>
    </main>
  );
}

function SignIn() {


  useEffect(() => {
    let environment = 'development'; // Default to local

    // Push the environment to the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'environment': environment,
    });
  }, []);
  
  
  return (
    <main>
      <h1>Sign In</h1>
      <>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit" id='signInButtonClickID'>Sign In</button>
      </>
    </main>
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


