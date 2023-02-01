import { Link, NavLink } from 'react-router-dom';
import Home_Img from '../../assets/images/home-1.png';
import Service_Img_1 from "../../assets/images/our_service_1.png";
import Service_Img_2 from "../../assets/images/our_service_2.png";
import Service_Img_3 from "../../assets/images/our_service_3.png";
import Service_Img_4 from "../../assets/images/our_service_4.png";

import logo from "../../repohub_logo.png";

import Web_Img from "../../assets/images/web.png";

import { useEffect } from 'react';
import ScrollReveal from "scrollreveal";
import { Helmet } from 'react-helmet';




const Home = (props) => {

  const works = [
    { id: 1, src: Home_Img, subtitle: "Sportsbook", disc: "Rewind" },
    { id: 3, src: Home_Img, subtitle: "Sportsbook", disc: "Rewind" },
    { id: 2, src: Home_Img, subtitle: "Sportsbook", disc: "Rewind" },
    { id: 4, src: Home_Img, subtitle: "Sportsbook", disc: "Rewind" },
    { id: 5, src: Home_Img, subtitle: "Sportsbook", disc: "Rewind" },
    { id: 6, src: Home_Img, subtitle: "Sportsbook", disc: "Rewind" },
  ];
  const services = [
    { id: 1, src: Service_Img_1, title: "Research & Analysis" },
    { id: 2, src: Service_Img_2, title: "Product Design" },
    { id: 3, src: Service_Img_3, title: "Development & Integration" },
    { id: 4, src: Service_Img_4, title: "Support Technique" },
  ];

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

          {/* Home section */}
          <section className="container">
            <div className="row">
              <div className="col">
                <div className="my-lg-5 py-5 ">
                  <h1 className="fw-light my-3 headline">Digital Agency</h1>
                  <h3 className="mb-5 display-5 fw-bold mb-5 pb-3 headline">
                    We developer complex interface systems <br /> for Web,
                    Mobile & Ar
                  </h3>
                  <img src={Home_Img} className="img-fluid headline" />
                </div>
              </div>
            </div>
          </section>

          {/* Work section */}
          <div className="bg-light">
            <section className="container">
              <div className="row">
                <div className="col">
                  <div className="my-5">
                    <h2 className="fw-bold text-center headline mb-5">
                      Our Work Select Projects
                    </h2>

                    <div className="row row-cols-1 row-cols-md-2 g-5">
                      {works.map((work) => {
                        return (
                          <div className="col headline " key={work.id}>
                            <div className="card rounded-4 overflow-hidden border-0 shadow">
                              <img
                                src={work.src}
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body p-4">
                                <h5 className="card-title fw-bold">
                                  {work.disc}
                                </h5>
                                <p className="card-text">{work.subtitle}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-end my-5 headline">
                      <span>
                        MORE CASES
                        <div className="d-inline ms-2">
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Service section */}
          <div className="bg-light">
            <section className="container">
              <div className="row">
                <div className="col-lg-6 headline">
                  <h1>Our Services</h1>
                </div>
                <div className="col-lg-6">
                  <div className="w-75">
                    <p className="lead headline">
                      As a strategic partner, we create a working product with a
                      thoughtful and large-scale architecture. We launch,
                      support and development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3 mt-lg-5 g-4">
                {services.map((service) => {
                  return (
                    <div className="col headline" key={service.id}>
                      <div className="card text-center py-3 py-lg-5 border-0 shadow-sm">
                        <div className="mb-1 mb-lg-3">
                          <img
                            src={service.src}
                            className="card-img-top w-50"
                            alt="..."
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{service.title}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="text-end my-5 headline">
                  <span>
                    EXPLORE MORE
                    <div className="d-inline ms-2">
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Go link section */}
          <section className="container">
            <div className="row my-lg-5 py-lg-5">
              <Link to="/story" className="text-decoration-none">
                <div className="col text-center my-5 headline">
                  <p className="text-black-50 fw-2x">NEXT</p>
                  <h1 className="py-3 text-black">Our Story</h1>
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

export default Home;
