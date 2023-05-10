import Menu from "../../componentes/menu";
import Pesquisa from "../../componentes/pesquisa";
import InfosLateral from "../../componentes/infosLateral";

import './homePage.css'

export default function Home() {
    return(
        <div className="conteudo">
            <Menu/>
            <div>
                <Pesquisa/>
                <h1>Home</h1>
            </div>
            <InfosLateral/>
        </div>
    );
}