//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import HomePage from './pages/HomePages';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
        <Header/>

        <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<NosotrosPage />} />
        <Route path='/' element={<ContactoPage />} />
      </Routes>
        </BrowserRouter>
        <Footer/>
    </div>   
  );
}
export default App;
