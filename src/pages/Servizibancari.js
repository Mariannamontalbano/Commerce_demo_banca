import React from "react";
import { Link } from "react-router-dom";
import "../global.css";

const Servizibancari = () => {
  const bankProducts = [
    { id: 1, name: "Conto Corrente Base", shortDesc: "Un conto per le esigenze quotidiane." },
    { id: 2, name: "Conto Deposito", shortDesc: "Ideale per far fruttare i risparmi." },
    { id: 3, name: "Prestito Personale", shortDesc: "Finanziamento flessibile per i tuoi progetti." }
  ];

  return (
    <div className="servizi-container">
      <div className="cover-image">
        <h1 className="title">Servizi Bancari</h1>
        <img src="/ser.4.png" alt="Copertura Servizi" className="cover-img" />
      </div>
      <div className="servizi-cards">
        {bankProducts.map((product) => (
          <div key={product.id} className="servizi-card">
            <h2 className="card-title">{product.name}</h2>
            <p className="card-desc">{product.shortDesc}</p>
            <Link to={`/product/${product.id}`} className="card-link">
              Scopri di più
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servizibancari;
