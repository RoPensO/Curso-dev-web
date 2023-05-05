import './estilo.css';

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape'

function PaginaSabores() {
  return (
    <div className="App">
      <Topo/>
      
      <section>
        <div class="banner-sabores">
          <h1>NOSSOS SABORES</h1>
        </div>
      </section>

      <section>
        <div class="sabores-full limite">
          <h2>SABORES DE SORVETE</h2>
          <div class="sabores-cards">
            <div class="card">
              <img src="../assets/sabor-oreo.png" alt="Bola de sorvete Oreo" />
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>
            <div class="card">
              <img src="../assets/sabor-pistache.png" alt="Bola sorvete de pistache" />
              <h3>Sorvete Piistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>
            <div class="card">
              <img src="../assets/sabor-cookies-avela.png" alt="Bola sorvete Coockie & Avelã" />
              <h3>Sorvete Coockies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>
            <div class="card">
              <img src="../assets/sorbet-kiwi.png" alt="Bola sorvete Kiwi" />
              <h3>Sorvete de Kiwi</h3>
              <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
            </div>
            <div class="card">
              <img src="../assets/sorbet-morango.png" alt="Bola sorvete morango" />
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>
            <div class="card">
              <img src="../assets/sorbet-limao.png" alt="Bola sorvete Limão Siciliano" />
              <h3>Sorvete de Limão Siciliano</h3>
              <p>O incrível sorvete gourmet de limão siciliano vai te encontrar.</p>
            </div>
          </div>
        </div>
      </section>
      <Rodape/>
    </div>
  );
}

export default PaginaSabores;
