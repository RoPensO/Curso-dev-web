/* eslint-disable jsx-a11y/alt-text */


function Contato() {
    return (
      <section>
        <div className="contato">
            <h2>Fale conosco</h2>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

            <div className="box-contato">
                <h3>Contato</h3>
                <div className="box-contato-txt">
                    <img src="assets/imagens/local.png" />
                    <p>Nova Iguaçu, RJ</p>
                </div>
                <div className="box-contato-txt">
                    <img src="assets/imagens/telefone.png" />
                    <p>(21) 9999-9999</p>
                </div>
                <div className="box-contato-txt">
                    <img src="assets/imagens/email.png" />
                    <p>contato@oticavida.com</p>
                </div>
            </div>

            <div className="box-social">
                <h3>Nossas Redes Sociais</h3>
                <div className="box-contato-txt">
                    <img src="assets/imagens/fb.png" />
                    <p>/OticaVida</p>
                </div>
                <div className="box-contato-txt">
                    <img src="assets/imagens/ig.png" />
                    <p>@oticavidarj</p>
                </div>
                <div className="box-contato-txt">
                    <img src="assets/imagens/tt.png" />
                    <p>@oticavidarj</p>
                </div>
            </div>
        </div>
      </section>
    );
  }
  
  export default Contato;