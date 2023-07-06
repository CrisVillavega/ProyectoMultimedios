import React from 'react';
import { Carousel, Card, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from './carrusel';
const CardCarousel2 = () => {
  return (
    <div className="carousel-container">
         <p class="titulos">Latest Video</p>
         <hr class="linea"></hr>
    <Carousel indicators={false} class="contenedor">
      <CarouselItem>
          <div className="row">
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400" >

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/ffc-bottom-slider_6666c49b.jpeg?region=0,0,1536,864&width=480" />
                <Card.Text><p class="card-description">StarWars.com Fan Spotlight: Keith Yarde Is a Star Wars Fan Like His Father, Kerwin, Before </p></Card.Text>

              </Card>

            </div>
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/bottom-slider-logos_5d5563d4.jpeg?region=0,0,1536,864&width=480" />
                <Card.Text><p class="card-description">From the Pages of Star Wars Insider: Behind the Scenes of The Bad Batch </p></Card.Text>

              </Card>
            </div>
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/franchise-slider-swce23_5c8c2aed.jpeg?region=0,0,1536,864&width=480" alt="Descripción de la imagen" />
                <Card.Text><p class="card-description">Marvel’s Star Wars: The Mandalorian – Season 2 #1 Kicks Off with a Brawl — Exclusive Preview </p></Card.Text>

              </Card>
            </div>
          </div>
        
      </CarouselItem>
      <CarouselItem>
       
          <div className="row">
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/bobf-franchise-slider_efe95678.jpeg?region=0,0,1536,864&width=480" />
                <Card.Text><p class="card-description">StarWars.com Fan Spotlight: Keith Yarde Is a Star Wars Fan Like His Father, Kerwin, Before  </p></Card.Text>

              </Card>
            </div>
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/0630-featured-primary-1164x647_e1bd3c53.jpeg?region=0,0,1164,647&width=480" />
                <Card.Text><p class="card-description">From the Pages of Star Wars Insider: Behind the Scenes of The Bad Batch  </p></Card.Text>

              </Card>
            </div>
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400 ">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/thr-franchise-slider_6d73dcd2.jpeg?region=0,0,800,420&width=480" alt="Descripción de la imagen" />
                <Card.Text><p class="card-description">Marvel’s Star Wars: The Mandalorian – Season 2 #1 Kicks Off with a Brawl — Exclusive Preview  </p></Card.Text>

              </Card>
            </div>
          </div>
        
      </CarouselItem>
      
    </Carousel>
    </div>
  );
};

export default CardCarousel2;