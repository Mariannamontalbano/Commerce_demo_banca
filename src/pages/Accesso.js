import React from 'react';
import '../global.css';

const Accesso = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Accesso area clienti</h1>
      <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* Campo per il nome utente */}
        <input
          type="text"
          placeholder="Nome utente"
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        {/* Campo per la password */}
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        {/* Pulsante di accesso */}
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
          }}
          onClick={() => alert('Accesso eseguito!')}
        >
          Accedi
        </button>
      </div>
    </div>
  );
};

export default Accesso;
