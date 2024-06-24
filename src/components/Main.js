import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import walletIcon from './images/logo.png'; 
import profileIcon from './images/profile.png'; 
import welcomeImage from './images/image.png'; 

const Main = () => {
  return (
    <div className="main-container">
      <header className="main-header">
        <div className="logo">
          <img src={walletIcon} alt="Logo" />
        </div>
        <nav className="main-nav">
          <Link to="/">Inicio</Link>
          <Link to="/operations">Realizar Operación</Link>
          <Link to="/history">Historial</Link>
        </nav>
        <div className="profile">
          <Link to="/profile">
            <img src={profileIcon} alt="Profile" className="profile-icon" />
          </Link>
        </div>
      </header>
      <main className="main-content">
        <div className="welcome-card">
          <h2>Hola Miguel, Bienvenido a Smart Wallet</h2>
          <img src={welcomeImage} alt="Welcome" className="welcome-image" />
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Smart Wallet. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Main;
