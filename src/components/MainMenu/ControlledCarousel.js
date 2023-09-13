import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { data } from '../../helpers/carouselPictures';
import styles from './mainMenu.module.css';
export const  ControlledCarousel = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item key={i}>        
        <img
          className="d-block w-100"
          src={slide.imageUrl}
          alt="slider"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
    </Carousel>
  );
}
