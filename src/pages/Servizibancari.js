import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Servizibancari = () => {
  const{id} = useParams()
  
  const bankProducts = [
    { id: 1, name: "Conto Corrente Base", shortDesc: "Un conto per le esigenze quotidiane." },
    { id: 2, name: "Conto Deposito", shortDesc: "Ideale per far fruttare i risparmi." },
    { id: 3, name: "Prestito Personale", shortDesc: "Finanziamento flessibile per i tuoi progetti." }
  ];

  return (
    <div>
      <h1>Prodotti Bancari</h1>
      <ul>
        {bankProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
            <p>{product.shortDesc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Servizibancari;
