import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './assests/css/style.css';
import App from './Halaman/App';
import Halaman2 from './Halaman/Tentang_kami';
import Halaman3 from './Halaman/Kos';
import Halaman4 from './Halaman/Kontak';
import Halaman5 from './Halaman/detail_kos';
import reportWebVitals from './reportWebVitals'; 


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} Route/>
          <Route path="dashboard" element={<App />} Route/>
          <Route path="tentang" element={<Halaman2 />} Route/>
          <Route path="kost" element={<Halaman3 />} Route/>
          <Route path="kontak" element={<Halaman4 />} Route/>
          <Route path="detail" element={<Halaman5 />} Route/>
      </Routes>
    </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
