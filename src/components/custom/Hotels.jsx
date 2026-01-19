import HotelCard from "./HotelCard";

const Hotels = () => {
  return (
    <section className="pb-xl-5 pt-2 pt-lg-5">
      <div className="container">
        <div className="mb-4">
          <h2 className="text-center mb-0 display-4 fw-bold">
            Featured Hotels
          </h2>
        </div>
        <div className="row g-4">
          <HotelCard
            title="Baga Comfort"
            price="455"
            bedgeContent="New York"
            imgUrl="/images/hotel-1.jpg"
          />
          <HotelCard
            title="New Apollo Hotel"
            price="585"
            bedgeContent="California"
            imgUrl="/images/hotel-2.jpg"
          />
          <HotelCard
            title="New Age Hotel"
            price="385"
            bedgeContent="Los Angeles"
            imgUrl="/images/hotel-3.jpg"
          />
          <HotelCard
            title="New Age Hotel"
            price="665"
            bedgeContent="Chicago"
            imgUrl="/images/hotel-4.jpg"
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
