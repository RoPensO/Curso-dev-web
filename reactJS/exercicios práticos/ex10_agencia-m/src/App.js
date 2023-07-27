import './App.css'

import Topo from './componentes/Topo'
import SessaoBanner from './componentes/SessaoBanner'
import SessaoExperiencia from './componentes/SessaoExperiencia'
import Rodape from './componentes/Rodape'

function App() {

    const [ehTemaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <div className="App">
      <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro} />
      <SessaoBanner ehTemaEscuro={ehTemaEscuro} />
      <SessaoExperiencia ehTemaEscuro={ehTemaEscuro} />
      <Rodape ehTemaEscuro={ehTemaEscuro} />
    </div>
  );
}

export default App;
