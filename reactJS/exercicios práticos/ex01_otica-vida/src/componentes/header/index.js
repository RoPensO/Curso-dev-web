import "./estilo.css"

function Header() {
  return (
    <header>
      <div className="limite">
        
        <img src="assets/imagens/logo.png" alt="imagem óculos a esquerda e nome da ótica a esquerda" />

        <nav>
          <a href="#Produtos">PRODUTOS</a>
          <a href="#Sobre">SOBRE</a>
          <a href="#Contato">CONTATO</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;