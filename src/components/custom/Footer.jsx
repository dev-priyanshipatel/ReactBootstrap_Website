import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className="pt-lg-5 pt-4 pb-5 bg-black">
      <div className="container mt-md-2 mt-lg-3">
        <div className="row mb-md-5 mb-4 gy-3">
          <div className="col-lg-4">
            <div>
              <div className="d-flex align-items-center me-3">
                <img
                  src="/images/white-logo.svg"
                  alt="logo"
                  className="  logo"
                />
              </div>
              <p className="grey-text fs-5 mt-3  mb-3">
                Departure defective arranging rapturous did believe him all had
                supported.
              </p>
              <p className="mb-2 grey-text fs-5">
                <span>
                  <i class="ri-phone-line"></i>
                </span>
                +1234 568 963
              </p>
              <p className="mb-2 grey-text fs-5">
                <span>
                  <i class="ri-mail-unread-line"></i>
                </span>
                example@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <h5 class="text-white mb-2 mb-md-4">Page</h5>
              <ul className="p-0">
                <li className="list-unstyled mb-2 grey-text ">About us</li>
                <li className="list-unstyled mb-2 grey-text ">Contact us</li>
                <li className="list-unstyled mb-2 grey-text ">News and Blog</li>
                <li className="list-unstyled mb-2 grey-text ">Meet a Team</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <h5 class="text-white mb-2 mb-md-4">Link</h5>
              <ul className="p-0">
                <li className="list-unstyled mb-2 grey-text ">Sign up</li>
                <li className="list-unstyled mb-2 grey-text ">Sign in</li>
                <li className="list-unstyled mb-2 grey-text ">
                  Privacy Policy
                </li>
                <li className="list-unstyled mb-2 grey-text ">Terms</li>
                <li className="list-unstyled mb-2 grey-text ">Cookie</li>
                <li className="list-unstyled mb-2 grey-text ">Support</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <h5 class="text-white mb-2 mb-md-4">Global Site</h5>
              <ul className="p-0">
                <li className="list-unstyled mb-2 grey-text ">India</li>
                <li className="list-unstyled mb-2 grey-text ">California</li>
                <li className="list-unstyled mb-2 grey-text ">Indonesia</li>
                <li className="list-unstyled mb-2 grey-text ">Canada</li>
                <li className="list-unstyled mb-2 grey-text ">Malaysia</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <h5 class="text-white mb-2 mb-md-4">Booking</h5>
              <ul className="p-0">
                <li className="list-unstyled mb-2 grey-text fw-semibold">
                  + 1 526 220 0444
                </li>
                <li className="list-unstyled mb-2 grey-text fw-semibold">
                  + 1 526 220 0000
                </li>
                <li className="list-unstyled mb-2 grey-text  fw-semibold">
                  example@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-7">
            <h4 className="text-white mb-2">Payment & Security</h4>
            <div className="d-flex">
              <img
                src="/images/payment-1.svg"
                alt="img"
                className="h-30 me-2"
              />
              <img
                src="/images/payment-2.svg"
                alt="img"
                className="h-30 me-2"
              />
              <img
                src="/images/payment-3.svg"
                alt="img"
                className="h-30 me-2"
              />
              <img
                src="/images/payment-4.svg"
                alt="img"
                className="h-30 me-2"
              />
            </div>
          </div>
          <div className="text-sm-end col-lg-3 col-md-6 col-sm-5">
            <h4 class="text-white mb-2">Follow us on</h4>
            <ul className="list-inline mb-0 mt-3 d-flex gap-2 justify-content-end">
              <li className="list-inline-item">
                <a
                  href="#"
                  className="shadow px-2  mb-0 btn btn-primary btn-sm"
                >
                  <i class="ri-facebook-fill text-white fs-5"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="shadow px-2 mb-0 btn bg-insta insta-bg btn-sm"
                >
                  <i class="ri-instagram-line text-white fs-5"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="shadow px-2 mb-0 btn bg-insta bg-twitter btn-sm"
                >
                  <i class="ri-twitter-fill text-white fs-5"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="shadow px-2 mb-0 btn bg-insta linkedIn-bg btn-sm"
                >
                  <i class="ri-linkedin-fill text-white fs-5"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className=" col-lg-6 pt-5">
            <h6 className="grey-text">
              Copyrights ©2026 Booking. Build by StackBros
            </h6>
          </div>
          <div className="col-lg-6 text-end  pt-5">
            <span className="grey-text me-3">Privacy policy</span>
            <span className="grey-text me-3">Terms and conditions</span>
            <span className="grey-text me-3">Refund policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
