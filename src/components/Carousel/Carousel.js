import { useState } from 'react';
import gallery2 from "../../assets/img/gallery2.jpg";
import gallery3 from "../../assets/img/gallery3.jpg";
import gallery5 from "../../assets/img/gallery5.jpg";
import gallery6 from "../../assets/img/gallery6.jpg";
import "./Carousel.scss";

const Carousel = () => {
    const images = [gallery2, gallery3, gallery5, gallery6, gallery6, gallery6, gallery6, gallery6, gallery6, gallery6, gallery6, gallery6]; // Update with your imported images

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    // Group images into rows of 6
    const rowsOfThumbnails = [];
    for (let i = 0; i < images.length; i += 6) {
        const row = images.slice(i, i + 6);
        rowsOfThumbnails.push(row);
    }

    return (
        <div className="carousel-container">
            <img
                className="carousel-image"
                src={images[currentIndex]}
                alt={`${currentIndex + 1}`}
            />

            <div className="thumbnails">
                {rowsOfThumbnails.map((row, rowIndex) => (
                    <div className="thumbnail-row" key={rowIndex}>
                        {row.map((image, columnIndex) => (
                            <img
                                key={columnIndex}
                                className={`thumbnail ${currentIndex === rowIndex * 6 + columnIndex ? 'active' : ''}`}
                                src={image}
                                alt={`${rowIndex * 6 + columnIndex + 1}`}
                                onClick={() => handleThumbnailClick(rowIndex * 6 + columnIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;