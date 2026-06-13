
function SlideProductLoading() {
  return (
    <div className="loading-slide-products">
          <div className='slide-products slide'>
            <div className="container">
                <div className="top-slide">
                    <h2 className="skeltion"></h2>
                    <p className="skeltion"></p>
                </div>
                <div className="products-loading">
                    <div className="product">
        <div className="img-product skeltion"></div>
        <div className="content skeltion"></div>
        <div className="content skeltion"></div>
         
                            </div>
                   <div className="product">
        <div className="img-product skeltion"></div>
        <div className="content skeltion"></div>
        <div className="content skeltion"></div>
         
                            </div>
                            <div className="product">
        <div className="img-product skeltion"></div>
        <div className="content skeltion"></div>
        <div className="content skeltion"></div>
         
                            </div>



                </div>

                {/* <Swiper navigation={true}
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

                </Swiper> */}

            </div>

        </div>
    </div>
  )
}

export default SlideProductLoading