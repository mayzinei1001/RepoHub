import { Link, NavLink } from "react-router-dom";
import Home_Img from "../../assets/images/home-1.png";
import Service_Img_1 from "../../assets/images/our_service_1.png";
import Service_Img_2 from "../../assets/images/our_service_2.png";
import Service_Img_3 from "../../assets/images/our_service_3.png";
import Service_Img_4 from "../../assets/images/our_service_4.png";

import logo from "../../repohub_logo.png";

import Web_Img from "../../assets/images/web.png";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Helmet } from "react-helmet";

const Service = (props) => {

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

      {/* Service section */}
      <section className="container">
        <div className="row">
          <div className="col">
            <div className="my-lg-5 py-5 ">
              <h1 className="fw-light my-3 headline">Services</h1>
              <h3 className="mb-5 display-5 fw-bold mb-5 pb-3 headline">
                Our services extend to every aspect of the project development
                process
              </h3>
              <img src={Home_Img} className="img-fluid headline" />
            </div>
          </div>
        </div>
      </section>

      {/* Research section */}
      <div className="border-bottom pb-md-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
              <div className="mb-5 headline">
                <h3 className="mb-3">Research & Analytics</h3>
                <p className="fs-5">
                  We immerse ourselves in the analytics of your business, in
                  order to study all the subtleties and determine target
                  audience.
                </p>
              </div>
              <div className="pt-lg-2">
                <div className="row ms-2 mt-lg-5 ">
                  <h4 className="headline">What we do</h4>
                  <div className="col-6 headline">
                    <div className="p-2">- Analyze cliente business</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Create information architecture</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Branding Strategy</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Study the target audience</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Research opportunities</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Production planning</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col headline">
              <div className="text-center p-5 p-lg-5 p-md-2 mb-lg-5 pt-md-5">
                <img
                  src={Service_Img_1}
                  className="img-fluid float-lg-end w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product design section */}
      <div className="border-bottom pt-5 py-md-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
              <div className="mb-5 headline">
                <h3 className="mb-5">Product Design</h3>
                <p className="fs-5">
                  We know how to create complex and intuitive interface systems
                  that are enjoyable to use.
                </p>
              </div>
              <div className="pt-lg-2">
                <div className="row ms-2 mt-lg-5 ">
                  <h4 className="headline">What we do</h4>
                  <div className="col-6 headline">
                    <div className="p-2">- Interface design</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- UI Kits & Libraries</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Visual Identity</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- E-commerce</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Corporate & Promo landings</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Apps for iOS & Android</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col headline">
              <div className="text-center p-5 p-lg-5 p-md-2 mb-lg-5 pt-md-5">
                <img
                  src={Service_Img_2}
                  className="img-fluid float-lg-end w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development & Integration section */}
      <div className="border-bottom pt-5 py-md-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
              <div className="mb-5 headline">
                <h3 className="mb-3">Development & Integration</h3>
                <p className="fs-5">
                  Our developer team easily subdue developments of any
                  complexity. We dominate all the cycle of development.
                </p>
              </div>
              <div className="pt-lg-2">
                <div className="row ms-2 mt-lg-5 ">
                  <h4 className=" headline">What we do</h4>
                  <div className="col-6 headline">
                    <div className="p-2">- Front-end Development</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- API</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Development Consulting</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Highload-systems</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- CMS Development</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Animations</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col headline">
              <div className="text-center p-5 p-lg-5 p-md-2 mb-lg-5 pt-md-5">
                <img
                  src={Service_Img_3}
                  className="img-fluid float-lg-end w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support section */}
      <div className="border-bottom pt-5 py-md-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
              <div className="mb-5 headline">
                <h3 className="mb-3">Support</h3>
                <p className="fs-5">
                  We provide technical assistance, that will help you to
                  improve, keep the quality and speed of the launched project
                  like website, app or full product.
                </p>
              </div>
              <div className="pt-lg-2">
                <div className="row ms-2 mt-lg-5 ">
                  <h4 className="headline">What we do</h4>
                  <div className="col-6 headline">
                    <div className="p-2">- Content Strategy & Research</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Content Strategy</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Branding Strategy</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Strategic Planning</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Opportunity Analysis</div>
                  </div>
                  <div className="col-6 headline">
                    <div className="p-2">- Production Planning</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col headline">
              <div className="text-center p-5 p-lg-5 p-md-2 mb-lg-5 pt-md-5">
                <img
                  src={Service_Img_4}
                  className="img-fluid float-lg-end w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Go link section */}
      <section className="container">
        <div className="row my-lg-5 py-lg-5">
          <Link to="/contact" className="text-decoration-none">
            <div className="col text-center my-5 headline">
              <p className="text-black-50 fw-2x">NEXT</p>
              <h1 className="py-3 text-black">Contact Us</h1>
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

export default Service;
