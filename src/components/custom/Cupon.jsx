import { SwiperSlide } from "swiper/react";

const Cupon = ({ title, des, imgUrl }) => {
  return (
      <div className="cupon-card d-flex align-items-center gap-3">
        <img src={imgUrl} alt="img" className="img-fluid" />

        <div className="cupon-content">
          <h4 className="fw-bold d-inline-block">{title}</h4>
          <p className="mb-0 d-inline-block">{des}</p>
        </div>
      </div>
  );
};

export default Cupon;
