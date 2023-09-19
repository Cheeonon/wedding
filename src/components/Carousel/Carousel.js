import { useState } from 'react';
// import gallery1 from "../../assets/img/gallery1.jpg";
import gallery2 from "../../assets/img/gallery2.jpg";
import gallery3 from "../../assets/img/gallery3.jpg";
// import gallery4 from "../../assets/img/gallery4.jpg";
import gallery5 from "../../assets/img/gallery5.jpg";
import gallery6 from "../../assets/img/gallery6.jpg";
import left from "../../assets/img/left.png";
import right from "../../assets/img/right.png";
import "./Carousel.scss";

const Carousel = () => {

    const images = [gallery2, gallery3, gallery5, gallery6]; // Update with your imported images

    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };

      const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
      };

  return (
     <div className="carousel-container">
      
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      
      
       <div className="thumbnails">
       <button className="carousel-button left" onClick={prevSlide}>
        <img src={left} alt="left" className="carousel-button--left" />
      </button>
        {images.map((image, index) => (
          <img
            key={index}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
         <button className="carousel-button right" onClick={nextSlide}>
        <img src={right} alt="right" className="carousel-button--right" />
      </button>
      </div>
     
    </div>
  )
}

export default Carousel