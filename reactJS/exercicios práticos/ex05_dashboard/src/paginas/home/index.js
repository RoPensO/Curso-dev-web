import Menu from "../../componentes/menu";
import Pesquisa from "../../componentes/pesquisa";
import InfosLateral from "../../componentes/infosLateral";

import './homePage.css'

export default function Home() {
    return(
        <div className="conteudo">
            <Menu/>
            <div className="centro">
                <Pesquisa/>
                <div className="overview">
                    <div className="titulo">
                        <h3>Overview</h3>
                        <img className="icone" src="../../assets/icones/etc.png" alt="" />
                    </div>
                    <div className="container-overview">
                        <div className="box-overview income-outcome">
                            <div className="texto">
                                <span>Income</span>
                                <h3>$15.720</h3>
                            </div>
                            <div className="texto">
                                <span>Outcome</span>
                                <h3>$5.720</h3>
                            </div>
                        </div>
                        <div className="box-overview expenses">
                            <div className="texto-top">
                                <figure>
                                    <img className="icone" src="../../assets/icones/up-graphic-arrows.png" alt="" />
                                </figure>
                                <span>Top expenses</span>
                            </div>
                            <div className="texto">
                                <span>Groceries</span>
                                <h3>$1235.70</h3>
                            </div>
                        </div>
                        <div className="transfer-limit">
                            <div className="box-overview transfer">
                                <div className="texto-top">
                                    <figure>
                                        <img className="icone" src="../../assets/icones/trade.png" alt="" />
                                    </figure>
                                    <span>Free transfer</span>
                                </div>
                                <div className="texto-top">
                                    <h3>28</h3>
                                    <span>/Remains</span>
                                </div>
                            </div>
                            <div className="box-overview limit">
                                <div className="texto">
                                    <h3>70%</h3>
                                    <span>Limit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InfosLateral/>
        </div>
    );
}