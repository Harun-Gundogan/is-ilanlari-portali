import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import IlanList from './components/IlanList';
import IlanDetay from './components/IlanDetay';
import AramaSonuclari from './components/AramaSonuclari';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = new URLSearchParams({ q: searchTerm, location, category }).toString();
    navigate(`/search?${query}`);
  };

  return (
    <div className="App">
      <h1>İş İlan Portalı</h1>
      <div className="arama_kutusu">
        <input 
          type="text" 
          placeholder="İş ilanı arayın" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Konum Seçin</option>
          <option value="İstanbul, Türkiye">İstanbul, Türkiye</option>
          <option value="Ankara, Türkiye">Ankara, Türkiye</option>
          <option value="İzmir, Türkiye">İzmir, Türkiye</option>
          <option value="Bursa, Türkiye">Bursa, Türkiye</option>
          <option value="Antalya, Türkiye">Antalya, Türkiye</option>
          <option value="Adana, Türkiye">Adana, Türkiye</option>
          <option value="Gaziantep, Türkiye">Gaziantep, Türkiye</option>
          <option value="Konya, Türkiye">Konya, Türkiye</option>
          <option value="Kayseri, Türkiye">Kayseri, Türkiye</option>
          <option value="Samsun, Türkiye">Samsun, Türkiye</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Kategori Seçin</option>
          <option value="Yazılım Geliştirme">Yazılım Geliştirme</option>
          <option value="Mobil Geliştirme">Mobil Geliştirme</option>
          <option value="Veri Bilimi">Veri Bilimi</option>
          <option value="Siber Güvenlik">Siber Güvenlik</option>
          <option value="Bulut Bilişim">Bulut Bilişim</option>
          <option value="Yapay Zeka">Yapay Zeka</option>
          <option value="Web Geliştirme">Web Geliştirme</option>
          <option value="Tasarım">Tasarım</option>
          <option value="Proje Yönetimi">Proje Yönetimi</option>
          <option value="DevOps">DevOps</option>
        </select>
        <button id="arama_butonu" >Ara</button>
      </div><br/>
      <Routes>
        <Route path="/" element={<IlanList searchTerm={searchTerm} location={location} category={category} />} />
        <Route path="/ilan/:id" element={<IlanDetay />} />
        <Route path="/search" element={<AramaSonuclari />} />
      </Routes>
    </div>
  );
}

export default App;
