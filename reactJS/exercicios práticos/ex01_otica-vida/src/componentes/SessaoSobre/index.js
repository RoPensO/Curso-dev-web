import './estilo.css'

function Sobre() {
    return (
      <section id="Sobre">

        <div className="sobre limite">
          <h3>QUEM SOMOS NÓS?</h3>
          <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

            <div className="box-sobre">
              
              <div className="box">
                <img src="assets/imagens/loja.png" alt="pessoa pegando uma caixa de remédio da prateleira" />
              </div>
              <div className="box">
                <div className="texto">
                  <h2>Nossas Filiais</h2>
                  <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
              </div>
              <div className="box">
                <div className="texto">
                  <h2>Atendimento flexível</h2>
                  <p>Nossa equipe possui é treinada para te atender</p>
                </div>
              </div>
              <div className="box">
                <img src="assets/imagens/atendimento.png" alt="Médica entregando remédio para o cliente" />
              </div>
              
            </div>

        </div>
      </section>
    );
  }
  
  export default Sobre;