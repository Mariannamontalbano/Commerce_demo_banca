import React from 'react';
import '../global.css'; // Assicurati di importare correttamente il CSS

function Realizzazione() {
  return (
    <div className="realizzazione-page">
      {/* Sezione Hero personalizzata */}
      <div className="real-hero">
        <img
          src="/real.1.png"
          alt="Copertina Realizzazione"
          className="real-hero-img"
        />
        <div className="real-hero-text">
          <h1>Realizzare i tuoi progetti</h1>
          <p>Costruiamo il tuo futuro</p>
        </div>
      </div>

      {/* Contenuto principale */}
      <div className="real-main-content">
        <h2>I tuoi progetti al centro</h2>
        <div className="real-content-row">
          {/* Blocco di testo */}
          <div className="real-text-block">
            <h3>NovaCred al tuo fianco</h3>
            <p>
              La nostra offerta ti permette di avere la serenità di affrontare i 
              tuoi progetti con il sostegno di professionisti dedicati. 
              Soluzioni su misura, innovazione digitale e attenzione alla 
              crescita patrimoniale sono il nostro impegno per aiutarti a 
              realizzare i tuoi sogni.
            </p>
            
          </div>

          {/* Blocco immagine laterale */}
          <div className="real-image-block">
            <img
              src="/real.2.png"
              alt="Donna con cappello"
              className="real-side-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Realizzazione;
