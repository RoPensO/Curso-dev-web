import './homepage.css';
 
function HomePage() {
    return (
        <div>
            <section>
                <div class="cards limite">
                    <div class="card">
                        <figure>
                            <img src="imagens/coxinha.jpg" alt="Coxinha Gourmet" />
                        </figure>
                        <div class="cards-texto">
                            <h2>Coxinha Gourmet</h2>
                            <p>A coxinha mais saborosa de frango com catupiry</p>
                            <span>Lanche</span>
                        </div>
                        <div class="preco">
                            <p>R$10,00</p>
                            <img src="imagens/carrinho.png" alt="Carrinho" />
                        </div>
                    </div>
        
                    <div class="card">
                        <figure>
                            <img src="imagens/mousse.png" alt="Mousse de Morango" />
                        </figure>
                        <div class="cards-texto">
                            <h2>Mousse de Morango</h2>
                            <p>Uma sobremesa muito saborosa para o pós-refeição</p>
                            <span>Sobremesa</span>
                        </div>
                        <div class="preco">
                            <p>R$9,50</p>
                            <img src="imagens/carrinho.png" alt="Carrinho" />
                        </div>
                    </div>
        
                    <div class="card">
                        <figure>
                            <img src="imagens/hamburger-artesanal.jpg" alt="Hamburguer Artesanal" />
                        </figure>
                        <div class="cards-texto">
                            <h2>Hamburguer Artesanal</h2>
                            <p>Excelente hamburguer artesanal feito com a melhor carne Angus</p>
                            <span>Lanche</span>
                        </div>
                        <div class="preco">
                            <p>R$25,00</p>
                            <img src="imagens/carrinho.png" alt="Carrinho" />
                        </div>
                    </div>
        
                    <div class="card">
                        <figure>
                            <img src="imagens/pizza.png" alt="Pizza Vegana" />
                        </figure>
                        <div class="cards-texto">
                            <h2>Pizza vegana</h2>
                            <p>Esse é um dos sabores de pizza mais pedisos por quem é vegano</p>
                            <span>Massas</span>
                        </div>
                        <div class="preco">
                            <p>R$55,00</p>
                            <img src="imagens/carrinho.png" alt="Carrinho" />
                        </div>
                    </div>
        
                    <div class="card">
                        <figure>
                            <img src="imagens/limonada.jpg" alt="Limonada Suave" />
                        </figure>
                        <div class="cards-texto">
                            <h2>Limonada suave</h2>
                            <p>A limonada é um suco refrescante e ideal para dias de instenso calor</p>
                            <span>Bebida</span>
                        </div>
                        <div class="preco">
                            <p>R$5,00</p>
                            <img src="imagens/carrinho.png" alt="Carrinho" />
                        </div>
                    </div>
        
                    <div class="card">
                        <figure>
                            <img src="imagens/suco-de-laranja.jpg" alt="Suco de Laranja" />
                        </figure>
                        <div class="cards-texto">
                            <h2>Suco de laranja</h2>
                            <p>É um suco bastante popular e que vai bem com qualquer lanche</p>
                            <span>Bebida</span>
                        </div>
                        <div class="preco">
                            <p>R$5,00</p>
                            <img src="imagens/carrinho.png" alt="Carrinho" />
                        </div>
                    </div>
        
                </div>
            </section>
        </div>
    );
}

export default HomePage;