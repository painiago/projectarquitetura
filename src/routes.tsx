import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Agendamento from './components/Agendamento/agendamento';
import Footer from './components/Footer/footer';
import NavBar from './components/NavBar/navbar';
import Projeto from './components/Projeto/projeto';
import Sobre from './components/Sobre/sobre';
import Welcome from './components/welcome/welcome';

import './styles/global.scss';

function Routess() {
  return (
    <BrowserRouter>
      <NavBar />
      <Welcome />
      <Sobre />
      <Projeto />
      <Agendamento />
      <Footer />
    </BrowserRouter>
  );
}

export default Routess;
