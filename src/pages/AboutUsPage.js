import React from "react";
import "../App.css"
// import PageHeader from "../components/PageHeader";
import about1 from "../assests/images/about-1.jpg"
import about2 from "../assests/images/about-2.jpg"
import vision from "../assests/images/carousel-1.jpg"
import vision1 from "../assests/images/about-2.jpg"

const AboutPage = () => {
  return (
    <div>
      {/* <PageHeader/> */}
      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-75 align-self-end"
                  src={about1}
                  alt="About Us"
                />
                <img
                  className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                  src={about2}
                  alt="About Us"
                  style={{ marginTop: "-25%" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p
                style={{
                  color: "#FFA916",
                  backgroundColor: "#024A59",
                }}
                className="d-inline-block border rounded-pill py-1 px-4"
              >
                About Us
              </p>
              <h1 className="mb-4">Get to Know About Us!</h1>
              <p style={{ color: "black" }}>
                Statify Solutions Limited is a reliable provider of Enterprise
                Resource Planning System and solutions for institutions,
                businesses, and organizations.
              </p>
              <p style={{ color: "black" }} className="mb-4">
                At Statify Solutions Limited, we pride ourselves on being a
                trusted partner for organizations looking to streamline their
                operations, improve efficiency, and achieve sustainable growth.
                With a focus on delivering cutting-edge ERP Solutions, we
                empower businesses to transform their processes and adapt
                seamlessly to the ever-evolving market landscape.
              </p>
              <p style={{ color: "black" }}>
                <i
                  style={{ color: "#FFA916" }}
                  className="far fa-check-circle me-3"
                ></i>
                Comprehensive ERP Solutions
              </p>
              <p style={{ color: "black" }}>
                <i
                  style={{ color: "#FFA916" }}
                  className="far fa-check-circle me-3"
                ></i>
                Industry Expertise
              </p>
              <p style={{ color: "black" }}>
                <i
                  style={{ color: "#FFA916" }}
                  className="far fa-check-circle me-3"
                ></i>
                Customization and Scalability
              </p>
              <p style={{ color: "black" }}>
                <i
                  style={{ color: "#FFA916" }}
                  className="far fa-check-circle me-3"
                ></i>
                End-to-End Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container-fluid  overflow-hidden my-5 px-lg-0">
        <div className="container-fluid feature px-lg-0" style={{ backgroundColor: "#024A59" }}>
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 feature-text py-5">
              <div className="p-lg-5 ps-lg-0">
                <p
                  style={{ color: "#FFA916" }}
                  className="d-inline-block border rounded-pill py-1 px-4"
                >
                  Why Choose Statify Solutions Limited
                </p>
                <p className="text-white mb-4 pb-2">
                  Choose Statify Solutions and unlock the full potential of your
                  enterprise. Experience the difference of working with a
                  partner committed to empowering your growth and transformation.
                </p>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i
                          style={{ color: "#FFA916" }}
                          className="fa fa-user-md"
                        ></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Data</p>
                        <h5 className="text-white mb-0">
                          Centralized Data Processing
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i
                          style={{ color: "#FFA916" }}
                          className="fa fa-check"
                        ></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Integration</p>
                        <h5 className="text-white mb-0">
                          Enterprise-wide Integration
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i
                          style={{ color: "#FFA916" }}
                          className="fa fa-comment-medical"
                        ></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Positive</p>
                        <h5 className="text-white mb-0">Consultation</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i
                          style={{ color: "#FFA916" }}
                          className="fa fa-headphones"
                        ></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">24 Hours</p>
                        <h5 className="text-white mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i
                          style={{ color: "#FFA916" }}
                          className="fa fa-headphones"
                        ></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Reporting</p>
                        <h5 className="text-white mb-0">Real-time Reporting</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="../assests/images/feature.jpg"
                  style={{ objectFit: "cover" }}
                  alt="Features"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="container-xxl py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-75 align-self-end"
                  src={vision}
                  alt="Vision"
                />
                <img
                  className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                  src={vision1}
                  alt="Vision"
                  style={{ marginTop: "-25%" }}
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{ backgroundColor: "#024A59", color: "white" }}
            >
              <p
                style={{
                  color: "#FFA916",
                  backgroundColor: "#024A59",
                }}
                className="d-inline-block border rounded-pill py-1 px-4"
              >
                Our Vision
              </p>
              <p className="text-white mb-4">
                To be the foremost global provider of transformative software
                solutions. We aspire to redefine the technological landscape by
                consistently delivering cutting-edge solutions that empower
                businesses to thrive in an ever-evolving digital era.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
