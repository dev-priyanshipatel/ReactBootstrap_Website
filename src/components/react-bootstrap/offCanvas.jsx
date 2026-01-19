import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from '../custom/Logo';

const OffCanvas = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="dark" onClick={handleShow} className="d-xl-none">
        <i class="ri-menu-line"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Logo />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul className="navbar-nav offcanvas-navbar flex-row gap-3 m-0">
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
          <div className="d-flex align-items-center">
            <ul className="navbar-nav flex-column gap-1 m-0 d-block">
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
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas