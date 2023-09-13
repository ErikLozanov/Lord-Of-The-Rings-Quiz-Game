import styles from './funFacts.module.css';
import { Header } from '../MainMenu/Header';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { funFactsData } from '../../helpers/funFactsCarousel';

export const FunFacts = () => {
     
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <>
    <Header />

       
        <div className={styles.funFactPage}>
    <h1 style={{ marginTop:"50px",fontSize: "60px",textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}>Fun Facts</h1>
            <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}>
      {funFactsData.map((slide, i) => {
        return (
          <Carousel.Item key={i}>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <p className={styles.desc}>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
    </Carousel>
        </div>
    </>
  );
}