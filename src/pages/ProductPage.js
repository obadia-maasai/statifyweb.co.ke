import React from "react";
import "../App.css"
import business from "../assests/images/business-central-icon.png"
import dynamicsicon from "../assests/images/dynamics-icon.png"
import crm from "../assests/images/crm-icon.png"
import azure from "../assests/images/azure-icon.png"
import carousel1 from "../assests/images/carousel-1.jpg"
const ProductsPage = () => {
  return (
    <>
    
      {/* Products Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h2 style={{ color: "#FFA916" }} className="mb-3">
              Our Product
            </h2>
            <p style={{ color: "black" }}>
              Discover cutting-edge solutions designed to empower your business
              with seamless integrations and superior performance.
            </p>
          </div>
          <div className="row g-4">
            {/* Product 1 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="text-center p-4">
                <div
                  style={{ backgroundColor: "#024A59" }}
                  className="icon rounded-circle p-4 mb-3 mx-auto"
                >
                  <img
                    src={dynamicsicon}
                    alt="Microsoft Dynamics 365 Office"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <h5 style={{ color: "#FFA916" }} className="mb-3">
                  Microsoft Dynamics 365 Office
                </h5>
                <p style={{ color: "black" }}>
                  Enhance productivity and collaboration with Microsoft's suite
                  of powerful business tools.
                </p>
              </div>
            </div>
            {/* Product 2 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="text-center p-4">
                <div
                  style={{ backgroundColor: "#024A59" }}
                  className="icon rounded-circle p-4 mb-3 mx-auto"
                >
                  <img
                    src={business}
                    alt="Dynamics 365 Business Central/NAV"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <h5 style={{ color: "#FFA916" }} className="mb-3">
                  Dynamics 365 Business Central/NAV
                </h5>
                <p style={{ color: "black" }}>
                  Streamline operations and drive growth with this all-in-one
                  business management solution.
                </p>
              </div>
            </div>
            {/* Product 3 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="text-center p-4">
                <div
                  style={{ backgroundColor: "#024A59" }}
                  className="icon rounded-circle p-4 mb-3 mx-auto"
                >
                  <img
                    src={crm}
                    alt="Microsoft Dynamics CRM"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <h5 style={{ color: "#FFA916" }} className="mb-3">
                  Microsoft Dynamics CRM
                </h5>
                <p style={{ color: "black" }}>
                  Build and maintain strong customer relationships with
                  intuitive CRM tools.
                </p>
              </div>
            </div>
            {/* Product 4 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="text-center p-4">
                <div
                  style={{ backgroundColor: "#024A59" }}
                  className="icon rounded-circle p-4 mb-3 mx-auto"
                >
                  <img
                    src={azure}
                    alt="Microsoft Azure"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <h5 style={{ color: "#FFA916" }} className="mb-3">
                  Microsoft Azure
                </h5>
                <p style={{ color: "black" }}>
                  Leverage the power of the cloud to achieve unparalleled
                  scalability and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products End */}

      {/* Section with Background */}
      <div
        className="container-xxxl py-5"
        style={ {
          backgroundImage: {carousel1},
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div
          className="container-xxxl"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "8px",
            padding: "30px",
          }}
        >
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p
              style={{
                color: "#FFA916",
                backgroundColor: "#024A59",
              }}
              className="d-inline-block border rounded-pill py-1 px-4"
            >
              Our Products
            </p>
            <h1 style={{ color: "#024A59" }}>
              Empowering Businesses, Transforming Potential
            </h1>
            <p style={{ color: "black" }}>
              Delivering Innovative Solutions Across Industries
            </p>
          </div>
          <div className="row g-4">
            {/* Finance and Accounting */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="text-center p-4">
                <h5 style={{ color: "#FFA916" }} className="mb-3">
                  Finance and Accounting
                </h5>
                <p style={{ color: "black" }}>
                  Managing financial transactions, general ledger, budgeting,
                  and compliance to streamline operations.
                </p>
              </div>
            </div>
            {/* Supply Chain */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="text-center p-4">
                <h5 style={{ color: "#FFA916" }} className="mb-3">
                  Supply Chain and Inventory
                </h5>
                <p style={{ color: "black" }}>
                  Optimizing procurement, inventory control, and logistics to
                  ensure seamless business operations.
                </p>
              </div>
            </div>
            {/* HR and Payroll */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="text-center p-4">
                <h5 style={{ color: "#FFA916" }} className="mb-3">
                  HR and Payroll
                </h5>
                <p style={{ color: "black" }}>
                  Automating employee records, performance, leave, and payroll
                  for better workforce management.
                </p>
              </div>
            </div>
          </div>

          {/* Industries Section */}
          <div className="row mt-5">
            <h2
              className="text-center mb-4"
              style={{ color: "#024A59" }}
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
                className={`col-md-3 ${
                  index >= 4 ? "mt-3" : ""
                }`}
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
    </>
  );
};

export default ProductsPage;
