import Banner from '../SessaoBanner';
import Produtos from '../SessaoProdutos';
import Sobre from '../SessaoSobre';
import Contato from '../SessaoContatos';

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