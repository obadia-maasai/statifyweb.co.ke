import React from 'react';
import logo from "../assests/images/logo.jpg"
import "../App.css"
const Footer = () => {
  return (
    <div className="container-fluid text-light footer mt-5 pt-5" style={{ backgroundColor: '#024A59' }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Address</h5>
            <p><i className="fa fa-map-marker-alt me-3"></i>Ngong, Uptown Mall</p>
            <p><i className="fa fa-phone-alt me-3"></i>
              <a href="https://wa.me/254796265933" style={{ textDecoration: 'none', color: 'inherit' }}>+254796265933</a><br />
              <a href="https://wa.me/254728813009" style={{ textDecoration: 'none', color: 'inherit' }}>+254728813009</a>
            </p>
            <p><i className="fa fa-envelope me-3"></i>info@statify.co.ke</p>
            <div className="d-flex pt-2">
              <p className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-twitter"></i></p>
              <p className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-facebook-f"></i></p>
              <p className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-youtube"></i></p>
              <p className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Services</h5>
            <p style={{ color: "#FFA916" }} className="btn btn-link" href="#">
  Strategic Business Consultancy
</p>

            <p style={{ color: "#FFA916" }} className="btn btn-link" href="#">Data-Driven Business Solutions</p>
            <p style={{ color: "#FFA916" }} className="btn btn-link">Integrated ERP Solutions</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <a style={{ color: "#FFA916" }} className="btn btn-link" href="/">Home</a>
            <a style={{ color: "#FFA916" }} className="btn btn-link" href="/about">About Us</a>
            <a style={{ color: "#FFA916" }} className="btn btn-link" href="/contact">Contact Us</a>
            <a style={{ color: "#FFA916" }} className="btn btn-link" href="/services">Our Services</a>
            <a style={{ color: "#FFA916" }} className="btn btn-link" href="/products">Our Products</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <img src={logo} alt="Statify Logo" style={{ width: '140px', height: 'auto', marginBottom: '10px' }} />
            <p style={{ color: '#FFA916' }}>Statify Solutions Limited</p>
            <p style={{ fontSize: 'x-small' }}>Innovating Business Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
