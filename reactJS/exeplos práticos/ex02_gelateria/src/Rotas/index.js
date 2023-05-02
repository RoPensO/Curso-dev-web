import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from '../Paginas/PaginaInicial';
import PaginaSabores from '../Paginas/PaginaSabores';
import PaginaSobre from '../Paginas/PaginaSobre';

export default function Rotas() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PaginaInicial/> }/>
	      <Route path='/sabores' element={ <PaginaSabores/> }/>
	      <Route path='/sobre' element={ <PaginaSobre/> }/>
      </Routes>
    </BrowserRouter>
  )
}