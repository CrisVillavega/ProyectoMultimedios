
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
      <Carrusel></Carrusel>
      <Footer></Footer>
    </div>

  );
}

export default App;
