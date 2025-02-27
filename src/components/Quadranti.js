import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link per la navigazione
import '../global.css'; // Assicurati di importare il CSS globale

// Componente per i Quadranti
function Quadranti() {
  return (
    <section className="quadranti">
      {/* Quadrante Pianificazione */}
      <div className="quadrante" style={{ backgroundImage: "url('/pianificazione.png')" }}>
        <div className="quadrante-content">
          <Link to="/pianificazione" className="quadrante-button">Pianificare</Link>
        </div>
      </div>

      {/* Quadrante Gestione */}
      <div className="quadrante" style={{ backgroundImage: "url('/gestione.png')" }}>
        <div className="quadrante-content">
          <Link to="/gestione" className="quadrante-button">Gestire</Link>
        </div>
      </div>

      {/* Quadrante Realizzazione */}
      <div className="quadrante" style={{ backgroundImage: "url('/realizzazione.png')" }}>
        <div className="quadrante-content">
          <Link to="/realizzazione" className="quadrante-button">Realizzare</Link>
        </div>
      </div>
    </section>
  );
}

export default Quadranti;

