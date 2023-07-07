
import './App.css';
import Navbar from './Componentes/navbarSW';
import Carrusel from './Componentes/carrusel';
import Footer from './Componentes/Footer';
import CardCarousel from './Componentes/cards';
import CardCarousel2 from './Componentes/cards2';
import CardCarousel3 from './Componentes/cards3';
import CarouselWithCards from './Componentes/card';
function App() {
  return (
    <div className="App" style={{position: "relative"}}>
      <header>
        <Navbar></Navbar>
        
      </header>
      <main >
       
        <Carrusel></Carrusel>
        <hr class="linea"></hr>
        <CarouselWithCards></CarouselWithCards>
        <CardCarousel></CardCarousel>
        <CardCarousel2></CardCarousel2>
        <CardCarousel3></CardCarousel3>
        
      </main>
      
      <footer>
        <Footer></Footer>
        
      </footer> 
     
    </div>

  );
}

export default App;