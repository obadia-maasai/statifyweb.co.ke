import { Link, useLocation } from 'react-router-dom'; // Adjust the path if necessary
import logo from "../assests/images/logo.jpg";
import "../App.css";

const Navbar = () => {
  const location = useLocation();

  const getLinkStyle = (path) => ({
    fontWeight: 'bolder',
    color: location.pathname === path ? '#FFA916' : 'inherit', // Highlight active link
    textDecoration: location.pathname === path ? 'underline' : 'none', // Optional underline
  });

  return (
    <nav
      className="navbar navbar-expand-lg navbar-white p-0 wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        backgroundColor: 'white',
        position: 'sticky', // Ensures the navbar sticks
        top: '0', // Sticks at the top
        zIndex: '1000', // Makes sure it stays on top of other content
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <img
            src={logo}
            alt="Statify Logo"
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'contain',
              marginRight: '10px',
              borderRadius: '50%',
            }}
          />
          <h1 style={{ color: '#024A59', fontSize: 'larger' }}>
            Statify Solutions Limited <br />
            <small style={{ fontSize: 'small' }}>Innovating Business Excellence</small>
          </h1>
        </Link>

        {/* Navbar toggler button for mobile view */}
        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarCollapse"
  style={{ color: '#FFA916', border: 'none' }} // Remove incorrect border property
>
  <span
    style={{
      backgroundColor: '#FFA916',
      display: 'block',
      height: '3px',
      width: '25px', // Adjust the width as needed
      margin: '5px auto', // Center the lines and space them
    }}
  ></span>
 
  


          <span style={{ backgroundColor: '#FFA916', display: 'block', height: '3px', margin: '5px 0' }}></span>
          <span style={{ backgroundColor: '#FFA916', display: 'block', height: '3px', margin: '5px 0' }}></span>
          <span style={{ backgroundColor: '#FFA916', display: 'block', height: '3px', margin: '5px 0' }}></span>
        </button>

        {/* Navbar menu items, which will collapse on smaller screens */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto p-4 p-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={getLinkStyle("/")}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" style={getLinkStyle("/products")}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" style={getLinkStyle("/services")}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={getLinkStyle("/about")}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={getLinkStyle("/contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
