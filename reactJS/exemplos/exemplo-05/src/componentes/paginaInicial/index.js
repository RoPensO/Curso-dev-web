import { useState } from 'react';
import './estilo.css';

function PaginaInicial() {

    const [ novoTexto, setNovoTexto] = useState()

    function alterarTexto() {
        setNovoTexto('Olá Mundo! =)')
    }

    return (
        <div className="inicial">
            <div className="box-centro">
                <div className="area-texto">
                    <h2>{novoTexto}</h2>
                </div>
                <div className="area-botao">
                    <label>Clique no botão para ver o texto</label>
                    <button onClick={alterarTexto}>Mostrar Texto</button>
                </div>
            </div>
        </div>
    );
}

export default PaginaInicial;
