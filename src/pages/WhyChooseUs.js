import React from 'react';
import feature from "../assests/images/feature.jpg"
import "../App.css"

const WhyChooseUs = () => {
  return (
    <div className="container-fluid overflow-hidden my-5 px-lg-0">
      <div className="container-xxl feature px-lg-0" style={{ backgroundColor: '#024A59' }}>
        <div className="row g-0 mx-lg-0">
          {/* Left Text Section */}
          <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="p-lg-5 ps-lg-0">
              <p
                style={{ color: '#FFA916' }}
                className="d-inline-block border rounded-pill py-1 px-4"
              >
                Why Choose Statify Limited Company
              </p>
              <p className="text-white mb-4 pb-2">
                Statify Solutions Limited is a reliable provider of Enterprise Resource Planning
                System and solutions for institutions, businesses, and organizations.
              </p>
              <div className="row g-4">
                {/* Feature 1 */}
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: '55px', height: '55px' }}
                    >
                      <i className="fa fa-user-md" style={{ color: '#FFA916' }}></i>
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Experience</p>
                      <h5 className="text-white mb-0">Industry Expertise</h5>
                    </div>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: '55px', height: '55px' }}
                    >
                      <i className="fa fa-check" style={{ color: '#FFA916' }}></i>
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Quality</p>
                      <h5 className="text-white mb-0">Comprehensive & Quality ERP Solution</h5>
                    </div>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: '55px', height: '55px' }}
                    >
                      <i className="fa fa-comment-medical" style={{ color: '#FFA916' }}></i>
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Positive</p>
                      <h5 className="text-white mb-0">Flexibility and Scalability</h5>
                    </div>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: '55px', height: '55px' }}
                    >
                      <i className="fa fa-headphones" style={{ color: '#FFA916' }}></i>
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">24 Hours</p>
                      <h5 className="text-white mb-0">Support</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Image Section */}
          <div
            className="col-lg-6 pe-lg-0 wow fadeIn"
            data-wow-delay="0.5s"
            style={{ minHeight: '400px' }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src={feature}
                style={{ objectFit: 'cover' }}
                alt="Feature"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
