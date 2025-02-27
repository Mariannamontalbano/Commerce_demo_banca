import React from "react";
import { useParams, Link } from "react-router-dom";
import '../global.css';

const ProductPage = () => {
  const { id } = useParams(); // Legge l'ID dall'URL

  const bankProducts = [
    { 
      id: "1", 
      name: "Conto Corrente Base", 
      description: "Apri il conto, accredita lo stipendio e hai il 4% annuo lordo sulle somme vincolate a sei mesi1. E le svincoli quando vuoi senza perdere gli interessi maturati.",
      imageUrl: "/ser.1.png",  // Immagine di sfondo
      advantages: "Interessi vantaggiosi, operazioni illimitate, accesso online.",
      costs: "Canone mensile: 3€",
      howToOpen: "Puoi aprirlo online o in filiale presentando un documento d'identità."
    },
    { 
      id: "2", 
      name: "Conto Deposito", 
      description: "Descrizione dettagliata del conto deposito.",
      imageUrl: "/ser.2.png",  // Immagine di sfondo
      advantages: "Tasso di interesse superiore, deposito vincolato.",
      costs: "Canone mensile: 5€.",
      howToOpen: "Richiedi informazioni in filiale."
    },
    { 
      id: "3", 
      name: "Prestito Personale", 
      description: "Descrizione dettagliata del prestito personale.",
      imageUrl: "/ser.3.png",  // Immagine di sfondo
      advantages: "Tasso d'interesse basso, durata flessibile.",
      costs: "Commissione di apertura: 2% dell'importo richiesto.",
      howToOpen: "Presenta la tua richiesta in filiale o online."
    }
  ];

  const product = bankProducts.find(p => p.id === id);
  if (!product) {
    return <p>Prodotto non trovato</p>;
  }

  return (
    <div 
      className="product-page"
      style={{
        backgroundImage: `url(${product.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: product.id === "2" ? "black" : "white", // Cambia il colore del testo per Conto Deposito
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>{product.name}</h1>
      <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>{product.description}</p>
      <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}><strong>Vantaggi:</strong> {product.advantages}</p>
      <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}><strong>Costi:</strong> {product.costs}</p>
      <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}><strong>Come aprirlo:</strong> {product.howToOpen}</p>
      <Link to="/" style={{ color: product.id === "2" ? "black" : "white", textDecoration: "underline", fontSize: "1.2rem" }}>Torna alla home</Link>
    </div>
  );
};

export default ProductPage;
