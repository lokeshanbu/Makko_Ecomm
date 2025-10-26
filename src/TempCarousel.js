import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css"; // Import CSS for styling

const MyCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel fade indicators={true} controls={true} interval={3000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <img className="d-block w-100" src="spicy/Fiery Sriracha Spice.jpg" alt="Slide 1" />
          <Carousel.Caption>
            <h3>Celebrate</h3>
            <h2>Your Family's Health</h2>
            <p>Everyday</p>
            <button className="shop-now-btn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img className="d-block w-100" src="/savory/cream & onion.jpg" alt="Slide 2" />
          <Carousel.Caption>
            <h3>Celebrate</h3>
            <h2>Pure & Natural Products</h2>
            <p>Best for Your Health</p>
            <button className="shop-now-btn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img className="d-block w-100" src="/Sweet/caramel foxnut.jpg" alt="Slide 3" />
          <Carousel.Caption>
            <h3>Celebrate</h3>
            <h2>Organic Goodness</h2>
            <p>For a Better Tomorrow</p>
            <button className="shop-now-btn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 4 */}
        <Carousel.Item>
          <img className="d-block w-100" src="/savory/cream & onion.jpg" alt="Slide 4" />
          <Carousel.Caption>
            <h3>Celebrate</h3>
            <h2>Fresh & Healthy Choices</h2>
            <p>For Your Well-Being</p>
            <button className="shop-now-btn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
