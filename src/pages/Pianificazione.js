import React from 'react';
import '../global.css'; // Assicurati che il CSS venga importato correttamente

function Pianificazione() {
  return (
    <div>
      {/* Immagine sopra l'header */}
      <div className="pianificazione-header-immagine">
        <img src="/pian.3.png" alt="Immagine di copertura" className="pianificazione-header-img" />
        <div className="pianificazione-header-text">
          <h1>Pianificazione</h1>
        </div>
      </div>

      <div className="pianificazione-content">
        <h2>Insieme tracciamo il percorso</h2>
        <p>Con un processo strutturato e trasparente analizziamo le tue caratteristiche, per poi tradurre specifiche esigenze in un’allocazione coerente ed efficiente degli investimenti.</p>

        <h2>Una soluzione per ogni esigenza</h2>
        <p>Essere cliente di Novacred significa accedere a un’offerta distintiva di Wealth Management, capace di rispondere alle esigenze di gestione e protezione del patrimonio più complesse.
           La nostra proposta, che beneficia anche di soluzioni di partner internazionali d’eccellenza, fornisce risposte sempre in linea con i bisogni dell’intero nucleo familiare.</p>

        {/* Quadrante 1 */}
        <div className="pianificazione-quadrante">
          <img src="/pian.1.png" alt="Trovare equilibrio tra rendimento e rischio" className="quadrante-img" />
          <div className="quadrante-testo">
            <h3>Trovare equilibrio tra rendimento e rischio</h3>
            <p>Strategie diversificate e sviluppate dalle migliori competenze del Gruppo, per cogliere le opportunità dei mercati.</p>
      
          </div>
        </div>

        {/* Quadrante 2 */}
        <div className="pianificazione-quadrante">
          <img src="/pian.2.png" alt="Risparmiare oggi con uno sguardo sul domani" className="quadrante-img" />
          <div className="quadrante-testo">
            <h3>Risparmiare oggi con uno sguardo sul domani</h3>
            <p>Piani previdenziali complementari, per mantenere e tutelare l'attuale tenore e stile di vita anche in futuro.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pianificazione;