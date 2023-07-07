import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import './card.css';
const CarouselWithCards = () => {
  return (
    <Carousel indicators={false}>

      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://lumiere-a.akamaihd.net/v1/images/star-wars-insider-219-article-feature_8a550828.jpeg?region=0,0,1600,900&width=960"
          alt="Imagen 3"
        />
        <Carousel.Caption>
          <div className="carousel-text">
            <Carousel.Caption>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </Carousel.Caption>
          </div>
          <div className="carousel-button">
            <Button variant="warning" className="rounded-pill" >
              READ MORE
            </Button>
          </div>
          <div className="row">
            <div className="col">
              <Card className="card bg-dark text-white card-custom ">
                <Card.Img className="card-image2" variant="top" src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-date-featured_49f1d5aa.jpeg?region=0,0,1600,900&width=960" />
                <Card.Body>
                  <Card.Text><p className="card-description">StarWars.com Fan Spotlight:</p></Card.Text>
                  
                </Card.Body>
              </Card>

            </div>
            <div className="col">
              <Card className="card bg-dark text-white card-custom ">
                <Card.Img className="card-image2" variant="top" src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-swce-articlefeat_bcc6bfbd.jpeg?region=0,0,1600,900&width=960" />
                <Card.Body>
                  <Card.Text><p className="card-description">StarWars.com Fan Spotlight: </p></Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="card bg-dark text-white card-custom ">
                <Card.Img className="card-image2" variant="top" src="https://lumiere-a.akamaihd.net/v1/images/st-recap-swce-articlefeat_a1e419b9.jpeg?region=0,0,1280,720&width=960" />
                <Card.Body>
                  <Card.Text><p className="card-description">StarWars.com Fan Spotlight: </p></Card.Text>
                 
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lumiere-a.akamaihd.net/v1/images/star-wars-insider-219-article-feature_8a550828.jpeg?region=0,0,1600,900&width=960"
          alt="Imagen 3"
        />
        <Carousel.Caption>
          <div className="carousel-text">
            <Carousel.Caption>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </Carousel.Caption>
          </div>
          <div className="carousel-button">
            <Button variant="warning" className="rounded-pill">
              READ MORE
            </Button>
          </div>
          <div className="row">
            <div className="col">
              <Card className="card bg-dark text-white card-custom ">
                <Card.Img className="card-image2" variant="top" src="https://lumiere-a.akamaihd.net/v1/images/swce-bignews-mon_fd3423e1.jpeg?region=0,0,1280,720&width=960" />
                <Card.Body>
                  <Card.Text><p className="card-description">StarWars.com Fan Spotlight: </p></Card.Text>
                 
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="card bg-dark text-white card-custom ">
                <Card.Img className="card-image2" variant="top" src="https://lumiere-a.akamaihd.net/v1/images/micro-galaxy-wave-v-swce-articlefeat-1600x900_c58fade7.jpeg?region=0,0,1600,900&width=960" />
                <Card.Body>
                  <Card.Text><p className="card-description">StarWars.com Fan Spotlight: </p></Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="card bg-dark text-white card-custom ">
                <Card.Img className="card-image2" variant="top" src="https://lumiere-a.akamaihd.net/v1/images/vw-the-mandalorian-interview-article-feature_95c706d2.jpeg?region=0,0,1600,900&width=960" />
                <Card.Body>
                  <Card.Text><p className="card-description">StarWars.com Fan Spotlight: </p></Card.Text>
              
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselWithCards;