import './App.css';

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

function PaginaInicial() {
  return (
    <div>
      <Topo />

      <main>
        <section>
          <div class="banner">
            <h1>SORVETE ARTESANAL</h1>
          </div>
        </section>
        <section>
          <figure>
            <img src="../../assets/banner-sabores.jpg" alt="sorvete de perto"/>
          </figure>
          <div class="textos">
            <h2>NOSSOS SABORES</h2>
            <span>Novos e deliciosos!</span>
            <p>Sorvete bom é aquele feito com os melhores ingrediente! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
            </p>
          </div>
        </section>
        <section>
          <div class="textos">
            <h2>NOSSOS EVENTOS</h2>
            <span>Delicias com sorvete!</span>
            <p>Mais do que uma sorveteria, uma extensão de sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
          </div>
          <figure>
            <img src="../../assets/eventos-image.jpg" alt="evento sorvete"/>
          </figure>
        </section>

        <section>
          <figure>
            <img src="../../assets/sobre-image.jpg" alt="pessoas com sorvete"/>
          </figure>
          <div class="textos">
            <h2>SOBRE NÓS</h2>
            <span>Alegria em cada casquinha!</span>
            <p>Venha tomar o melhor sorvete da regihão aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
          </div>
        </section>

      </main>

      <Rodape />
    </div>
  );
}

export default PaginaInicial;
