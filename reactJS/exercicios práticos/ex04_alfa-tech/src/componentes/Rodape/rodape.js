import './rodape.css';

function Rodape() {
    return (
        <footer id="contato">
            <div class="logo">
                <img src="assets/logo-icone.png" alt="logo"/>
                <div class="txt">
                    <h3>AlfaTech</h3>
                    <p>Soluções em hospedagem</p>
                </div>
            </div>
            <p>Telefone & Whatsapp: (21) 99999-5555</p>
            <p>E-mail: suporte@alfatech.com</p>
            <p>Endereço: Av Ayrton Senna, 3000 - Barra da Tijuca - Rio de Janeiro</p>
            <p>© AlfaTech - Soluções em hospedagem - Todos os direitos reservados</p>
            <div class="assinatura limite">
                <p>Desenvolvido por <a href="https://ropenso.github.io/portfolio/" target="_blank"><span>RoPensO</span></a></p>
            </div>
        </footer>
    );
}

export default Rodape;