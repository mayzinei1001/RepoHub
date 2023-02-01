import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Helmet } from "react-helmet";

import logo from "../../repohub_logo.png";

import Web_Img from "../../assets/images/web.png";

const Contact = (props) => {
  useEffect(() => {
    ScrollReveal().reveal(".headline", {
      origin: "bottom",
      distance: "40px",
      duration: "1200",
      // reset : true,
      interval: 200,
      scale: 0.9,
      viewFactor: 0.1,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>RepoHub</title>
        <link ref="icon" href={logo}></link>
        <meta name="title" content="RepoHub" />
        <meta
          name="description"
          content="responsive react.js lesson  project that created by Digital Hunter and me."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="repohub.io/" />
        <meta property="og:title" content="RepoHub" />
        <meta
          property="og:description"
          content="responsive react.js lesson  project that created by Digital Hunter and me."
        />
        <meta property="og:image" content={Web_Img} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="repohub.io/" />
        <meta property="twitter:title" content="RepoHub" />
        <meta
          property="twitter:description"
          content="responsive react.js lesson  project that created by Digital Hunter and me."
        />
        <meta property="twitter:image" content={Web_Img} />
      </Helmet>

      <div className="container py-5 mt-lg-4">
        <h1 className="fw-light my-3 headline">Wazup there</h1>
        <h3 className="display-5 fw-bold mb-4 headline">
          We’re here for you, drop as a line
        </h3>
        <div className="form w-75 w-lg-50 fs-4 headline">
          <div className="border-bottom d-flex py-3">
            <input
              type="text"
              className="form-control border-0"
              placeholder="New Business"
            />
            <i className="fa-solid fa-arrow-right-long text-black-50 float-end mt-2"></i>
          </div>
          <div className="border-bottom d-flex py-3">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Send a message"
            />
            <i className="fa-solid fa-arrow-right-long text-black-50 float-end mt-2"></i>
          </div>
          <div className="border-bottom d-flex py-3">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Careers"
            />
            <i className="fa-solid fa-arrow-right-long text-black-50 float-end mt-2"></i>
          </div>
        </div>
      </div>

      {/* lastest section */}
      <div className="">
        <div className="container pt-5 d-none d-md-block">
          <div className="row g-0 ">
            <div className="col headline">
              <p className="text-secondary">General inquiries —</p>
              <h3 className="fw-bold">Quick Chat</h3>
              <span className="d-flex mt-3">
                <i className="fa-brands fa-facebook-messenger p-1"></i>
                <p>Message on facebook</p>
              </span>
            </div>
            <div className="col headline">
              <p className="text-secondary">New business —</p>
              <h3 className="fw-bold">hi@repohub.co</h3>
              <span>
                <p className="mt-3">+95 9 888 777 666</p>
              </span>
            </div>
            <div className="col headline">
              <p className="text-secondary">Office —</p>
              <h3 className="fw-bold">Yangon</h3>
              <span>
                <p className="mt-3">Yangon, Myanmar</p>
              </span>
            </div>
          </div>
        </div>

        {/* On moblle */}
        <div className="container d-md-none">
          <div className="row my-3 headline">
            <div className="col-6">
              <p className="text-secondary">General inquiries —</p>
            </div>
            <div className="col-6">
              <h5 className="fw-bold">Quick Chat</h5>
              <span className="d-flex mt-2">
                <i className="fa-brands fa-facebook-messenger p-1"></i>
                <p>Message on facebook</p>
              </span>
            </div>
          </div>
          <div className="row my-3 headline">
            <div className="col-6">
              <p className="text-secondary">New business —</p>
            </div>
            <div className="col-6">
              <h5 className="fw-bold">hi@repohub.co</h5>
              <span>
                <p className="mt-2">+95 9 888 777 666</p>
              </span>
            </div>
          </div>
          <div className="row my-3 headline">
            <div className="col-6">
              <p className="text-secondary">Office —</p>
            </div>
            <div className="col-6">
              <h5 className="fw-bold">Yangon</h5>
              <span>
                <p className="mt-2">Yangon, Myanmar</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
