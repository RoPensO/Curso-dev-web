import Topo from "../../componentes/Topo/topo";
import Rodape from "../../componentes/Rodape/rodape";

import './preco.css';

function Precos() {
    return (
        <div>
            <Topo/>

            <div class="bg">
                {/* tabela */}
                <div class="limite">
                    <table class="tabela-preco">
                        <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <div class="titulo-tabela">
                                        <p>PESSOAL</p>
                                        <h3>GRÁTIS</h3>
                                    </div>
                                </th>
                                <th>
                                    <div class="titulo-tabela">
                                        <p>PROFISSIONAL</p>
                                        <h3>R$29</h3>
                                    </div>
                                </th>
                                <th>
                                    <div class="titulo-tabela">
                                        <p>EMPRESARIAL</p>
                                        <h3>R$59</h3>
                                    </div>
                                </th>
                                <th>
                                    <div class="titulo-tabela">
                                        <p>BIG TECH</p>
                                        <h3>R$99</h3>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MONITORAMENTO DE REDE</td>
                                <td>3 REDES</td>
                                <td>10 REDES</td>
                                <td>20 REDES</td>
                                <td>50 REDES</td>
                            </tr>
                            <tr>
                                <td>DASHBOARD</td>
                                <td>1 DASHBOARD</td>
                                <td>5 DASHBOARDS</td>
                                <td>10 DASHBOARDS</td>
                                <td>25 DASHBOARDS</td>
                            </tr>
                            <tr>
                                <td>USUÁRIOS</td>
                                <td>1 USUÁRIO</td>
                                <td>5 USUÁRIOS</td>
                                <td>10 USUÁRIOS</td>
                                <td>25 USUÁRIOS</td>
                            </tr>
                            <tr>
                                <td>RELATÓRIO DE ATUALIZAÇÃO</td>
                                <td>TODA HORA</td>
                                <td>A CADA 30 MINUTOS</td>
                                <td>QUASE EM TEMPO REAL</td>
                                <td>TEMPO REAL*</td>
                            </tr>
                            <tr>
                                <td>RELATÓRIO DE EMAILS</td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                            </tr>
                            <tr>
                                <td>TRANSAÇÃO ILIMITADAS</td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                            </tr>
                            <tr>
                                <td>RASTREADOR DE PAGAMENTO</td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                            </tr>
                            <tr>
                                <td>EXPORTAÇÃO DE DADOS</td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                            </tr>
                            <tr>
                                <td>CONVERSOR DE MOEDA</td>
                                <td></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                            </tr>
                            <tr>
                                <td>ACESSO A API</td>
                                <td></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                            </tr>
                            <tr>
                                <td>RESTRIÇÃO DE IP</td>
                                <td></td>
                                <td></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                            </tr>
                            <tr>
                                <td>FEED PERSONALIZADO</td>
                                <td></td>
                                <td></td>
                                <td><div class="ponto"></div></td>
                                <td><div class="ponto"></div></td>
                            </tr>
                            <tr>
                                <td>LIMITE DE IMPORTAÇÃO DE DADOS</td>
                                <td>ÚLTIMO ANO</td>
                                <td>ÚLTIMOS 2 ANOS</td>
                                <td>ÚLTIMOS 3 ANOS</td>
                                <td>ÚLTIMOS 3 ANOS</td>
                            </tr>
                            <tr>
                                <td>RETENÇÃO DE DADOS</td>
                                <td>TEMPO DE VIDA</td>
                                <td>TEMPO DE VIDA</td>
                                <td>TEMPO DE VIDA</td>
                                <td>TEMPO DE VIDA</td>
                            </tr>
                            <tr>
                                <td>SUPORTE</td>
                                <td>EMAIL</td>
                                <td>EMAIL & CHAT</td>
                                <td>EMAIL & CHAT</td>
                                <td>EMAIL, CHAT & VOICE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Rodape/>
        </div>
    );
}

export default Precos;