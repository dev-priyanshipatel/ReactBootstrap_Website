import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cupon from "./Cupon";

const CuponSlider = () => {
  return (
    <section className="pb-2 pb-lg-5 pt-2 pt-lg-5">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="cupon-swiper"
        >
          <SwiperSlide>
            <Cupon
              title="Hot Summer Nights"
              des="Up to 3 Nights Free"
              imgUrl="/images/cupon-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cupon
              title="Book & Enjoy"
              des="20% Off On Best Available Room Rate"
              imgUrl="/images/cupon-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cupon
              title="Up to 60% Off"
              des="On Hotel Booking Online"
              imgUrl="/images/cupon-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cupon
              title="Daily 50 Lucky Winner Get a Free Stay"
              des="Valid Till 15 November"
              imgUrl="/images/cupon-4.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CuponSlider;
