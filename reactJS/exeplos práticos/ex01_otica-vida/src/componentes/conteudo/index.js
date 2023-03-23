import Banner from './banner';
import Produtos from './produtos';
import Sobre from './sobre';
import Contato from './contatos';

function Conteudo() {
    return (
        <main>
            <Banner />
            <Produtos />
            <Sobre />
            <Contato />
        </main>
    )
}

export default Conteudo;