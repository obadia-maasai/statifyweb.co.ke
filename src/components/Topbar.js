import React from 'react';
import "../App.css"
// import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
      <div
        style={{ backgroundColor: '#024A59', color: '#FFA916' }}
        className="row gx-0 d-none d-lg-flex"
      >
        {/* Left Section */}
        <div className="col-lg-7 px-5 text-start">
          {/* Email Section */}
          <div className="h-100 d-inline-flex py-3 me-4">
            <small style={{ color: '#FFA916' }} className="far fa-envelope text-primary me-2"></small>
            <small>
              <a
                href="mailto:info@statify.co.ke"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                info@statify.co.ke
              </a>
            </small>
          </div>

          {/* Location Section */}
          <div className="h-100 d-inline-flex  py-3">
            <small style={{ color: '#FFA916' }} className="fa fa-map-marker-alt text-primary me-2"></small>
            <small>Ngong, Uptown Mall</small>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-5 px-5 text-end">
          {/* Phone Numbers */}
          <div className="h-100 d-inline-flex py-3 me-4">
            <small style={{ color: '#FFA916' }} className="fa fa-phone-alt text-primary me-2"></small>
            <small>
              <p
                onClick={() => window.open('https://wa.me/254796265933', '_blank')}
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                +254796265933
              </p>
              <br />
              <p
                onClick={() => window.open('https://wa.me/254728813009', '_blank')}
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                +254728813009
              </p>
            </small>
          </div>

          {/* Social Media Icons */}
          <div className="h-100 d-inline-flex align-items-center">
            <button
              onClick={() => window.open('https://facebook.com', '_blank')}
              style={{ color: 'white' }}
              className="btn btn-sm-square rounded-circle bg-yellow text-primary me-1"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              onClick={() => window.open('https://twitter.com', '_blank')}
              style={{ color: 'white' }}
              className="btn btn-sm-square rounded-circle bg-yellow text-primary me-1"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              onClick={() => window.open('https://linkedin.com', '_blank')}
              style={{ color: 'white' }}
              className="btn btn-sm-square rounded-circle bg-yellow  me-1"
            >
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button
              onClick={() => window.open('https://instagram.com', '_blank')}
              style={{ color: 'white' }}
              className="btn btn-sm-square rounded-circle bg-yellow  me-0"
            >
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
