// import React from 'react';
// import logo from "../assests/images/logo.jpg"
// import "../App.css"
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';



// const Footer = () => {
//   return (
//     <div className="container-fluid text-light footer mt-5 pt-5" style={{ backgroundColor: '#024A59' }}>
//       <div className="container py-5">
//         <div className="row g-5">
//           <div className="col-lg-3 col-md-6">
//             <h5 className="text-light mb-4">Address</h5>
//             <p><i className="fa fa-map-marker-alt me-3"></i>Ngong, Uptown Mall</p>
//             <p><i className="fa fa-phone-alt me-3"></i>
//               <a href="https://wa.me/254796265933" style={{ textDecoration: 'none', color: 'inherit' }}>+254796265933</a><br />
//               <a href="https://wa.me/254728813009" style={{ textDecoration: 'none', color: 'inherit' }}>+254728813009</a>
//             </p>
//             <p><i className="fa fa-envelope me-3"></i>info@statify.co.ke</p>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//   <button
//     onClick={() => window.open('https://facebook.com', '_blank')}
//     style={{
//       backgroundColor: '#FFA916',
//       border: 'none',
//       borderRadius: '50%',
//       width: '25px',
//       height: '25px',
//       color: '#024A59',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       cursor: 'pointer',
//     }}
//   >
//     <FontAwesomeIcon icon={faFacebookF} />
//   </button>
//   <button
//     onClick={() => window.open('https://twitter.com', '_blank')}
//     style={{
//       backgroundColor: '#FFA916',
//       border: 'none',
//       borderRadius: '50%',
//       width: '25px',
//       height: '25px',
//       color: '#024A59',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       cursor: 'pointer',
//     }}
//   >
//     <FontAwesomeIcon icon={faTwitter} />
//   </button>
//   <button
//     onClick={() => window.open('https://linkedin.com', '_blank')}
//     style={{
//       backgroundColor: '#FFA916',
//       border: 'none',
//       borderRadius: '50%',
//       width: '25px',
//       height: '25px',
//       color: '#024A59',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       cursor: 'pointer',
//     }}
//   >
//     <FontAwesomeIcon icon={faLinkedinIn} />
//   </button>
//   <button
//     onClick={() => window.open('https://instagram.com', '_blank')}
//     style={{
//       backgroundColor: '#FFA916',
//       border: 'none',
//       borderRadius: '50%',
//       width: '25px',
//       height: '25px',
//       color: '#024A59',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       cursor: 'pointer',
//     }}
//   >
//     <FontAwesomeIcon icon={faInstagram} />
//   </button>
// </div>

//           </div>
//           <div className="col-lg-3 col-md-6">
//             <h5 className="mb-4">Services</h5>
//             <p style={{ color: "#FFA916" }} className="btn btn-link" href="#">
//   Strategic Business Consultancy
// </p>

//             <p style={{ color: "#FFA916" }} className="btn btn-link" href="#">Data-Driven Business Solutions</p>
//             <p style={{ color: "#FFA916" }} className="btn btn-link">Integrated ERP Solutions</p>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <h5 className="text-light mb-4">Quick Links</h5>
//             <a style={{ color: "#FFA916" }} className="btn btn-link" href="/">Home</a>
//             <a style={{ color: "#FFA916" }} className="btn btn-link" href="/about">About Us</a>
//             <a style={{ color: "#FFA916" }} className="btn btn-link" href="/contact">Contact Us</a>
//             <a style={{ color: "#FFA916" }} className="btn btn-link" href="/services">Our Services</a>
//             <a style={{ color: "#FFA916" }} className="btn btn-link" href="/products">Our Products</a>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <img src={logo} alt="Statify Logo" style={{ width: '140px', height: 'auto', marginBottom: '10px' }} />
//             <p style={{ color: '#FFA916' }}>Statify Solutions Limited</p>
//             <p style={{ fontSize: 'x-small' }}>Innovating Business Excellence</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from 'react';
import logo from "../assests/images/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const socialButtonStyle = {
    backgroundColor: '#FFA916',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    color: '#024A59',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#024A59',
      color: '#FFA916'
    }
  };

  const linkStyle = {
    color: "#FFA916",
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    padding: '4px 0',
    display: 'block',
    ':hover': {
      color: '#ffffff',
      transform: 'translateX(5px)'
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#024A59',
      padding: '60px 0 0',
      position: 'relative',
      borderTop: '3px solid #FFA916'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          paddingBottom: '60px'
        }}>
          {/* Address Column */}
          <div>
            <h5 style={{ color: '#FFA916', fontSize: '1.25rem', marginBottom: '20px' }}>Address</h5>
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fa fa-map-marker-alt" style={{ color: '#FFA916', fontSize: '1.2rem' }}></i>
              <p style={{ color: '#ffffff', margin: 0 }}>Ngong, Uptown Mall</p>
            </div>
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fa fa-phone-alt" style={{ color: '#FFA916', fontSize: '1.2rem' }}></i>
              <div>
                <a href="https://wa.me/254796265933" style={{ ...linkStyle, display: 'block' }}>+254796265933</a>
                <a href="https://wa.me/254728813009" style={{ ...linkStyle, display: 'block' }}>+254728813009</a>
              </div>
            </div>
            <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fa fa-envelope" style={{ color: '#FFA916', fontSize: '1.2rem' }}></i>
              <a href="mailto:info@statify.co.ke" style={linkStyle}>info@statify.co.ke</a>
            </div>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              {[
                { icon: faFacebookF, url: 'https://facebook.com' },
                { icon: faTwitter, url: 'https://twitter.com' },
                { icon: faLinkedinIn, url: 'https://linkedin.com' },
                { icon: faInstagram, url: 'https://instagram.com' }
              ].map((social, index) => (
                <button
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  style={socialButtonStyle}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </button>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h5 style={{ color: '#FFA916', fontSize: '1.25rem', marginBottom: '20px' }}>Services</h5>
            {[
              'Strategic Business Consultancy',
              'Data-Driven Business Solutions',
              'Integrated ERP Solutions'
            ].map((service, index) => (
              <a key={index} href="/services" style={linkStyle}>{service}</a>
            ))}
          </div>

          {/* Quick Links Column */}
          <div>
            <h5 style={{ color: '#FFA916', fontSize: '1.25rem', marginBottom: '20px' }}>Quick Links</h5>
            {[
              { text: 'Home', url: '/' },
              { text: 'About Us', url: '/about' },
              { text: 'Contact Us', url: '/contact' },
              { text: 'Our Services', url: '/services' },
              { text: 'Our Products', url: '/products' }
            ].map((link, index) => (
              <a key={index} href={link.url} style={linkStyle}>{link.text}</a>
            ))}
          </div>

          {/* Logo Column */}
          <div>
            <img 
              src={logo} 
              alt="Statify Logo" 
              style={{ 
                width: '140px', 
                height: 'auto', 
                marginBottom: '20px',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <p style={{ 
              color: '#FFA916', 
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Statify Solutions Limited
            </p>
            <p style={{ 
              color: 'rgba(255,255,255,0.7)', 
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}>
              Innovating Business Excellence
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        {/* <div style={{
          borderTop: '1px solid rgba(255,169,22,0.2)',
          padding: '20px 0',
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <p style={{ 
            color: 'rgba(255,255,255,0.7)', 
            margin: 0,
            fontSize: '0.9rem'
          }}>
            © {new Date().getFullYear()} Statify Solutions. All rights reserved.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;