import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <div className="topo">
          <p>REACT JS</p>
        </div>
      </header>

      <main>
        <section className='banner'>
          <div className="banner">
            <h1>REACT JS</h1>
            <p>Biblioteca JavaScript para criar SPAs</p>
            <div><a href="https://pt-br.reactjs.org/">Site Oficial</a></div>
          </div>
        </section>

        <section className="requesitos">
          <h1>Requesitos</h1>
          <p>Veja abaixo os requesitos mínimos para aprender React JS</p>

          <div className="cards">
            
            <div className="card">
              <h3>HTML</h3>
              <p>Aprender a estruturar os elementos da página com HTML</p>
            </div>
            
            <div className="card">
              <h3>CSS</h3>
              <p>Aprender a estilizar os elementos da página com CSS</p>
            </div>
            
            <div className="card">
              <h3>JavaScript</h3>
              <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
            </div>
           
          </div>

        </section>
      </main>

      <footer>
        <p>Curso de introdução de React JS</p>
      </footer>

    </div>
  );
}

export default App;
