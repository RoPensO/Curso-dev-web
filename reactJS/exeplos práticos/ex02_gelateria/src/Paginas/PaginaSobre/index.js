import './estilo.css';

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

function PaginaSobre() {
  return (
    <div className="App">
      <Topo/>
      
      <section>
        <div class="banner-sobre">
          <h1>A GELATERIA</h1>
        </div>
      </section>

      <section>
        <div class="sobre-nos">
          <h2>Sobre Nós</h2>
          <span>Nós simplesmente amamos sorteve!</span>
          <div class="sobre-textos limite">
            <p>Somos uma empresa apaixonada pelo que faz. Colcoamos amor em cada sorvete produzido.Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
            <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para a sua resideência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas, e eventos empresariasi. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atencimento e os melhores produtos para você fazer a sua festa mais saborosa com o melhor sorvete da cidade.</p>
          </div>
          <div class="sobre-fotos">
            <figure><img src="../../assets/sobre-image.jpg" alt="Pessoas com sorvete" /></figure>
            <figure><img src="../../assets/sorveteria.jpg" alt="Sorveteria" /></figure>
          </div>
        </div>
      </section>

      <Rodape/>
    </div>
  );
}

export default PaginaSobre;
