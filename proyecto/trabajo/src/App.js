
import './App.css';
import Navbar from './Componentes/navbarSW';
import Carrusel from './Componentes/carrusel';
import Footer from './Componentes/Footer';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        *<Carrusel></Carrusel>
      </main>

      <footer>
        <Footer></Footer>
      </footer>

    </div>

  );
}

export default App;