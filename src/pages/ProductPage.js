import React from "react";
import "../App.css"
import business from "../assests/images/business-central-icon.png"
import dynamicsicon from "../assests/images/dynamics-icon.png"
import crm from "../assests/images/crm-icon.png"
import azure from "../assests/images/azure-icon.png"
import carousel1 from "../assests/images/carousel-1.jpg"
import header from "../assests/images/about-1.jpg"
const ProductsPage = () => {
  return (
    <>
    <div
  className="container-fluid page-header py-1 mb-2 wow fadeIn justify-content-center text-center"
  data-wow-delay="0.1s"
  style={{
    backgroundImage: `url(${header})`, // Replace 'header' with the correct image path
    backgroundSize: "cover", // Ensures the image covers the entire background
    backgroundPosition: "center", // Centers the background image
    backgroundRepeat: "no-repeat", // Prevents tiling of the image
    height: "200px", // Reduced height to make it slimmer
  }}
>
  <div className="container py-2">
    <h1
      className="display-5 mb-2 animated slideInDown"
      style={{ color: '#FFA916',fontWeight:"bolder" }}
    >
      Products
    </h1>
    <nav
      aria-label="breadcrumb"
      className="animated slideInDown"
    >
      <ol className="breadcrumb text-uppercase mb-0 justify-content-center text-center">
        <li className="breadcrumb-item">
          <a href="/" style={{ color: '#FFA916',fontWeight:"bold" }}>
            Home
          </a>
        </li>
        <li className="breadcrumb-item">
          <p href="#" style={{ color: '#FFA916', marginBottom: 0,fontWeight:"bold" }}>
            Pages
          </p>
        </li>
        <li
          className="breadcrumb-item  active"
          aria-current="page"
          style={{ color: '#024A59',fontWeight:"bold" }}
        >
          Products
        </li>
      </ol>
    </nav>
  </div>
</div>

     {/* Products Start */}
<div className="container-xxl py-5">
  <div className="container">
    <div
      className="text-center mx-auto mb-5"
      style={{
        maxWidth: "600px",
        animation: "fadeInUp 1s ease-in-out",
      }}
    >
      <h2
        style={{
          color: "#FFA916",
          marginBottom: "20px",
          animation: "fadeInUp 1.2s ease-in-out",
        }}
      >
        Our Product
      </h2>
      <p
        style={{
          color: "black",
          animation: "fadeInUp 1.5s ease-in-out",
        }}
      >
        Discover cutting-edge solutions designed to empower your business with
        seamless integrations and superior performance.
      </p>
    </div>
    <div className="row g-4">
      {/* Product 1 */}
      <div
        className="col-lg-3 col-md-6"
        style={{
          animation: "fadeInUp 1s ease-in-out",
          animationDelay: "0.1s",
        }}
      >
        <div className="text-center p-4">
          <div
            style={{
              backgroundColor: "#024A59",
              animation: "scaleUp 1s ease-in-out",
              animationDelay: "0.2s",
            }}
            className="icon rounded-circle p-4 mb-3 mx-auto"
          >
            <img
              src={dynamicsicon}
              alt="Microsoft Dynamics 365 Office"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <h5
            style={{
              color: "#FFA916",
              marginBottom: "15px",
              animation: "fadeInUp 1.3s ease-in-out",
            }}
          >
            Microsoft Dynamics 365 Office
          </h5>
          <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
            Enhance productivity and collaboration with Microsoft's suite of
            powerful business tools.
          </p>
        </div>
      </div>
      {/* Repeat similar pattern for the other products */}
      {/* Product 2 */}
      <div
        className="col-lg-3 col-md-6"
        style={{
          animation: "fadeInUp 1s ease-in-out",
          animationDelay: "0.3s",
        }}
      >
        <div className="text-center p-4">
          <div
            style={{
              backgroundColor: "#024A59",
              animation: "scaleUp 1.2s ease-in-out",
              animationDelay: "0.4s",
            }}
            className="icon rounded-circle p-4 mb-3 mx-auto"
          >
            <img
              src={business}
              alt="Dynamics 365 Business Central/NAV"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <h5
            style={{
              color: "#FFA916",
              marginBottom: "15px",
              animation: "fadeInUp 1.3s ease-in-out",
            }}
          >
            Dynamics 365 Business Central/NAV
          </h5>
          <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
            Streamline operations and drive growth with this all-in-one
            business management solution.
          </p>
        </div>
      </div>
      {/* Product 3 */}
      <div
        className="col-lg-3 col-md-6"
        style={{
          animation: "fadeInUp 1s ease-in-out",
          animationDelay: "0.5s",
        }}
      >
        <div className="text-center p-4">
          <div
            style={{
              backgroundColor: "#024A59",
              animation: "scaleUp 1.2s ease-in-out",
              animationDelay: "0.6s",
            }}
            className="icon rounded-circle p-4 mb-3 mx-auto"
          >
            <img
              src={crm}
              alt="Microsoft Dynamics CRM"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <h5
            style={{
              color: "#FFA916",
              marginBottom: "15px",
              animation: "fadeInUp 1.3s ease-in-out",
            }}
          >
            Microsoft Dynamics CRM
          </h5>
          <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
            Build and maintain strong customer relationships with intuitive CRM
            tools.
          </p>
        </div>
      </div>
      {/* Product 4 */}
      <div
        className="col-lg-3 col-md-6"
        style={{
          animation: "fadeInUp 1s ease-in-out",
          animationDelay: "0.7s",
        }}
      >
        <div className="text-center p-4">
          <div
            style={{
              backgroundColor: "#024A59",
              animation: "scaleUp 1.2s ease-in-out",
              animationDelay: "0.8s",
            }}
            className="icon rounded-circle p-4 mb-3 mx-auto"
          >
            <img
              src={azure}
              alt="Microsoft Azure"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <h5
            style={{
              color: "#FFA916",
              marginBottom: "15px",
              animation: "fadeInUp 1.3s ease-in-out",
            }}
          >
            Microsoft Azure
          </h5>
          <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
            Leverage the power of the cloud to achieve unparalleled scalability
            and performance.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Products End */}

{/* Animations */}
<style>
  {`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scaleUp {
      from {
        transform: scale(0.9);
      }
      to {
        transform: scale(1);
      }
    }
  `}
</style>
{/* Section with Background */}
<div
  className="container-xxxl py-5"
  style={{
    backgroundImage: `url(${carousel1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // Ensures the image covers the container
    backgroundPosition: "center", // Centers the image
    animation: "fadeIn 1.5s ease-in-out",
  }}
  
>
  <div
    className="container-xxxl"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: "8px",
      padding: "30px",
      animation: "slideIn 2s ease-in-out",
    }}
  >
    <div
      className="text-center mx-auto mb-5 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{
        maxWidth: "600px",
        animation: "fadeInUp 1s ease-in-out",
      }}
    >
      <p
        style={{
          color: "#FFA916",
          backgroundColor: "#024A59",
          animation: "fadeIn 1.2s ease-in-out",
        }}
        className="d-inline-block border rounded-pill py-1 px-4"
      >
        Our Products
      </p>
      <h1
        style={{
          color: "#024A59",
          animation: "fadeIn 1.4s ease-in-out",
        }}
      >
        Empowering Businesses, Transforming Potential
      </h1>
      <p
        style={{
          color: "black",
          animation: "fadeIn 1.6s ease-in-out",
        }}
      >
        Delivering Innovative Solutions Across Industries
      </p>
    </div>
    <div className="row g-4">
      {/* Finance and Accounting */}
      <div
        className="col-lg-4 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{
          animation: "fadeInUp 1.3s ease-in-out",
        }}
      >
        <div className="text-center p-4">
          <h5 style={{ color: "#FFA916" }} className="mb-3">
            Finance and Accounting
          </h5>
          <p style={{ color: "black" }}>
            Managing financial transactions, general ledger, budgeting, and
            compliance to streamline operations.
          </p>
        </div>
      </div>
      {/* Supply Chain */}
      <div
        className="col-lg-4 wow fadeInUp"
        data-wow-delay="0.3s"
        style={{
          animation: "fadeInUp 1.5s ease-in-out",
        }}
      >
        <div className="text-center p-4">
          <h5 style={{ color: "#FFA916" }} className="mb-3">
            Supply Chain and Inventory
          </h5>
          <p style={{ color: "black" }}>
            Optimizing procurement, inventory control, and logistics to ensure
            seamless business operations.
          </p>
        </div>
      </div>
      {/* HR and Payroll */}
      <div
        className="col-lg-4 wow fadeInUp"
        data-wow-delay="0.5s"
        style={{
          animation: "fadeInUp 1.7s ease-in-out",
        }}
      >
        <div className="text-center p-4">
          <h5 style={{ color: "#FFA916" }} className="mb-3">
            HR and Payroll
          </h5>
          <p style={{ color: "black" }}>
            Automating employee records, performance, leave, and payroll for
            better workforce management.
          </p>
        </div>
      </div>
    </div>

    {/* Industries Section */}
    <div className="row mt-5">
      <h2
        className="text-center mb-4"
        style={{
          color: "#024A59",
          animation: "fadeInDown 1.5s ease-in-out",
        }}
      >
        Industries
      </h2>
      {[
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Supply Chain",
        "Human Resource",
        "Education",
        "NGO",
        "Tours & Travel",
      ].map((industry, index) => (
        <div
          key={index}
          className={`col-md-3 ${index >= 4 ? "mt-3" : ""}`}
          style={{
            animation: "scaleIn 1.5s ease-in-out",
            animationDelay: `${0.2 * (index + 1)}s`,
          }}
        >
          <div className="card text-center border-0 shadow-sm">
            <div className="card-body">
              <h6 style={{ color: "#024A59" }}>
                <i
                  className="bi bi-check-circle-fill"
                  style={{ color: "#FFA916" }}
                ></i>{" "}
                {industry}
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Animations */}
<style>
  {`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes slideIn {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `}
</style>

    </>
  );
};

export default ProductsPage;
