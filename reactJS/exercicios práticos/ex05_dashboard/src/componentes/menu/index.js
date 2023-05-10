import {Link} from 'react-router-dom';

import './menu.css';

export default function menu() {
    return(
        <div className='menu'>
            <div className="logo">
                <span>LOGO</span>
            </div>
            <div className="nav-menu">
                <nav>
                    <div className="link"><Link className='link-nav-menu' to='/'><img src="../../../assets/icones/home(1).png" alt=''/>Home</Link></div>
                    <div className="link"><Link className='link-nav-menu' to='/analytics'><img src="../../../assets/icones/data-analytics(1).png" alt=''/>Analytics</Link></div>
                    <div className="link"><Link className='link-nav-menu' to='/wallet'><img src="../../../assets/icones/wallet(1).png" alt=''/>Wallet</Link></div>
                    <div className="link"><Link className='link-nav-menu' to='/profile'><img src="../../../assets/icones/user(1).png" alt=''/>Profile</Link></div>
                    <div className="link"><Link className='link-nav-menu' to='/settings'><img src="../../../assets/icones/settings(1).png" alt=''/>Settings</Link></div>
                    <div className="link"><Link className='link-nav-menu' to='/activity'><img src="../../../assets/icones/message(1).png" alt=''/>Activity</Link></div>
                </nav>
            </div>
        </div>
    );
}