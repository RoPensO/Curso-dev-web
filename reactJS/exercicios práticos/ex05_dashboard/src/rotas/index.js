import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../paginas/home';
import Analytics from '../paginas/analytics';
import Wallet from '../paginas/wallet';
import Profile from '../paginas/profile';
import Settings from '../paginas/settings';
import Activity from '../paginas/activity';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <Home/> }/>
                <Route path='/analytics' element={ <Analytics/> }/>
                <Route path='/wallet' element={ <Wallet/> }/>
                <Route path='/profile' element={ <Profile/> }/>
                <Route path='/settings' element={ <Settings/> }/>
                <Route path='/activity' element={ <Activity/> }/>
            </Routes>
        </BrowserRouter>
    );
}