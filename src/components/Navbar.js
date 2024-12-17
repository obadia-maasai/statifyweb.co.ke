// import { Link } from 'react-router-dom';
import logo from "../assests/images/logo.jpg"
import "../App.css"
import { Link } from 'react-router-dom'; // Adjust the path if necessary

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top p-0" style={{ backgroundColor: 'white' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          {/* Corrected Logo Path */}
          <img
            src={logo}
            alt="Statify Logo"
            style={{
              width: '60px', // Adjust size for better visibility
              height: '60px', // Ensure proper height
              objectFit: 'contain', // Prevent stretching
              marginRight: '10px',
              borderRadius: '50%', // Optional: Make it circular if required
            }}
          />
          <h1 style={{ color: '#024A59', fontSize: 'larger' }}>
            Statify Solutions Limited <br />
            <small style={{ fontSize: 'small' }}>Innovating Business Excellence</small>
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          style={{ color: '#FFA916', border: 'none' }}
        >
          <span style={{ backgroundColor: '#FFA916', display: 'block', height: '3px', margin: '5px 0' }}></span>
          <span style={{ backgroundColor: '#FFA916', display: 'block', height: '3px', margin: '5px 0' }}></span>
          <span style={{ backgroundColor: '#FFA916', display: 'block', height: '3px', margin: '5px 0' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto p-4 p-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ fontWeight: 'bolder' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" style={{ fontWeight: 'bolder' }}>Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" style={{ fontWeight: 'bolder' }}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ fontWeight: 'bolder' }}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ fontWeight: 'bolder' }}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
