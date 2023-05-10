import './menuLateral.css';

export default function InfosLateral() {
    return (
        <div className="infoLateral">
            <div className="nome-user info-titulo">
                <img className='profile' src="../../assets/pessoas/pessoa1.jpeg" alt=""/>
                <h3>Kainat Yaqoot</h3>
                <img className='icone' src="../../assets/icones/down_arrow.png" alt=""/>
            </div>
            <div className="balanco">
                <div className="info-titulo">
                    <h3>Wallet</h3>
                    <img className='icone' src="../../assets/icones/etc.png" alt=""/>
                </div>
                <div className="info-cartao">
                    <div className="cartao">
                        <h3>VISA</h3>
                        <p>active Balance</p>
                        <h3>$445.720</h3>
                        <p>F A Lexandra</p>
                    </div>
                    <div className="cartao-sombra">
                        <span>+</span>
                    </div>
                </div>
            </div>
            <div className="info-tranferencia">
                    <div className="info-titulo">
                        <h3>Quick Transfer</h3>
                        <img className='icone' src="../../assets/icones/etc.png" alt=""/>
                    </div>
                    <input type="text" name="transfer" placeholder='Account number'/>
                    <button><img className='icone' src="../../assets/icones/enviar.png" alt=""/></button>
                </div>
            <div className="contatos">
                <div className="info-titulo">
                    <h3>Contacts</h3>
                </div>
                <div className="contatos-perfil">
                    <img className='profile' src="../../assets/pessoas/pessoa2.jpeg" alt=""/>
                    <img className='profile' src="../../assets/pessoas/pessoa3.jpeg" alt=""/>
                    <img className='profile' src="../../assets/pessoas/pessoa4.jpeg" alt=""/>
                    <img className='profile' src="../../assets/pessoas/pessoa5.jpeg" alt=""/>
                    <img className='profile' src="../../assets/pessoas/pessoa6.jpeg" alt=""/>
                </div>
            </div>
            <div className="recentes">
                <div className="info-titulo">
                    <h3>Recent</h3>
                    <img className='icone' src="../../assets/icones/down_arrow.png" alt=""/>
                </div>
                <div className="container-contato">
                    <div className="box-contato">
                        <img className='profile' src="../../assets/pessoas/pessoa7.jpeg" alt=""/>
                        <div className="box-contato-texto">
                            <p>Arfia Yassen</p>
                            <p>VISA <span>12344567</span></p>
                        </div>
                    </div>
                    <div className="box-contato">
                        <img className='profile' src="../../assets/pessoas/pessoa8.jpeg" alt=""/>
                        <div className="box-contato-texto">
                            <p>Sunddas Shan</p>
                            <p>MASTER <span>12344567</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}