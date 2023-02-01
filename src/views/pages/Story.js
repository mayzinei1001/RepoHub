import { Link , NavLink } from "react-router-dom";
import Home_Img from "../../assets/images/home-1.png";

import logo from "../../repohub_logo.png";

import Web_Img from "../../assets/images/web.png";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Helmet } from "react-helmet";

const Story = (props) => {

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

      {/* Story section */}
      <section className="container">
        <div className="row">
          <div className="col">
            <div className="my-lg-5 py-5 ">
              <h1 className="fw-light my-3 headline">Our Story</h1>
              <h3 className="mb-5 display-5 fw-bold mb-5 pb-3 headline">
                We developer complex interface systems <br /> for Web, Mobile &
                Ar
              </h3>
              <img src={Home_Img} className="img-fluid headline" />
            </div>
          </div>
        </div>
      </section>

      {/* Number section */}
      <div className="bg-light py-3">
        <div className="container ">
          <div className="row text-center">
            <div className="col headline">
              <h1 className="fw-bold display-4">20</h1>
              <p>Emplyers</p>
            </div>
            <div className="col headline">
              <h1 className="fw-bold display-4">5</h1>
              <p>Years of Experiences</p>
            </div>
            <div className="col headline">
              <h1 className="fw-bold display-4">90+</h1>
              <p>Completed Projects</p>
            </div>
            <div className="col headline">
              <h1 className="fw-bold display-4">500+</h1>
              <p>Local Customers</p>
            </div>
            <div className="col headline">
              <h1 className="fw-bold display-4">60+</h1>
              <p>International Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Go link section */}
      <section className="container">
        <div className="row my-lg-5 py-lg-5">
          <Link to="/service" className="text-decoration-none">
            <div className="col text-center my-5 headline">
              <p className="text-black-50 fw-2x">NEXT</p>
              <h1 className="py-3 text-black">Our Services</h1>
              <i className="fa-solid fa-arrow-right-long fa-2x text-black-50"></i>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer section */}
      <div className="border-top py-3 py-lg-5">
        <section className="container">
          <div className="row">
            <div className="col col-lg-auto col-md-10 headline">
              <div className="mb-4 mb-lg-0">
                <NavLink
                  to="/"
                  className="text-decoration-none text-secondary me-4 me-lg-5"
                >
                  Works
                </NavLink>
                <NavLink
                  to="/story"
                  className="text-decoration-none text-secondary me-4 me-lg-5"
                >
                  Story
                </NavLink>
                <NavLink
                  to="/service"
                  className="text-decoration-none text-secondary me-4 me-lg-5"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/service"
                  className="text-decoration-none text-secondary d-lg-none"
                >
                  Careers
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-decoration-none text-secondary d-lg-none ms-4 ms-lg-5"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
            <div className="col headline">
              <div className="text-center text-md-end me-lg-5 pe-lg-5">
                <h5 className="fw-bold">RepoHub</h5>
              </div>
            </div>
            <div className="col d-none d-lg-block headline">
              <div className="text-end">
                <NavLink
                  to="/service"
                  className="text-decoration-none text-secondary"
                >
                  Careers
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-decoration-none text-secondary ms-4 ms-lg-5"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Story;
