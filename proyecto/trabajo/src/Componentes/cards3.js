import React from 'react';
import { Carousel, Card, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from './carrusel';
import './card.css';
const CardCarousel3 = () => {
  return (
    <div className="carousel-container">
      <br></br>
      <p class="titulos">Explore More</p>
      <hr class="linea"></hr>
      <Carousel indicators={false} class="contenedor">
        <CarouselItem>
          <div className="row">
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400" >

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/star-wars-insider-219-article-feature_8a550828.jpeg?region=0%2C0%2C1600%2C900" />
                <br></br>
                <Card.Text><p class="card-description">StarWars.com Fan Spotlight: Keith Yarde Is a Star Wars Fan Like His Father, Kerwin, Before </p></Card.Text>
                <div><div className="muesca">
                  <div className="muesca-diagonal-derecha"></div>
                  <div className="muesca-diagonal-izquierda"></div>
                </div></div>
              </Card>

            </div>
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/fan-spotlight-father-son-galaxy_840013ac.jpeg?region=0%2C0%2C1536%2C864" />
                <br></br>
                <Card.Text><p class="card-description">From the Pages of Star Wars Insider: Behind the Scenes of The Bad Batch </p></Card.Text>
                <div><div className="muesca">
                  <div className="muesca-diagonal-derecha"></div>
                  <div className="muesca-diagonal-izquierda"></div>
                </div></div>
              </Card>
            </div>
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/marvel-the-mandalorian-season-2-issue-1_article-feature_5342792e.jpeg?region=0%2C0%2C1600%2C900" alt="Descripción de la imagen" />
                <br></br>
                <Card.Text><p class="card-description">Marvel’s Star Wars: The Mandalorian – Season 2 #1 Kicks Off with a Brawl — Exclusive Preview  </p></Card.Text>
                <div><div className="muesca">
                  <div className="muesca-diagonal-derecha"></div>
                  <div className="muesca-diagonal-izquierda"></div>
                </div></div>
              </Card>
            </div>
          </div>

        </CarouselItem>
        <CarouselItem>

          <div className="row">
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/visions-screechers-reach-interview-sashdouble-feature_b70243fd.jpeg?region=0%2C0%2C1280%2C720" alt="Descripción de la imagen" />
                <br></br>
                <Card.Text><p class="card-description">StarWars.com Fan Spotlight: Keith Yarde Is a Star Wars Fan Like His Father, Kerwin, Before </p></Card.Text>
                <div><div className="muesca">
                  <div className="muesca-diagonal-derecha"></div>
                  <div className="muesca-diagonal-izquierda"></div>
                </div></div>
              </Card>
            </div>
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art_article-feature_73a536a1.jpeg?region=0%2C0%2C1600%2C900" alt="Descripción de la imagen" />
                <br></br>
                <Card.Text><p class="card-description">From the Pages of Star Wars Insider: Behind the Scenes of The Bad Batch  </p></Card.Text>
                <div><div className="muesca">
                  <div className="muesca-diagonal-derecha"></div>
                  <div className="muesca-diagonal-izquierda"></div>
                </div></div>
              </Card>
            </div>
            <div className="col">
              <Card className="card bg-dark text-white w-300 h-400 ">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/visions-highlights-aaus-song_article-feature_b0361b82.jpeg?region=0%2C0%2C1600%2C900" alt="Descripción de la imagen" />
                <br></br>
                <Card.Text><p class="card-description">Marvel’s Star Wars: The Mandalorian – Season 2 #1 Kicks Off with a Brawl — Exclusive Preview  </p></Card.Text>
                <div><div className="muesca">
                  <div className="muesca-diagonal-derecha"></div>
                  <div className="muesca-diagonal-izquierda"></div>
                </div></div>
              </Card>
            </div>
          </div>

        </CarouselItem>

      </Carousel>
    </div>
  );
};

export default CardCarousel3;