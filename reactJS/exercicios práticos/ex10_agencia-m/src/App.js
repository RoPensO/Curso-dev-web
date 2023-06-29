import './App.css';

import Topo from './componentes/topo';
import Banner from './componentes/banner';
import Experiencias from './componentes/experiencias';
import Rodape from './componentes/rodape';

function App() {
  return (
    <div className="App">
      <Topo/>
      <Banner/>
      <Experiencias/>
      <Rodape/>
    </div>
  );
}

export default App;
