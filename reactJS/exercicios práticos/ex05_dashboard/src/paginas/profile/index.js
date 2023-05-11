import Menu from "../../componentes/menu";
import Pesquisa from "../../componentes/pesquisa";
import InfosLateral from "../../componentes/infosLateral";

export default function Profile() {
    return(
        <div className="conteudo">
            <Menu/>
            <div className="centro">
                <Pesquisa/>
                <h1>profile</h1>
            </div>
            <InfosLateral/>
        </div>
    );
}