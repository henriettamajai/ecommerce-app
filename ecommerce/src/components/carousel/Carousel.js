import React from 'react';
import Slider from 'react-slick';
import CategoryCard from '../categoryCard/CategoryCard'; 
import styles from './Carousel.module.css';

const Carousel = ({ items }) => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings} className={styles.cardCarousel}>
                {items.map((item, index) => (
                    <div key={index}>
                        <CategoryCard title={item.title} backgroundImage={item.backgroundImage} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
