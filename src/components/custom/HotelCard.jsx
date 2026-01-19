const HotelCard = ({ title, price, bedgeContent, imgUrl }) => {
  return (
    <div className="col-xl-3 col-sm-6">
      <div className="overflow-hidden card border-0 ">
        <div className="position-relative overflow-hidden hotel-card">
          <img src={imgUrl} alt="img" className="card-img" />
          <div className="position-absolute bottom-0 start-0 p-3">
            <div className="badge rounded-pill bg-black text-light d-flex fs-6 align-items-center">
              <i class="ri-map-pin-line text-light me-2"></i>
              {bedgeContent}
            </div>
          </div>
        </div>
        <div className="card-body px-2">
          <h5 className="card-title fw-bold hotel-title">{title}t</h5>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="text-success mb-0">
              ${price} <span className="fw-light">/starting at</span>
            </h6>
            <h6 className="m-0 d-flex fw-bold">
              {price}
              <span className="ms-2">
                <i className="ri-star-fill text-warning"></i>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard