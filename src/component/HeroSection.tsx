import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSection() {
    return (
        <div className='hero'>
            <div className="container">

                <Swiper
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="content">
                            <h4>Introducing the new</h4>
                            <h3>Microsoft Xbox <br />  360 Controller</h3>
                            <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                            <Link to="/" className='btn'> Shop Now </Link>
                        </div>

                        <img src='/public/img/banner_Hero1.jpg' alt='slide bar' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content">
                            <h4>Introducing the new</h4>
                            <h3>Microsoft Xbox <br />  360 Controller</h3>
                            <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                            <Link to="/" className='btn'> Shop Now </Link>
                        </div>

                        <img src='/public/img/banner_Hero2.jpg' alt='slide bar' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content">
                            <h4>Introducing the new</h4>
                            <h3>Microsoft Xbox <br />  360 Controller</h3>
                            <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                            <Link to="/" className='btn'> Shop Now </Link>
                        </div>

                        <img src='/public/img/banner_Hero3.jpg' alt='slide bar' />

                    </SwiperSlide>

                </Swiper>


            </div>

        </div>
    )
}
