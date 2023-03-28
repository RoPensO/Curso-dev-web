import "./estilo.css"

function Produtos() {
    return (
      <section id="Produtos">
        <div className="produtos limite">
            <h3>Nossos produtos</h3>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            
            <div className="box-oculos">

                <div className="oculos grau">
                    <h2>Óculos de grau</h2>
                    <img src="assets/imagens/oculos01.png" alt="óculos de grau" />
                    <p>R$ 500,00</p>
                </div>
                <div className="oculos transition">
                    <h2>Óculos transition</h2>
                    <img src="assets/imagens/oculos02.png" alt="óculos transition" />
                    <p>R$ 750,00</p>
                </div>
                <div className="oculos sol">
                    <h2>Óculos de sol</h2>
                    <img src="assets/imagens/oculos03.png" alt="óculos de sol" />
                    <p>R$ 700,00</p>
                </div>
                <div className="oculos infantil">
                    <h2>Óculos infantil</h2>
                    <img src="assets/imagens/oculos04.png" alt="óculos infantil" />
                    <p>R$ 500,00</p>
                </div>

            </div>

            <p className="subtitulo">Todos os nossos produtos incluem:</p>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>

        </div>
      </section>
    );
  }
  
  export default Produtos;