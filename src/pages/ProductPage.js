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
      imageUrl: "/conto_corrente_base.jpg",  // Aggiungi un'immagine
      advantages: "Interessi vantaggiosi, operazioni illimitate, accesso online.",
      costs: "Canone mensile: 3€",
      howToOpen: "Puoi aprirlo online o in filiale presentando un documento d'identità."
    },
    { 
      id: "2", 
      name: "Conto Deposito", 
      description: "Descrizione dettagliata del conto deposito.",
      imageUrl: "/images/conto_deposito.jpg",  // Aggiungi un'immagine
      advantages: "Tasso di interesse superiore, deposito vincolato.",
      costs: "Canone mensile: 5€.",
      howToOpen: "Richiedi informazioni in filiale."
    },
    { 
      id: "3", 
      name: "Prestito Personale", 
      description: "Descrizione dettagliata del prestito personale.",
      imageUrl: "/images/prestito_personale.jpg",  // Aggiungi un'immagine
      advantages: "Tasso d'interesse basso, durata flessibile.",
      costs: "Commissione di apertura: 2% dell'importo richiesto.",
      howToOpen: "Presenta la tua richiesta in filiale o online."
    }
  ];


  // Trova il prodotto corrispondente all'ID
  const product = bankProducts.find(p => p.id === id);

  if (!product) {
    return <h2>Prodotto non trovato!</h2>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} style={{ width: "300px", height: "auto" }} /> 
      <p>{product.description}</p>

      <h2>Vantaggi</h2>
      <p>{product.advantages}</p>

      <h2>Costi</h2>
      <p>{product.costs}</p>

      <h2>Come Aprire</h2>
      <p>{product.howToOpen}</p>

      <Link to="/servizibancari">Torna alla lista</Link>
    </div>
  );
};

export default ProductPage;