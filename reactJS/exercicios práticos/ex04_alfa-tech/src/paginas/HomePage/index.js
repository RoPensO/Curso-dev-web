import Topo from "../../componentes/Topo/topo";
import Rodape from "../../componentes/Rodape/rodape";

import './estilo.css';

function HomePage() {
    return (
        <div>
            <Topo/>
            <section class="banner">
                <div class="conteudo-banner limite">
                    <div class="banner-txt">
                        <p>Simples - Fácil de usar - 10x mais rápido</p>
                        <h2>O melhor serviço de hospedagem
                            na web para o seu site.</h2>
                        <p>Obtenha a melhor velocidade para o seu site. Não perca mais clientes por causa de lentidão na sua hospedagem.
                        </p>
                    </div>
                    <div class="banner-img">
                        <img src="assets/imagem-banner.png" alt="imagem banner"/>
                    </div>
                </div>
            </section>

            <section class="anuncio anuncio1">
                <div class="conteudo-anuncio limite">
                    <div class="anuncio-txt">
                        <h2> Hospede o seu site por apenas R$29 por mês</h2>
                        <p> Também temos planos gratuitos. Adquira já o seu.</p>
                    </div>
                    <a href="pagina-precos.html" class="botao1">tabela de preços</a>
                </div>
            </section>

            <section class="informacoes limite" id="informacoes">
                <div class="conteudo-informacoes titulo">
                    <h2>Existem diversos serviços de hospedagem de sites. <br></br> Porque você deve <span>nos escolher?</span></h2>
                    <div class="infos-bloco">
                        <div class="info">
                            <img src="assets/icone-engrenagens.png" alt="configuração"/>
                            <h2>Fácil de configurar</h2>
                            <p>Facilmente configurável em plataformas CMS populares - Wordpress, Joomia ...</p>
                        </div>
                        <div class="info">
                            <img src="assets/cloud-icone.png" alt="nuvem"/>
                            <h2>servidores 100% online</h2>
                            <p>Serviços que operam 100% do tempo para manter o seu site online...</p>
                        </div>
                        <div class="info">
                            <img src="assets/icone-suporte.png" alt="suporte"/>
                            <h2>suporte 24/7</h2>
                            <p>Suporte altamente treinado e especializado em soluções de Cloud ...</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="tabela_planos" id="planos">
                <div class="conteudo-tabela titulo">
                    <h2>Pague <span>somente</span> pelo que for usar. Sem cobranças adicionais!</h2>

                    {/* tabela */}
                    <div class="tabela">
                        <table>
                            <thead>
                                <th>
                                    <h3>pessoal</h3>
                                    <img src="assets/pessoal-icone.png" class="imagem-tabela" alt="Pessoal"/>
                                    <p>Indicado para <br/> uso pessoal</p>
                                </th>
                                <th>
                                    <h3>profissional</h3>
                                    <img src="assets/equipe-icone.png" class="imagem-tabela" alt="profissional"/>
                                    <p>Indicado para uso <br/> profissional de T.I.</p>
                                </th>
                                <th>
                                    <h3>empresarial</h3>
                                    <img src="assets/empresa-icone.png" class="imagem-tabela" alt="empresarial"/>
                                    <p>Indicado para <br/> empresas</p>
                                </th>
                                <th>
                                    <h3>big techs</h3>
                                    <img src="assets/big-tech.png" class="imagem-tabela" alt="big tech"/>
                                    <p>Indicado para <br/> grandes empresas</p>
                                </th>
                                
                            </thead>
                            <tbody class="corpo-tabela">
                                <tr>
                                    <td>1 usuário</td>
                                    <td>10 usuários</td>
                                    <td>25 usuários</td>
                                    <td>50 usuários</td>
                                </tr>
                                <tr>
                                    <td>1 domínio grátis</td>
                                    <td>2 domínio grátis</td>
                                    <td>2 domínio grátis</td>
                                    <td>3 domínio grátis</td>
                                </tr>
                                <tr>
                                    <td>200gb ssd espaço</td>
                                    <td>500gb ssd espaço</td>
                                    <td>1tb ssd espaço</td>
                                    <td>2tb ssd espaço</td>
                                </tr>
                                <tr>
                                    <td>ofertas especiais</td>
                                    <td>ofertas especiais</td>
                                    <td>ofertas especiais</td>
                                    <td>ofertas especiais</td>
                                </tr>
                                <tr>
                                    <td>suporte ilimitado</td>
                                    <td>suporte ilimitado</td>
                                    <td>suporte ilimitado</td>
                                    <td>suporte ilimitado</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="anuncio anuncio2">
                <div class="conteudo-anuncio limite">
                    <div class="anuncio-txt">
                        <h2>Mais de 20.000 pessoas confiam na Spark! <br></br> Seja um deles você também!</h2>
                    </div>
                    <a href="pagina-precos.html" class="botao2">tabela de preços</a>
                </div>
            </section>
            <Rodape/>
        </div>
    );
}

export default HomePage;