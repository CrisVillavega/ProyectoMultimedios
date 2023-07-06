import React, { useState } from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Carrusel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <BootstrapCarousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false}
        interval={3000}
        fade
      >
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src="https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art_article-feature_73a536a1.jpeg?region=0,0,1600,900"
            alt="Imagen 1"
          />
          <div className="carousel-texto">
            <BootstrapCarousel.Caption>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </BootstrapCarousel.Caption>
          </div>
          <div className="carousel-buttons">
            <Button variant="warning" className="rounded-pill">
              READ MORE
            </Button>

            <Button variant="dark" className="rounded-pill text-white" >
              GET TICKETS
            </Button>

          </div>

        </BootstrapCarousel.Item>

        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src="https://i.blogs.es/0b14da/sw-outlaws-cronologia/1366_2000.jpeg"
            alt="Imagen 2"
          />
          <div className="carousel-texto2">
            <BootstrapCarousel.Caption>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </BootstrapCarousel.Caption>
          </div>

          <div className="carousel-buttons2">
            <Button variant="warning" className="rounded-pill" >
              WHATCH NOW
            </Button>

            <Button variant="dark" className="rounded-pill text-white" >
              EXPLORE
            </Button>

          </div>

        </BootstrapCarousel.Item>

        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/FtDQs8qWcAIGgpA?format=jpg&name=large"
            alt="Imagen 3"
          />
          <div className="carousel-texto2">
            <BootstrapCarousel.Caption>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </BootstrapCarousel.Caption>
          </div>
          <div className="carousel-buttons2 ">
            <Button variant="warning" className="rounded-pill" >
              READ MORE
            </Button>



          </div>

        </BootstrapCarousel.Item>

        <BootstrapCarousel.Item>

          <img
            className="d-block w-100"
            src="https://lumiere-a.akamaihd.net/v1/images/swce-bignews-mon_fd3423e1.jpeg?region=0,0,1280,720&width=960"
            alt="Imagen 4"
          />
          <div className="carousel-texto2">
            <BootstrapCarousel.Caption>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </BootstrapCarousel.Caption>
          </div>
          <div className="carousel-buttons2">
            <Button variant="warning" className="rounded-pill" >
              FIND OUT NOW
            </Button>



          </div>

        </BootstrapCarousel.Item>

      </BootstrapCarousel>

      <ol className="carousel-indicators">
        <div
          className={`imagen ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => handleSelect(0)}
        >
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art_article-feature_73a536a1.jpeg?region=0,0,1600,900"
            alt="Imagen 1"
          />
          <div className="image-caption">LUCASFILM CELEBRATES INDY'S US PREMIERE</div>
        </div>

        <div
          className={`imagen ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => handleSelect(1)}
        >
          <img
            src="https://i.blogs.es/0b14da/sw-outlaws-cronologia/1366_2000.jpeg"
            alt="Imagen 2"
          />
          <div className="image-caption">THIS WEEK IN INDIANA JONES</div>
        </div>

        <div
          className={`imagen ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => handleSelect(2)}
        >
          <img
            src="https://pbs.twimg.com/media/FtDQs8qWcAIGgpA?format=jpg&name=large"
            alt="Imagen 3"
          />
          <div className="image-caption">STAR WARS: OUTLAWS REVEALED</div>
        </div>

        <div
          className={`imagen ${activeIndex === 3 ? "active" : ""}`}
          onClick={() => handleSelect(3)}
        >
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/swce-bignews-mon_fd3423e1.jpeg?region=0,0,1280,720&width=960"
            alt="Imagen 4"
          />
          <div className="image-caption">WHICH STAR WARS CHARACTER IS MOST LIKE YOUR DAD?</div>
        </div>
      </ol>


    </>

  );
};

export default Carrusel;










