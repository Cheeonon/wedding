import { useState } from 'react';
import gallery2 from "../../assets/img/gallery2.jpg";
import gallery3 from "../../assets/img/gallery3.jpg";
import gallery5 from "../../assets/img/gallery5.jpg";
import gallery6 from "../../assets/img/gallery6.jpg";
import "./Carousel.scss";

const Carousel = () => {

    const images = [gallery2, gallery3, gallery5, gallery6, gallery6, gallery6]; // Update with your imported images

    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
      };

  return (
     <div className="carousel-container">
      
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt={`${currentIndex + 1}`}
      />
      
      
       <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            src={image}
            alt={`${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
     
    </div>
  )
}

export default Carousel