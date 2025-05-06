import './App.css';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navigation">
        {/* Logo stays consistent */}
        <div className="logo">MyApp</div>

        {/* Hamburger only visible on mobile */}
        <button className="hamburger-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Nav links container - changes style based on screen size */}
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
        </div>

        {/* Profile */}
        <div className="profile">Profile</div>
      </nav>
    </>
  );
}

export default App;
