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
        <Offcanvas.Header closeButton className='border-bottom'>
          <Offcanvas.Title>
            <Logo />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul className="navbar-nav offcanvas-navbar flex-row gap-3 m-0">
              <li className="nav-item border-bottom">
                <a
                  href="#"
                  className="nav-link p-3 text-decoration-none text-dark fw-medium facilities"
                >
                  Listing<i className="ri-arrow-down-s-line"></i>
                </a>
              </li>
              <li className="nav-item border-bottom">
                <a
                  href="#"
                  className=" nav-link p-3 text-decoration-none text-dark  fw-medium facilities"
                >
                  Pages<i className="ri-arrow-down-s-line"></i>
                </a>
              </li>
              <li className="nav-item border-bottom">
                <a
                  href="#"
                  className=" nav-link p-3 text-decoration-none text-dark  fw-medium facilities"
                >
                  Accounts<i className="ri-arrow-down-s-line"></i>
                </a>
              </li>
            </ul>
          </nav>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas