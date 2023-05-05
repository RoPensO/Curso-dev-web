import React from 'react'

import Header from './componentes/header'
import Conteudo from './componentes/conteudo';
import Footer from './componentes/rodape';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;
