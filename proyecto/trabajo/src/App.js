import './App.css';
import Navbar from './Componentes/navbarSW';
import Carrusel from './Componentes/carrusel';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <Carrusel></Carrusel>
      <p>Hola</p>
    </div>

  );
}

export default App;