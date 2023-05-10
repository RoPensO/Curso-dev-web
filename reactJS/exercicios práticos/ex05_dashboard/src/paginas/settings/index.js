import Menu from "../../componentes/menu";
import Pesquisa from "../../componentes/pesquisa";
import InfosLateral from "../../componentes/infosLateral";

export default function Settings() {
    return(
        <div className="conteudo">
            <Menu/>
            <div>
                <Pesquisa/>
                <h1>settings</h1>
            </div>
            <InfosLateral/>
        </div>
    );
}