import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';


import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import GaleriaPage from "./pages/GaleriaPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="nosotros" element={<NosotrosPage/>} />
          <Route path="novedades" element={<NovedadesPage/>} />
          <Route path="contacto" element={<ContactoPage/>} />
          <Route path="servicios" element={<ContactoPage/>} />
          <Route path="galeria" element={<GaleriaPage/>} />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
