import React, { useState } from 'react';
import api from '../services/api'; // Assicurati che punti a localhost:3000/api
import '../global.css';

const Apriconto = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    dataNascita: '',
    indirizzo: '',
    codiceFiscale: '',
    password: '',
    confermaPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confermaPassword) {
      alert('Le password non corrispondono!');
      return;
    }

    try {
      const res = await api.post('/auth/register', formData);
      console.log('Registrazione riuscita:', res.data);
      alert('Registrazione completata con successo!');
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        dataNascita: '',
        indirizzo: '',
        codiceFiscale: '',
        password: '',
        confermaPassword: '',
      });
    } catch (err) {
      console.error('Errore nella registrazione:', err.response?.data || err.message);
      alert(err.response?.data?.error || 'Errore durante la registrazione');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Apri il tuo Conto Corrente</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
        {Object.keys(formData).map((key) => (
          <div key={key} style={{ marginBottom: '15px' }}>
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type={key.toLowerCase().includes('password') ? 'password' : key === 'dataNascita' ? 'date' : 'text'}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Registrati
        </button>
      </form>
    </div>
  );
};

export default Apriconto;
