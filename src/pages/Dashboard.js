import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import '../global.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [saldo] = useState(1582.75);
  const [movimenti] = useState([
    { id: 1, descrizione: 'Pagamento bolletta luce', importo: -84.90, data: '2024-03-20' },
    { id: 2, descrizione: 'Stipendio', importo: 1250.00, data: '2024-03-15' },
    { id: 3, descrizione: 'Abbonamento Netflix', importo: -15.99, data: '2024-03-13' },
    { id: 4, descrizione: 'Bonifico ricevuto', importo: 200.00, data: '2024-03-10' },
  ]);

  const [carte] = useState([
    { numero: '**** **** **** 1234', tipo: 'Mastercard', scadenza: '12/26' },
    { numero: '**** **** **** 5678', tipo: 'Visa', scadenza: '07/25' },
  ]);

  const [pagamentiFuturi] = useState([
    { id: 1, descrizione: 'Affitto', importo: -750.00, data: '2024-04-05' },
    { id: 2, descrizione: 'Spotify Premium', importo: -9.99, data: '2024-04-07' },
  ]);

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/accesso');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch (error) {
      console.error('Token non valido:', error);
      localStorage.removeItem('token');
      navigate('/accesso');
    }

    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Buongiorno');
    else if (hour < 18) setGreeting('Buon pomeriggio');
    else setGreeting('Buonasera');
  }, [navigate]);

  const saldoData = [
    { name: 'Gen', saldo: 900 },
    { name: 'Feb', saldo: 1100 },
    { name: 'Mar', saldo: 1582.75 },
  ];

  if (!user) return null;

  return (
    <div style={{ padding: '40px', maxWidth: '950px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#004085' }}>{greeting}, {user.nome || 'utente'}! 👋</h1>
      <h2 style={{ textAlign: 'center', marginTop: '10px', color: '#003366' }}>Benvenuto nella tua area personale NovaCred</h2>

      <div style={{ backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
        <h2 style={{ color: '#003366' }}>👤 Informazioni Utente</h2>
        <p><strong>Nome:</strong> {user.nome || '-'}</p>
        <p><strong>Email:</strong> {user.email || '-'}</p>
        <p><strong>Codice Fiscale:</strong> {user.codiceFiscale || '-'}</p>
        <p><strong>Telefono:</strong> {user.telefono || '-'}</p>
        <p><strong>Indirizzo:</strong> {user.indirizzo || '-'}</p>
      </div>

      <div style={{ backgroundColor: '#e9f5ff', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
        <h2 style={{ color: '#003366' }}>💰 Saldo Conto Corrente</h2>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}>{saldo.toFixed(2)} €</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={saldoData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="saldo" stroke="#007bff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ backgroundColor: '#fdfdfe', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
        <h2 style={{ color: '#003366' }}>📑 Ultimi Movimenti</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#dee2e6' }}>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Data</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Descrizione</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Importo</th>
            </tr>
          </thead>
          <tbody>
            {movimenti.map(mov => (
              <tr key={mov.id}>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{mov.data}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{mov.descrizione}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc', color: mov.importo < 0 ? 'red' : 'green' }}>
                  {mov.importo > 0 ? '+' : ''}{mov.importo.toFixed(2)} €
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ backgroundColor: '#f3f3ff', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
        <h2 style={{ color: '#003366' }}>💳 Carte di Credito</h2>
        <ul>
          {carte.map((carta, index) => (
            <li key={index}><strong>{carta.tipo}</strong> - {carta.numero} (Scadenza: {carta.scadenza})</li>
          ))}
        </ul>
      </div>

      <div style={{ backgroundColor: '#fff7e6', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
        <h2 style={{ color: '#856404' }}>📆 Pagamenti Pianificati</h2>
        <ul>
          {pagamentiFuturi.map(p => (
            <li key={p.id}>{p.data} - {p.descrizione} <span style={{ color: 'red' }}>{p.importo.toFixed(2)} €</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
