import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IlanList from './components/IlanList';
import IlanDetay from './pages/IlanDetay';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>İş İlan Portalı</h1>
        <div className="header">
          <div className="arama_kutusu">
            <input type="text" placeholder="İş ilanı Arayın" />
            <button id="arama_butonu">Ara</button>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<IlanList />} />
          <Route path="/ilan/:id" element={<IlanDetay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
