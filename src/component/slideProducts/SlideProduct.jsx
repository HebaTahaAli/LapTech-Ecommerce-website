import Product from './Product'
import "./slideProducts.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';


export default function SlideProduct({ data, title }) {
    return (
        <div className='slide-products slide'>
            <div className="container">
                <div className="top-slide">
                    <h2>{title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptates?</p>
                </div>

                <Swiper navigation={true}
                    modules={[Navigation, Autoplay]}
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper">
                    {data.map((item) => {
                        return (
                            <SwiperSlide> <Product item={item} /></SwiperSlide>

                        )
                    })}

                </Swiper>

            </div>

        </div>
    )
}
