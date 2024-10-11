'use client'
import ChannelLayout from '@/components/ChannelLayout';
import Navbar from '@/components/Navbar';
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Carousel.module.css'; // Import custom styles

export default function Main() {

    const swiperRef = useRef(null);


    const [data, setData] = useState('')
    useEffect(() => {

        const fetchData = async () => {

            await displayProfile();


        };

        fetchData();



    }, []);

    const displayProfile = async () => {


        try {

            //   setLoading(true)

            const response = await fetch(`http://localhost:1337/api/swipper-images?populate=*`, {

            });
            const data = await response.json();
            console.log("published-focus area", data);

            setData(data)
            //   setLoading(false)

        } catch (error) {
            console.error('Error fetching buyer data:', error);
        }

    };

    return (
        <div>


            <ChannelLayout />
            <Navbar />

            {/* <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <img src="https://dummyimage.com/400x400" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div> */}



            <div className={styles.carouselWrapper}>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >


                    {data?.data?.map((item, index) => {

                        return (
                            <>
                                <SwiperSlide>
                                    <img src={`http://localhost:1337/${item?.Image[0]?.url}`} alt="Slide 1" className={styles.imageSlider} />


                                    <button className={styles.buttonTags}>{item?.Tags}</button>

                                    <button className={styles.buttonTitle}>{item?.Title}</button>
                                </SwiperSlide>
                            </>
                        )

                    })}


                    {/* 
                    <SwiperSlide>
                        <img src="/images/slide1.jpg" alt="Slide 1" />
                        dcvdsvcs
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/slide2.jpg" alt="Slide 2" />
                        dcdscs dsc ds cd s
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/slide3.jpg" alt="Slide 3" />
                        dscdscdscdsc dsc ds cd sc
                    </SwiperSlide> */}



                </Swiper>
                {/* Navigation buttons below the image */}

                <div className={styles.navButtons}>
                    <button
                        className={styles.prevButton}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        Prev
                    </button>
                    <button
                        className={styles.nextButton}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        Next
                    </button>
                </div>
            </div>


        </div>
    );
}
