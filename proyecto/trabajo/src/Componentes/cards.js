import React from 'react';
import { Carousel, Card, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';
const CardCarousel = () => {
  return (
    <div className="carousel-container">
      <br></br>
      <p class="titulos">Latest News + Features</p>
      <hr class="linea"></hr>
      <Carousel indicators={false} class="contenedor">
        <CarouselItem>

          <div className="row">

            <div className="col">
              <Card className="card bg-dark text-white ">
                <Card.Img className="card-image" src="https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg" />
                <br></br>
                <Card.Text><p className="card-description">StarWars.com Fan Spotlight: Keith Yarde Is a Star Wars Fan Like His Father, Kerwin, Before</p></Card.Text>
                <div><div className="muesca">
                  <div className="muesca-diagonal-derecha"></div>
                  <div className="muesca-diagonal-izquierda"></div>
                </div></div>
              </Card>

            </div>
            <div className="col" >
              <Card className="card bg-dark text-white w-200 h-300">

                <Card.Img class="card-image " src="https://lumiere-a.akamaihd.net/v1/images/star-wars-summer-viewing-guide-_article-feature_f8bc71df.jpeg?region=0,0,1600,900&width=960" />
                <br></br>
                <Card.Text><p class="card-description">From the Pages of Star Wars Insider: Behind the Scenes of The Bad Batch </p>
                </Card.Text>
                <div><div className="muesca">
                  <div className="muesca-diagonal-derecha"></div>
                  <div className="muesca-diagonal-izquierda"></div>
                </div></div>
              </Card>
            </div>
            <div className="col">
              <Card className="card bg-dark text-white w-250 h-350">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/high-republic-adventures-featured_9a4ae723.jpeg?region=0,0,1536,864&width=960" />
                <br></br>
                <Card.Text><p class="card-description">Marvel’s Star Wars: The Mandalorian – Season 2 #1 Kicks Off with a Brawl — Exclusive Preview </p></Card.Text>
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

              <Card className="card bg-dark text-white w-250 h-350 ">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/swce23-online-store-featured-all_f399cba3.jpeg?region=0,0,1536,864&width=960" />
                <br></br>
                <Card.Text><p class="card-description">StarWars.com Fan Spotlight: Keith Yarde Is a Star Wars Fan Like His Father, Kerwin, Before </p></Card.Text>
                <div><div className="muesca">
                  <div className="muesca-diagonal-derecha"></div>
                  <div className="muesca-diagonal-izquierda"></div>
                </div></div>
              </Card>

            </div>
            <div className="col">
              <Card className="card bg-dark text-white w-250 h-350">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/marvel-september-solicits_article-feature_85adaac1.jpeg?region=0,0,1600,900&width=960" />
                <br></br>
                <Card.Text><p class="card-description">From the Pages of Star Wars Insider: Behind the Scenes of The Bad Batch  </p></Card.Text>
                <div><div className="muesca">
                  <div className="muesca-diagonal-derecha"></div>
                  <div className="muesca-diagonal-izquierda"></div>
                </div></div>
              </Card>
            </div>
            <div className="col">
              <Card className="card bg-dark text-white w-250 h-350 ">

                <Card.Img class="card-image" src="https://lumiere-a.akamaihd.net/v1/images/marvel-obi-wan-kenobi-series-comic-reveal_article-featu_954e6782.jpeg?region=0,0,1600,900&width=960" />
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

export default CardCarousel;