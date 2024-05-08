import { useEffect } from "react";
import React, {useState} from "react";
import "./ImageCarousel.css";

function ImageCarousel({images})  {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    console.log("Autoplay started");           //will remove these
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      console.log("Autoplay stopped");
      clearInterval(intervalId);
    };
  }, []);

  const nextImage = () => {
    console.log("Next image");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    console.log("Previous image");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="image-carousel-parent">
    <div className="image-carousel">
      <div className="image-buttons-container">
        <button className="image-buttons" onClick={prevImage}>b</button>
      </div>
      <div id="image-holder">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.fields.file.url}
            alt={`Image ${index + 1}`}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>
      <div className="image-buttons-container">
        <button className="image-buttons" onClick={nextImage}>n</button>
      </div>
    </div>
    <div className="dot-indicator">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? "active" : ""}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}


export default ImageCarousel;