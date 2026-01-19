import HolidayService from "./HolidayService";

const Holiday = () => {
  return (
    <section className="pb-xl-5 pt-4 pt-lg-5">
      <div className="container">
        <div className="row justify-content-between align-items-center g-4">
          <div className="col-lg-5">
            <div className="position-relative">
              <img
                src="/images/holiday.jpg"
                alt="img"
                className="img-fluid rounded-3 position-relative"
              />

              <figure className="position-absolute top-0 start-0 z-index-1 mt-2 translate-middle">
                <svg className="fill-warning" width="77px" height="77px">
                  <path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z"></path>
                </svg>
              </figure>

              <figure className="position-absolute bottom-0 end-0 d-none d-md-block mb-n5 me-n4 z-index-5">
                <svg
                  height="400"
                  className="fill-primary opacity-2"
                  viewBox="0 0 340 340"
                >
                  <circle cx="194.2" cy="2.2" r="2.2"></circle>
                  <circle cx="2.2" cy="2.2" r="2.2"></circle>
                  <circle cx="218.2" cy="2.2" r="2.2"></circle>
                  <circle cx="26.2" cy="2.2" r="2.2"></circle>
                  <circle cx="242.2" cy="2.2" r="2.2"></circle>
                  <circle cx="50.2" cy="2.2" r="2.2"></circle>
                  <circle cx="266.2" cy="2.2" r="2.2"></circle>
                  <circle cx="74.2" cy="2.2" r="2.2"></circle>
                  <circle cx="290.2" cy="2.2" r="2.2"></circle>
                  <circle cx="98.2" cy="2.2" r="2.2"></circle>
                  <circle cx="314.2" cy="2.2" r="2.2"></circle>
                  <circle cx="122.2" cy="2.2" r="2.2"></circle>
                  <circle cx="338.2" cy="2.2" r="2.2"></circle>
                  <circle cx="146.2" cy="2.2" r="2.2"></circle>
                  <circle cx="170.2" cy="2.2" r="2.2"></circle>
                  <circle cx="194.2" cy="26.2" r="2.2"></circle>
                  <circle cx="2.2" cy="26.2" r="2.2"></circle>
                  <circle cx="218.2" cy="26.2" r="2.2"></circle>
                  <circle cx="26.2" cy="26.2" r="2.2"></circle>
                  <circle cx="242.2" cy="26.2" r="2.2"></circle>
                  <circle cx="50.2" cy="26.2" r="2.2"></circle>
                  <circle cx="266.2" cy="26.2" r="2.2"></circle>
                  <circle cx="74.2" cy="26.2" r="2.2"></circle>
                  <circle cx="290.2" cy="26.2" r="2.2"></circle>
                  <circle cx="98.2" cy="26.2" r="2.2"></circle>
                  <circle cx="314.2" cy="26.2" r="2.2"></circle>
                  <circle cx="122.2" cy="26.2" r="2.2"></circle>
                  <circle cx="338.2" cy="26.2" r="2.2"></circle>
                  <circle cx="146.2" cy="26.2" r="2.2"></circle>
                  <circle cx="170.2" cy="26.2" r="2.2"></circle>
                  <circle cx="194.2" cy="50.2" r="2.2"></circle>
                  <circle cx="2.2" cy="50.2" r="2.2"></circle>
                  <circle cx="218.2" cy="50.2" r="2.2"></circle>
                  <circle cx="26.2" cy="50.2" r="2.2"></circle>
                  <circle cx="242.2" cy="50.2" r="2.2"></circle>
                  <circle cx="50.2" cy="50.2" r="2.2"></circle>
                  <circle cx="266.2" cy="50.2" r="2.2"></circle>
                  <circle cx="74.2" cy="50.2" r="2.2"></circle>
                  <circle cx="290.2" cy="50.2" r="2.2"></circle>
                  <circle cx="98.2" cy="50.2" r="2.2"></circle>
                  <circle cx="314.2" cy="50.2" r="2.2"></circle>
                  <circle cx="122.2" cy="50.2" r="2.2"></circle>
                  <circle cx="338.2" cy="50.2" r="2.2"></circle>
                  <circle cx="146.2" cy="50.2" r="2.2"></circle>
                  <circle cx="170.2" cy="50.2" r="2.2"></circle>
                  <circle cx="194.2" cy="74.2" r="2.2"></circle>
                  <circle cx="2.2" cy="74.2" r="2.2"></circle>
                  <circle cx="218.2" cy="74.2" r="2.2"></circle>
                  <circle cx="26.2" cy="74.2" r="2.2"></circle>
                  <circle cx="242.2" cy="74.2" r="2.2"></circle>
                  <circle cx="50.2" cy="74.2" r="2.2"></circle>
                  <circle cx="266.2" cy="74.2" r="2.2"></circle>
                  <circle cx="74.2" cy="74.2" r="2.2"></circle>
                  <circle cx="290.2" cy="74.2" r="2.2"></circle>
                  <circle cx="98.2" cy="74.2" r="2.2"></circle>
                  <circle cx="314.2" cy="74.2" r="2.2"></circle>
                  <circle cx="122.2" cy="74.2" r="2.2"></circle>
                  <circle cx="338.2" cy="74.2" r="2.2"></circle>
                  <circle cx="146.2" cy="74.2" r="2.2"></circle>
                  <circle cx="170.2" cy="74.2" r="2.2"></circle>
                  <circle cx="194.2" cy="98.2" r="2.2"></circle>
                  <circle cx="2.2" cy="98.2" r="2.2"></circle>
                  <circle cx="218.2" cy="98.2" r="2.2"></circle>
                  <circle cx="26.2" cy="98.2" r="2.2"></circle>
                  <circle cx="242.2" cy="98.2" r="2.2"></circle>
                  <circle cx="50.2" cy="98.2" r="2.2"></circle>
                  <circle cx="266.2" cy="98.2" r="2.2"></circle>
                  <circle cx="74.2" cy="98.2" r="2.2"></circle>
                  <circle cx="290.2" cy="98.2" r="2.2"></circle>
                  <circle cx="98.2" cy="98.2" r="2.2"></circle>
                  <circle cx="314.2" cy="98.2" r="2.2"></circle>
                  <circle cx="122.2" cy="98.2" r="2.2"></circle>
                  <circle cx="338.2" cy="98.2" r="2.2"></circle>
                  <circle cx="146.2" cy="98.2" r="2.2"></circle>
                  <circle cx="170.2" cy="98.2" r="2.2"></circle>
                  <circle cx="194.2" cy="122.2" r="2.2"></circle>
                  <circle cx="2.2" cy="122.2" r="2.2"></circle>
                  <circle cx="218.2" cy="122.2" r="2.2"></circle>
                  <circle cx="26.2" cy="122.2" r="2.2"></circle>
                  <circle cx="242.2" cy="122.2" r="2.2"></circle>
                  <circle cx="50.2" cy="122.2" r="2.2"></circle>
                  <circle cx="266.2" cy="122.2" r="2.2"></circle>
                  <circle cx="74.2" cy="122.2" r="2.2"></circle>
                  <circle cx="290.2" cy="122.2" r="2.2"></circle>
                  <circle cx="98.2" cy="122.2" r="2.2"></circle>
                  <circle cx="314.2" cy="122.2" r="2.2"></circle>
                  <circle cx="122.2" cy="122.2" r="2.2"></circle>
                  <circle cx="338.2" cy="122.2" r="2.2"></circle>
                  <circle cx="146.2" cy="122.2" r="2.2"></circle>
                  <circle cx="170.2" cy="122.2" r="2.2"></circle>
                  <circle cx="194.2" cy="146.2" r="2.2"></circle>
                  <circle cx="2.2" cy="146.2" r="2.2"></circle>
                  <circle cx="218.2" cy="146.2" r="2.2"></circle>
                  <circle cx="26.2" cy="146.2" r="2.2"></circle>
                  <circle cx="242.2" cy="146.2" r="2.2"></circle>
                  <circle cx="50.2" cy="146.2" r="2.2"></circle>
                  <circle cx="266.2" cy="146.2" r="2.2"></circle>
                  <circle cx="74.2" cy="146.2" r="2.2"></circle>
                  <circle cx="290.2" cy="146.2" r="2.2"></circle>
                  <circle cx="98.2" cy="146.2" r="2.2"></circle>
                  <circle cx="314.2" cy="146.2" r="2.2"></circle>
                  <circle cx="122.2" cy="146.2" r="2.2"></circle>
                  <circle cx="338.2" cy="146.2" r="2.2"></circle>
                  <circle cx="146.2" cy="146.2" r="2.2"></circle>
                  <circle cx="170.2" cy="146.2" r="2.2"></circle>
                  <circle cx="194.2" cy="170.2" r="2.2"></circle>
                  <circle cx="2.2" cy="170.2" r="2.2"></circle>
                  <circle cx="218.2" cy="170.2" r="2.2"></circle>
                  <circle cx="26.2" cy="170.2" r="2.2"></circle>
                  <circle cx="242.2" cy="170.2" r="2.2"></circle>
                  <circle cx="50.2" cy="170.2" r="2.2"></circle>
                  <circle cx="266.2" cy="170.2" r="2.2"></circle>
                  <circle cx="74.2" cy="170.2" r="2.2"></circle>
                  <circle cx="290.2" cy="170.2" r="2.2"></circle>
                  <circle cx="98.2" cy="170.2" r="2.2"></circle>
                  <circle cx="314.2" cy="170.2" r="2.2"></circle>
                  <circle cx="122.2" cy="170.2" r="2.2"></circle>
                  <circle cx="338.2" cy="170.2" r="2.2"></circle>
                  <circle cx="146.2" cy="170.2" r="2.2"></circle>
                  <circle cx="170.2" cy="170.2" r="2.2"></circle>
                  <circle cx="194.2" cy="194.2" r="2.2"></circle>
                  <circle cx="2.2" cy="194.2" r="2.2"></circle>
                  <circle cx="218.2" cy="194.2" r="2.2"></circle>
                  <circle cx="26.2" cy="194.2" r="2.2"></circle>
                  <circle cx="242.2" cy="194.2" r="2.2"></circle>
                  <circle cx="50.2" cy="194.2" r="2.2"></circle>
                  <circle cx="266.2" cy="194.2" r="2.2"></circle>
                  <circle cx="74.2" cy="194.2" r="2.2"></circle>
                  <circle cx="290.2" cy="194.2" r="2.2"></circle>
                  <circle cx="98.2" cy="194.2" r="2.2"></circle>
                  <circle cx="314.2" cy="194.2" r="2.2"></circle>
                  <circle cx="122.2" cy="194.2" r="2.2"></circle>
                  <circle cx="338.2" cy="194.2" r="2.2"></circle>
                  <circle cx="146.2" cy="194.2" r="2.2"></circle>
                  <circle cx="170.2" cy="194.2" r="2.2"></circle>
                  <circle cx="194.2" cy="218.2" r="2.2"></circle>
                  <circle cx="2.2" cy="218.2" r="2.2"></circle>
                  <circle cx="218.2" cy="218.2" r="2.2"></circle>
                  <circle cx="26.2" cy="218.2" r="2.2"></circle>
                  <circle cx="242.2" cy="218.2" r="2.2"></circle>
                  <circle cx="50.2" cy="218.2" r="2.2"></circle>
                  <circle cx="266.2" cy="218.2" r="2.2"></circle>
                  <circle cx="74.2" cy="218.2" r="2.2"></circle>
                  <circle cx="290.2" cy="218.2" r="2.2"></circle>
                  <circle cx="98.2" cy="218.2" r="2.2"></circle>
                  <circle cx="314.2" cy="218.2" r="2.2"></circle>
                  <circle cx="122.2" cy="218.2" r="2.2"></circle>
                  <circle cx="338.2" cy="218.2" r="2.2"></circle>
                  <circle cx="146.2" cy="218.2" r="2.2"></circle>
                  <circle cx="170.2" cy="218.2" r="2.2"></circle>
                  <circle cx="194.2" cy="242.2" r="2.2"></circle>
                  <circle cx="2.2" cy="242.2" r="2.2"></circle>
                  <circle cx="218.2" cy="242.2" r="2.2"></circle>
                  <circle cx="26.2" cy="242.2" r="2.2"></circle>
                  <circle cx="242.2" cy="242.2" r="2.2"></circle>
                  <circle cx="50.2" cy="242.2" r="2.2"></circle>
                  <circle cx="266.2" cy="242.2" r="2.2"></circle>
                  <circle cx="74.2" cy="242.2" r="2.2"></circle>
                  <circle cx="290.2" cy="242.2" r="2.2"></circle>
                  <circle cx="98.2" cy="242.2" r="2.2"></circle>
                  <circle cx="314.2" cy="242.2" r="2.2"></circle>
                  <circle cx="122.2" cy="242.2" r="2.2"></circle>
                  <circle cx="338.2" cy="242.2" r="2.2"></circle>
                  <circle cx="146.2" cy="242.2" r="2.2"></circle>
                  <circle cx="170.2" cy="242.2" r="2.2"></circle>
                  <circle cx="194.2" cy="266.2" r="2.2"></circle>
                  <circle cx="2.2" cy="266.2" r="2.2"></circle>
                  <circle cx="218.2" cy="266.2" r="2.2"></circle>
                  <circle cx="26.2" cy="266.2" r="2.2"></circle>
                  <circle cx="242.2" cy="266.2" r="2.2"></circle>
                  <circle cx="50.2" cy="266.2" r="2.2"></circle>
                  <circle cx="266.2" cy="266.2" r="2.2"></circle>
                  <circle cx="74.2" cy="266.2" r="2.2"></circle>
                  <circle cx="290.2" cy="266.2" r="2.2"></circle>
                  <circle cx="98.2" cy="266.2" r="2.2"></circle>
                  <circle cx="314.2" cy="266.2" r="2.2"></circle>
                  <circle cx="122.2" cy="266.2" r="2.2"></circle>
                  <circle cx="338.2" cy="266.2" r="2.2"></circle>
                  <circle cx="146.2" cy="266.2" r="2.2"></circle>
                  <circle cx="170.2" cy="266.2" r="2.2"></circle>
                  <circle cx="194.2" cy="290.2" r="2.2"></circle>
                  <circle cx="2.2" cy="290.2" r="2.2"></circle>
                  <circle cx="218.2" cy="290.2" r="2.2"></circle>
                  <circle cx="26.2" cy="290.2" r="2.2"></circle>
                  <circle cx="242.2" cy="290.2" r="2.2"></circle>
                  <circle cx="50.2" cy="290.2" r="2.2"></circle>
                  <circle cx="266.2" cy="290.2" r="2.2"></circle>
                  <circle cx="74.2" cy="290.2" r="2.2"></circle>
                  <circle cx="290.2" cy="290.2" r="2.2"></circle>
                  <circle cx="98.2" cy="290.2" r="2.2"></circle>
                  <circle cx="314.2" cy="290.2" r="2.2"></circle>
                  <circle cx="122.2" cy="290.2" r="2.2"></circle>
                  <circle cx="338.2" cy="290.2" r="2.2"></circle>
                  <circle cx="146.2" cy="290.2" r="2.2"></circle>
                  <circle cx="170.2" cy="290.2" r="2.2"></circle>
                  <circle cx="194.2" cy="314.2" r="2.2"></circle>
                  <circle cx="2.2" cy="314.2" r="2.2"></circle>
                  <circle cx="218.2" cy="314.2" r="2.2"></circle>
                  <circle cx="26.2" cy="314.2" r="2.2"></circle>
                  <circle cx="242.2" cy="314.2" r="2.2"></circle>
                  <circle cx="50.2" cy="314.2" r="2.2"></circle>
                  <circle cx="266.2" cy="314.2" r="2.2"></circle>
                  <circle cx="74.2" cy="314.2" r="2.2"></circle>
                  <circle cx="290.2" cy="314.2" r="2.2"></circle>
                  <circle cx="98.2" cy="314.2" r="2.2"></circle>
                  <circle cx="314.2" cy="314.2" r="2.2"></circle>
                  <circle cx="122.2" cy="314.2" r="2.2"></circle>
                  <circle cx="338.2" cy="314.2" r="2.2"></circle>
                  <circle cx="146.2" cy="314.2" r="2.2"></circle>
                  <circle cx="170.2" cy="314.2" r="2.2"></circle>
                  <circle cx="194.2" cy="338.2" r="2.2"></circle>
                  <circle cx="2.2" cy="338.2" r="2.2"></circle>
                  <circle cx="218.2" cy="338.2" r="2.2"></circle>
                  <circle cx="26.2" cy="338.2" r="2.2"></circle>
                  <circle cx="242.2" cy="338.2" r="2.2"></circle>
                  <circle cx="50.2" cy="338.2" r="2.2"></circle>
                  <circle cx="266.2" cy="338.2" r="2.2"></circle>
                  <circle cx="74.2" cy="338.2" r="2.2"></circle>
                  <circle cx="290.2" cy="338.2" r="2.2"></circle>
                  <circle cx="98.2" cy="338.2" r="2.2"></circle>
                  <circle cx="314.2" cy="338.2" r="2.2"></circle>
                  <circle cx="122.2" cy="338.2" r="2.2"></circle>
                  <circle cx="338.2" cy="338.2" r="2.2"></circle>
                  <circle cx="146.2" cy="338.2" r="2.2"></circle>
                  <circle cx="170.2" cy="338.2" r="2.2"></circle>
                </svg>
              </figure>

              <div className="position-absolute bottom-0 start-0 z-1 mb-4 ms-5">
                <div className="position-relative p-3 d-flex d-inline-block bg-body rounded-3">
                  <img src="/images/like.svg" alt="img" className="position-absolute top-0 start-0 translate-middle w-40" />
                  <div className="me-4">
                    <h6 className="fw-semibold client">Client</h6>
                    <ul className="avatar-group mb-0 d-flex p-0">
                      <li className="avtar list-unstyled">
                        <img
                          src="/images/profile.jpg"
                          alt="img"
                          className="img-fluid rounded-circle"
                        />
                      </li>
                      <li className="avtar list-unstyled">
                        <img
                          src="/images/avatar-2.jpg"
                          alt="img"
                          className="img-fluid rounded-circle"
                        />
                      </li>
                      <li className="avtar list-unstyled">
                        <img
                          src="/images/avatar-3.jpg"
                          alt="img"
                          className="img-fluid rounded-circle"
                        />
                      </li>
                      <li className="avtar list-unstyled">
                        <img
                          src="/images/avatar-4.jpg"
                          alt="img"
                          className="img-fluid rounded-circle"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="ms-4">
                    <h6 className="fw-semibold client mb-3">Rating</h6>
                    <h6 className="m-0 d-flex fw-bold">
                      4.5
                      <span className="ms-2">
                        <i className="ri-star-fill text-warning"></i>
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="holiday-content">
              <h2 className="mb-3 mb-lg-5 display-4 fw-bold">
                The Best Holidays Start Here!
              </h2>
              <p className="mb-3 mb-lg-5">
                Book your hotel with us and don't forget to grab an awesome
                hotel deal to save massive on your stay.
              </p>
              <div className="row g-4">
                <HolidayService
                  title="Quality Food"
                  des="Departure defective arranging rapturous did. Conduct denied adding worthy little."
                  icon="ri-restaurant-fill"
                  iconClass="text-success"
                  bgClass="bg-success"
                />

                <HolidayService
                  title="Quick Services"
                  des="Supposing so be resolving breakfast am or perfectly. "
                  icon="ri-alarm-fill"
                  iconClass="text-danger"
                  bgClass="bg-danger"
                />

                <HolidayService
                  title="High Security"
                  des="Arranging rapturous did believe him all had supported. "
                  icon="ri-shield-fill"
                  iconClass="text-orange"
                  bgClass="bg-orange"
                />

                <HolidayService
                  title="24 Hours Alert"
                  des="Rapturous did believe him all had supported."
                  icon="ri-flashlight-fill"
                  iconClass="text-info"
                  bgClass="bg-info"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Holiday