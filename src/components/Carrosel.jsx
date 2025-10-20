// src/components/Carrosel.jsx

import React, { useRef, useState, useEffect } from 'react'; 
import styles from './Carrosel.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../assets/carrosel1.jpeg';
import img2 from '../assets/carrosel2.jpeg';
import img3 from '../assets/carrosel3.jpg';
import img4 from '../assets/carrosel4.jpg';
import img5 from '../assets/carrosel5.jpg';
import img6 from '../assets/carrosel6.jpg';
import img7 from '../assets/carrosel7.jpg';
import img8 from '../assets/carrosel8.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Carrosel() {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const paginationRef = useRef(null);

    const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        setSwiperReady(true);
    }, []);


    return (
        <section className={styles.carroselSection}>
            <h2 className={styles.title}>
                GERAÇÃO EXTRAORDINÁRIA
            </h2>
            
            {swiperReady && (
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    pagination={{
                        el: paginationRef.current,
                        clickable: true,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    }}

                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 40 },
                        1024: { slidesPerView: 3, spaceBetween: 50 },
                    }}
                    className={styles.mySwiper}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className={styles.slide}>
                            <img src={image} alt={`Foto da galeria ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            <div className={styles.navigationControls}>
                <div ref={navigationPrevRef} className={styles.prevButton}>&#10094;</div>
                <div ref={paginationRef} className={styles.pagination}></div>
                <div ref={navigationNextRef} className={styles.nextButton}>&#10095;</div>
            </div>

            <p className={styles.swipeHint}>Arraste para o lado</p>
        </section>
    )
}