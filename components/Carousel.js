import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  "https://cdn.kastatic.org/ka-perseus-images/8b58582c697c7bc7cc83755edbb599218f8164fe.png",
  "https://www.sandiegobloodbank.org/donateaselfie-assets/images/content/chart-02-desktop.jpg",
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 300,
}

function Carousel() {
  return (
    <div>
      <Fade {...fadeProperties}>
      {
          images.map((each, index) => <img key={index} style={{width: "40%"}} src={each} />)        
        }
      </Fade>
    </div>
  );
}

export default Carousel