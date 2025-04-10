import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // ✅ Importa il contesto
import '../global.css';

function Header() {
  const { user, logout } = useContext(AuthContext); // ✅ Prendi user e logout dal contesto
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // ✅ Usa il logout centralizzato
    navigate('/accessoarea');
  };

  return (
    <header>
      <div className="main-nav">
        <div className="logo">
          <img
            src="/logos.png"
            alt="Logo NovaCred"
            className="logo-img"
            style={{ width: '60px', height: 'auto' }}
          />
        </div>
        <ul className="main-links">
          <li><Link to="/">Storia della Banca</Link></li>
          <li><Link to="/servizibancari">Servizi Bancari</Link></li>
          <li><Link to="/production">Credito</Link></li>
          <li><Link to="/recensioni">Recensioni</Link></li>
          <li><Link to="/apriconto" className="highlighted-link">Apri il conto</Link></li>

          {user ? (
            <>
              <li><Link to="/dashboard" className="highlighted-link">Dashboard</Link></li>
              <li>
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#007bff',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li><Link to="/accessoarea" className="highlighted-link">Accesso area clienti</Link></li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
