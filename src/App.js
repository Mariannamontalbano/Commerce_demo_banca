import './App.css';
import './global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Foot';
import Header from './components/testa';

// ✅ Importa AuthProvider
import { AuthProvider } from './context/AuthContext';

// Importa i componenti-pagine
import Servizibancari from './pages/Servizibancari';
import Production from './pages/Production';
import StoriadellaBanca from './pages/StoriadellaBanca';
import Recensioni from './pages/Recensioni';
import Accesso from './pages/Accesso';
import ProductPage from './pages/ProductPage';
import Apriconto from './pages/Apriconto';
import Dashboard from './pages/Dashboard';

import Pianificazione from './pages/Pianificazione';
import Gestione from './pages/Gestione';
import Realizzazione from './pages/Realizzazione';

function App() {
  return (
    <AuthProvider> {/* ✅ Avvolgi tutta l'app qui */}
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<StoriadellaBanca />} />
            <Route path="/apriconto" element={<Apriconto />} />
            <Route path="/servizibancari" element={<Servizibancari />} />
            <Route path="/production" element={<Production />} />
            <Route path="/recensioni" element={<Recensioni />} />
            <Route path="/accessoarea" element={<Accesso />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pianificazione" element={<Pianificazione />} />
            <Route path="/gestione" element={<Gestione />} />
            <Route path="/realizzazione" element={<Realizzazione />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
