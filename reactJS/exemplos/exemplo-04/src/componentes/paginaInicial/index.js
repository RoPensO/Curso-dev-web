import React, {useState} from 'react';
import './estilo.css';

function PaginaInicial() {
    const [ numeroAleatorio, setNumeroAleatorio] = useState(1);

    function gerarNumero() {
         const novoNumero =  Math.floor(Math.random() * (100-1)+1);
         setNumeroAleatorio(novoNumero);
    }
    
    return (
        <div className="box-inicial">
            <div className="conteudo-centralizado">
                <h2>Número Aleatório</h2>
                <h1>{numeroAleatorio}</h1>

                <div className="area-botao">
                    <label>Clique no botão para gerar um número aleatório</label>

                    <button onClick={gerarNumero}>Gerar número</button>
               </div>
             </div>
        </div>
    );
}

export default PaginaInicial;
