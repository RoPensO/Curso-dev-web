import {Link} from 'react-router-dom';

import './menu.css';

export default function Menu() {
    return(
        <div className='Menu'>
            <div className="logo">
                <span>LOGO</span>
            </div>
            <div className="nav-menu">
                <nav>
                    <Link className='link-nav-menu' to='/'><img src="../../../assets/icones/home(1).png" alt=''/>Home</Link>
                    <Link className='link-nav-menu' to='/analytics'><img src="../../../assets/icones/data-analytics(1).png" alt=''/>Analytics</Link>
                    <Link className='link-nav-menu' to='/wallet'><img src="../../../assets/icones/wallet(1).png" alt=''/>Wallet</Link>
                    <Link className='link-nav-menu' to='/profile'><img src="../../../assets/icones/user(1).png" alt=''/>Profile</Link>
                    <Link className='link-nav-menu' to='/settings'><img src="../../../assets/icones/settings(1).png" alt=''/>Settings</Link>
                    <Link className='link-nav-menu' to='/activity'><img src="../../../assets/icones/message(1).png" alt=''/>Activity</Link>
                </nav>
            </div>
        </div>
    );
}