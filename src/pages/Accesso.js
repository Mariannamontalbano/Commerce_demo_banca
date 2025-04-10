import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../global.css';

const Accesso = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Per favore, inserisci sia email che password.');
      return;
    }

    try {
      console.log('📩 Email inviata:', email);
      console.log('🔑 Password inviata:', password);

      const res = await api.post('/auth/login', { email, password });

      localStorage.setItem('token', res.data.token);

      alert('Login effettuato con successo!');
      navigate('/dashboard');
    } catch (err) {
      console.error('❌ Errore durante l’accesso:', err.response?.data || err.message);
      alert(err.response?.data?.error || 'Email o password errati.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Accesso area clienti</h1>
      <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Accedi
        </button>
      </div>
    </div>
  );
};

export default Accesso;
