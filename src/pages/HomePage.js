import React from "react";
import "../App.css"
import carousel1 from "../assests/images/carousel-1.jpg"
import carousel2 from "../assests/images/carousel-1.jpg"
import carousel3 from "../assests/images/about-1.jpg"
import carousel4 from "../assests/images/header-page.jpg"
// import carousel5 from "../assests/images/about-2.jpg"
import CoreValues from "./CoreValuesPage";
import business from "../assests/images/business-central-icon.png"
import dynamicsicon from "../assests/images/dynamics-icon.png"
import crm from "../assests/images/crm-icon.png"
import azure from "../assests/images/azure-icon.png"
import WhyChooseUs from "./WhyChooseUs";
import about1 from "../assests/images/about-1.jpg"
import about2 from "../assests/images/about-2.jpg"



const HomePage = () => {
  return (
    <div>
      {/* Carousel Start */}
     
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active" style={{ position: 'relative' }}>
          <img
            src={carousel4}
            className="d-block w-100"
            alt="First slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <div
            className="carousel-caption"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '20px',
              borderRadius: '10px',
              animation: 'fadeIn 1.5s ease-in-out',
            }}
          >
            <h5 style={{ color: '#FFA916' }}>Statify Solutions Limited</h5>
            <p>Transforming Businesses with Reliable Solutions</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item" style={{ position: 'relative' }}>
          <img
            src={carousel4}
            className="d-block w-100"
            alt="Second slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <div
            className="carousel-caption"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '20px',
              borderRadius: '10px',
              animation: 'fadeIn 1.5s ease-in-out',
            }}
          >
            <h5 style={{ color: '#FFA916' }}>Innovative Solutions</h5>
            <p>Empowering Growth Through Technology</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item" style={{ position: 'relative' }}>
          <img
            src={carousel3}
            className="d-block w-100"
            alt="Third slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <div
            className="carousel-caption"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '20px',
              borderRadius: '10px',
              animation: 'fadeIn 1.5s ease-in-out',
            }}
          >
            <h5 style={{ color: '#FFA916' }}>Data</h5>
            <p>
              Characteristics Of Enterprise Resource Planning Availability of Data in Real Time
            </p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item" style={{ position: 'relative' }}>
          <img
            src={carousel2}
            className="d-block w-100"
            alt="Fourth slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <div
            className="carousel-caption"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <h5 style={{ color: '#FFA916' }}>Automation</h5>
            <p>ERP systems automate repetitive tasks reducing human error.</p>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="carousel-item" style={{ position: 'relative' }}>
          <img
            src={carousel1}
            className="d-block w-100"
            alt="Fifth slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <div
            className="carousel-caption"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <h5 style={{ color: '#FFA916' }}>Standardized Processes</h5>
            <p>ERP systems enforce standardized workflows</p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>




{/* Carousel End */}


      {/* Header Start */}
      <div
        className="container-fluid header p-0 mb-5"
        style={{
          height: "100vh",
          maxHeight: "400px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#024A59",
        }}
      >
        <div
          className="row w-100"
          style={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          {/* Text Section */}
          <div
            className="col-lg-8 col-md-10"
            style={{
              // paddingTop: "40px",
              backgroundColor: "#024A59",
              maxHeight: "200px",
              borderRadius: "15px",
            }}
          >
            <h1
              className="display-4 text-white mb-4"
              style={{
                fontWeight: "bold",
                lineHeight: "1.2",
                fontSize: "2rem",
                color: "#FFA916",
              }}
            >
              Welcome To{" "}
              <span style={{ color: "#FFA916" }}>
                Statify Solutions Limited
              </span>
            </h1>
            <p
              style={{
                color: "#F8F9FA",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                opacity: "0.9",
              }}
            >
              Discover smarter ways to grow your business with Statify
              Solutions. We design tailored ERP solutions to address your
              unique challenges, enhance efficiency, and support your evolving
              needs.
            </p>
            <p
              style={{
                color: "#F8F9FA",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                opacity: "0.9",
              }}
            >
              With industry expertise and a commitment to excellence, we deliver
              scalable, innovative technology that drives your success. <br />
              <strong style={{ color: "#FFA916" }}>
                Partner with Statify Solutions
              </strong>{" "}
              — your trusted ally for unlocking new possibilities and achieving
              your business goals.
            </p>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* //about  start*/}
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
      {/* about end  */}
      {/* services start */}
      <>
      <div style={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}>
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          margin: "0 auto 50px",
          maxWidth: "600px",
        }}
      >
        <p
          style={{
            color: "#FFA916",
            backgroundColor: "#024A59",
            display: "inline-block",
            borderRadius: "50px",
            padding: "5px 20px",
          }}
        >
          Services
        </p>
        <h1 style={{ color: "#000", fontWeight: "bold" }}>
          Service That We Offer
        </h1>
      </div>

      {/* Services Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {/* Service 1 */}
        <div
          style={{
            backgroundColor: "#024A59",
            borderRadius: "10px",
            padding: "30px",
            color: "#fff",
            flex: "1 1 calc(33% - 20px)",
            maxWidth: "400px",
            minWidth: "300px",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <i
              className="fa fa-network-wired"
              style={{ fontSize: "24px", color: "#28a745" }}
            ></i>
          </div>
          <h4 style={{ color: "#FFA916", marginBottom: "15px" }}>
            Integrated ERP Solutions
          </h4>
          <p style={{ lineHeight: "1.8" }}>
            Our integrated ERP solutions are designed to streamline your
            business operations, from finance and human resources to supply
            chain management and customer relationship management. With our
            expertise in Microsoft ERP systems, we offer tailored solutions that
            meet your specific business requirements.
          </p>
        </div>

        {/* Service 2 */}
        <div
          style={{
            backgroundColor: "#024A59",
            borderRadius: "10px",
            padding: "30px",
            color: "#fff",
            flex: "1 1 calc(33% - 20px)",
            maxWidth: "400px",
            minWidth: "300px",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <i
              className="fa fa-chart-line"
              style={{ fontSize: "24px", color: "#17a2b8" }}
            ></i>
          </div>
          <h4 style={{ color: "#FFA916", marginBottom: "15px" }}>
            Data Driven Business Solutions
          </h4>
          <p style={{ lineHeight: "1.8" }}>
            Harness the power of data with our advanced analytics and digital
            transformation services. We help you unlock actionable insights from
            your data assets, enabling data-driven decision-making and
            innovation.
          </p>
        </div>

        {/* Service 3 */}
        <div
          style={{
            backgroundColor: "#024A59",
            borderRadius: "10px",
            padding: "30px",
            color: "#fff",
            flex: "1 1 calc(33% - 20px)",
            maxWidth: "400px",
            minWidth: "300px",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <i
              className="fa fa-lightbulb"
              style={{ fontSize: "24px", color: "#FFC107" }}
            ></i>
          </div>
          <h4 style={{ color: "#FFA916", marginBottom: "15px" }}>
            Strategic Business Consultancy
          </h4>
          <p style={{ lineHeight: "1.8" }}>
            Our strategic business consultancy services are aimed at helping you
            navigate the complexities of the business landscape and make
            informed decisions that drive growth and profitability.
          </p>
        </div>
      </div>
    </div>
      <CoreValues/>
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

      <WhyChooseUs/>
      </>
      {/* services end */}
    </div>
  );
};

export default HomePage;
