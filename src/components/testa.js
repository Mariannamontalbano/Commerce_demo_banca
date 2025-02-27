import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Usa Link per il routing
import '../global.css'; // Assicurati che il file CSS sia nel percorso corretto

function Header() {
  
  return (
    <header>
      <div className="main-nav">
        <div className="logo">
        <img
  src="/logos.png"
  alt="Logo NovaCred"
  className="logo-img"
  style={{ width: '60px', height: 'auto' }}/>
        </div>
        <ul className="main-links">
          <li><Link to="/">Storia della Banca</Link></li>
          <li><Link to="/servizibancari">Servizi Bancari</Link></li>
          <li><Link to="/production">Credito</Link></li>
          <li><Link to="/recensioni">Recensioni</Link></li>
          <li><Link to="/apriconto" className="highlighted-link">Apri il conto</Link></li>
          <li><Link to="/accessoarea" className="highlighted-link">Accesso area clienti </Link></li>
        </ul>
      
      </div>
    </header>
  );
}

export default Header;
  