import React from 'react';
import '../global.css'; // Assicurati che il CSS venga importato correttamente

function Gestione() {
  return (
    <div>
      {/* Immagine sopra l'header */}
      <div className="gestione-header-immagine">
        <img src="/gest.1.png" alt="Immagine di copertura" className="gestione-header-img" />
        <div className="gestione-header-text">
          <h1>Gestione</h1>
        </div>
      </div>

      <div className="gestione-content">
        <h2>Operatività quotidiana senza pensieri</h2>
        <p>Le nostre soluzioni ti permettono di gestire in modo semplice ed efficace le operazioni bancarie di tutti i giorni, garantendoti massima sicurezza e accesso a servizi innovativi.</p>

        <h2>Soluzioni su misura per te</h2>
        <p>Con NovaCred hai accesso a strumenti personalizzati che si adattano alle tue esigenze finanziarie, offrendoti un’esperienza bancaria all’avanguardia e sicura.</p>

        {/* Quadrante 1 */}
        <div className="gestione-quadrante">
          <img src="/gest.2.png" alt="Gestione completa del conto" className="quadrante-img" />
          <div className="quadrante-testo">
            <h3>Gestione completa del conto</h3>
            <p>Conti correnti innovativi per monitorare, gestire e ottimizzare le tue finanze in modo efficace e sicuro.</p>
          </div>
        </div>  
           

        {/* Quadrante 2 con descrizione sopra l'immagine */}
        <div className="gestione-quadrante">
          <img src="/gest.3.png" alt="Pagamenti e transazioni veloci" className="quadrante-img" />
          <div className="quadrante-testo">
            <h3>Pagamenti e transazioni veloci</h3>
            <p>Soluzioni digitali per eseguire bonifici, pagamenti e operazioni bancarie in totale sicurezza e rapidità.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gestione;
