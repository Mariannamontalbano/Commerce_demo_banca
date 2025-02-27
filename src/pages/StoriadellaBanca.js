import React from 'react';
import '../global.css'; // Assicurati di importare il CSS globale
import Quadranti from '../components/Quadranti'; // Assicurati che il percorso sia corretto

// Componente per la Storia della Banca
function StoriadellaBanca() {
  const bankDetails = {
    name: "NovaCred",
    founded: 1952,
    headquarters: "Milano, Italia",
    founders: "Un gruppo di imprenditori e professionisti del settore finanziario",
    mission:
      "Supportare le piccole e medie imprese con soluzioni di credito innovative e accessibili.",
    milestones: [
      <ul>
        <li>Anni '60: Espansione durante il boom economico, diventando un punto di riferimento per le imprese italiane.</li>
        <li>Anni '90: Lanciati servizi di credito internazionale per supportare l'espansione delle aziende italiane all'estero.</li>
        <li>2010: Introduzione delle piattaforme digitali per la gestione di conti, investimenti e prestiti.</li>
        <li>Oggi: Oltre 1.000 filiali in Europa e milioni di utenti attivi sulla piattaforma digitale.</li>
    </ul>

    ],
    description: `NovaCred è una banca nata con l'obiettivo di supportare il tessuto imprenditoriale italiano.
    Con una gestione prudente e una visione lungimirante, è cresciuta fino a diventare
    un leader nel settore finanziario, sinonimo di innovazione e affidabilità.`
  };

  return (
    <div>
      {/* Hero Section con titolo e descrizione */}
      <div className="hero-section">
        <h1>{bankDetails.name}</h1>
        <p>Una lunga tradizione di affidabilità e innovazione</p>
        <button className="btn-primary">Scopri di più</button>
      </div>

      {/* Sezione della Storia della Banca con i dettagli dinamici */}
      <section className="storia">
        <h2>Chi Siamo</h2>
        <p><strong>Anno di fondazione:</strong> {bankDetails.founded}</p>
        <p><strong>Sede principale:</strong> {bankDetails.headquarters}</p>
        <p><strong>Fondatori:</strong> {bankDetails.founders}</p>
        <p><strong>Missione:</strong> {bankDetails.mission}</p>

        <h2>Traguardi principali</h2>
        <ul>
          {bankDetails.milestones.map((milestone, index) => (
            <li key={index}>{milestone}</li>
          ))}
        </ul>

        <p>{bankDetails.description}</p>
      </section>

      {/* Aggiungi il componente Quadranti qui */}
      <Quadranti />
    </div>
  );
}

export default StoriadellaBanca;
