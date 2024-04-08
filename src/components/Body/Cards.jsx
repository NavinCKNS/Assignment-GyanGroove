import React from "react";
import Carousel from "./Carousel/Carousel";
import "./cardsStyle.css";
export default function Cards() {
  return (
    <div className="main-container">
      <p className="message">
        Discover Exciting Events Happening Near You - Stay Tuned For Updates!
      </p>
      <p className="message-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti
        rerum totam, accusantium animi laboriosam odio vel modi perspiciatis
        gitagu tagta
      </p>
      <div className="Carousel-container">
        <Carousel />
      </div>
    </div>
  );
}
