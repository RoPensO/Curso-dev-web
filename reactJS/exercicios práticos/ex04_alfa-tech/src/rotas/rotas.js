import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from '../paginas/HomePage';
import Precos from '../paginas/Precos';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <HomePage/> }/>
	            <Route path='/precos' element={ <Precos/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;