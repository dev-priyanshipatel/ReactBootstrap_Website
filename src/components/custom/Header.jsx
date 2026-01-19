import Logo from "./Logo";

const Header = () => {
  return (
    <header className=" py-1 ">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center ">
          <Logo />
          <nav>
            <ul className="navbar-nav flex-row gap-3 m-0">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link p-3 text-decoration-none text-dark fw-medium facilities"
                >
                  Listing<i className="ri-arrow-down-s-line"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className=" nav-link p-3 text-decoration-none text-dark  fw-medium facilities"
                >
                  Pages<i className="ri-arrow-down-s-line"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className=" nav-link p-3 text-decoration-none text-dark  fw-medium facilities"
                >
                  Accounts<i className="ri-arrow-down-s-line"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="d-flex align-items-center">
          <ul className="navbar-nav flex-row gap-1 m-0 services">
            <li className="nav-item bg-color rounded-4  px-3 py-2">
              <a
                href="#"
                className=" nav-link text-decoration-none text-dark  fw-medium facilities"
              >
                <i className="ri-hotel-line fs-5 me-2"></i>Hotel
              </a>
            </li>
            <li className="nav-item bg-color rounded-4  px-3 py-2">
              <a
                href="#"
                className=" nav-link text-decoration-none text-dark  fw-medium facilities"
              >
                <i className="ri-plane-line fs-5 me-2"></i>Flight
              </a>
            </li>
            <li className="nav-item bg-color rounded-4  px-3 py-2">
              <a
                href="#"
                className=" nav-link text-decoration-none text-dark  fw-medium facilities"
              >
                <i className="ri-global-line fs-5 me-2"></i>Tour
              </a>
            </li>
            <li className="nav-item bg-color rounded-4  px-3 py-2">
              <a
                href="#"
                className=" nav-link text-decoration-none text-dark  fw-medium facilities"
              >
                <i className="ri-car-line fs-5 me-2"></i>Cab
              </a>
            </li>
          </ul>
          <div>
            <div className="d-flex align-items-center gap-2 ">
              <div className="nav-item grey-bg px-3 py-2 rounded-3 ms-2">
                <a
                  href="#"
                  className="nav-link text-decoration-none text-dark  fw-medium"
                >
                  <i className="ri-notification-3-line"></i>
                </a>
              </div>
              <div className="nav-item profile">
                <img
                  src="/images/profile.jpg"
                  alt="img"
                  className="profile rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
