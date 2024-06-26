import { useEffect } from "react";
import React, { useState } from "react";
import "./ImageCarousel.css";

function ImageCarousel({ images }) {

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
    <div className="flex-1 bg-white items-center justify-center">
      <div className="flex items-center justify-center px-5 py-10 xl:px-32 xl:py-10 w-full h-[540px] xl:w-full bg-[#243E39]">
        <div id="image-holder" className="w-full max-w-xl sm:max-w-2xl lg:max-w-4xl max-h-max">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.fields.file.url}
              className={`w-full h-full object-cover absolute transition-all duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="dot-indicator mt-10">
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