import './App.css';
import './global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Foot';
import Header from './components/testa';

// Importa i componenti-pagine
import Servizibancari from './pages/Servizibancari';
import Production from './pages/Production';
import StoriadellaBanca from './pages/StoriadellaBanca';
import Recensioni from './pages/Recensioni';
import Accesso from './pages/Accesso';
import ProductPage from './pages/ProductPage'; // Nuova pagina aggiunta
import Apriconto from './pages/Apriconto';

// Importa i nuovi componenti per i quadranti
import Pianificazione from './pages/Pianificazione';  // Nuovo componente
import Gestione from './pages/Gestione';  // Nuovo componente
import Realizzazione from './pages/Realizzazione';  // Nuovo componente

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        {/* Contenuto delle pagine */}
        <Routes>
          <Route path="/apriconto" element={<Apriconto />} />
          <Route path="/servizibancari" element={<Servizibancari />} />
          <Route path="/production" element={<Production />} />
          <Route path="/" element={<StoriadellaBanca />} />
          <Route path="/recensioni" element={<Recensioni />} />
          <Route path="/accessoarea" element={<Accesso />} />
          <Route path="/product/:id" element={<ProductPage />} />

          {/* Aggiungi le nuove rotte per i quadranti */}
          <Route path="/pianificazione" element={<Pianificazione />} />
          <Route path="/gestione" element={<Gestione />} />
          <Route path="/realizzazione" element={<Realizzazione />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
