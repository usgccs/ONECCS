import { useEffect, useState } from "react";
import "./ImageCarouselCH.css";

function ImageCarouselCH({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
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
        <div id="image-holder">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.fields.file.url}
              className={`image-carousel-image ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
              alt={`Image ${index + 1}`}
            />
          ))}
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

export default ImageCarouselCH;
