import React from "react";
import "../App.css"
import carousel1 from "../assests/images/carousel-1.jpg"
import carousel2 from "../assests/images/carousel-1.jpg"
import Services from "./ServicesPage";
import CoreValues from "./CoreValuesPage";
import ProductsPage from "./ProductPage";
import WhyChooseUs from "./WhyChooseUs";
import image1 from "../assests/images/carousel-2.jpg"
import image2 from "../assests/images/carousel-1.jpg"



const HomePage = () => {
  return (
    <div>
      {/* Carousel Start */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active" style={{ position: "relative" }}>
            <img
              src={carousel1}
              className="d-block w-100"
              alt="First slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "20px",
                borderRadius: "10px",
                animation: "fadeIn 1.5s ease-in-out",
              }}
            >
              <h5 style={{ color: "#FFA916" }}>Statify Solutions Limited</h5>
              <p style={{ color: "white" }}>
                Transforming Businesses with Reliable Solutions
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" style={{ position: "relative" }}>
            <img
              src={carousel2}
              className="d-block w-100"
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "20px",
                borderRadius: "10px",
                animation: "fadeIn 1.5s ease-in-out",
              }}
            >
              <h5 style={{ color: "#FFA916" }}>Innovative Solutions</h5>
              <p style={{ color: "white" }}>
                Empowering Growth Through Technology
              </p>
            </div>
          </div>
          <div className="carousel-item" style={{ position: "relative" }}>
            <img
              src={carousel2}
              className="d-block w-100"
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "20px",
                borderRadius: "10px",
                animation: "fadeIn 1.5s ease-in-out",
              }}
            >
              <h5 style={{ color: "#FFA916" }}>Innovative Solutions</h5>
              <p style={{ color: "white" }}>
                Empowering Growth Through Technology
              </p>
            </div>
          </div>
          <div className="carousel-item" style={{ position: "relative" }}>
            <img
              src={carousel2}
              className="d-block w-100"
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "20px",
                borderRadius: "10px",
                animation: "fadeIn 1.5s ease-in-out",
              }}
            >
              <h5 style={{ color: "#FFA916" }}>Innovative Solutions</h5>
              <p style={{ color: "white" }}>
                Empowering Growth Through Technology
              </p>
            </div>
          </div>
          <div className="carousel-item" style={{ position: "relative" }}>
            <img
              src={carousel2}
              className="d-block w-100"
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "20px",
                borderRadius: "10px",
                animation: "fadeIn 1.5s ease-in-out",
              }}
            >
              <h5 style={{ color: "#FFA916" }}>Innovative Solutions</h5>
              <p style={{ color: "white" }}>
                Empowering Growth Through Technology
              </p>
            </div>
          </div>
          <div className="carousel-item" style={{ position: "relative" }}>
            <img
              src={carousel2}
              className="d-block w-100"
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "20px",
                borderRadius: "10px",
                animation: "fadeIn 1.5s ease-in-out",
              }}
            >
              <h5 style={{ color: "#FFA916" }}>Innovative Solutions</h5>
              <p style={{ color: "white" }}>
                Empowering Growth Through Technology
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
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
              padding: "40px",
              backgroundColor: "#024A59",
              maxHeight: "400px",
              borderRadius: "15px",
            }}
          >
            <h1
              className="display-4 text-white mb-4"
              style={{
                fontWeight: "bold",
                lineHeight: "1.2",
                fontSize: "2.8rem",
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
      <section
      style={{
        backgroundColor: "#fff",
        padding: "50px 0",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Left Side - Images */}
      <div
        style={{
          flex: "1",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          minWidth: "300px",
        }}
      >
        <div>
          <img
            src={image1}
            alt="Team Working"
            style={{
              width: "250px",
              height: "auto",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Team Collaboration"
            style={{
              width: "250px",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div
        style={{
          flex: "1",
          padding: "20px",
          maxWidth: "600px",
          textAlign: "left",
        }}
      >
        <div
          style={{
            backgroundColor: "#024A59",
            display: "inline-block",
            padding: "8px 15px",
            borderRadius: "20px",
            color: "#fff",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          About Us
        </div>
        <h2
          style={{
            color: "#024A59",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Get To Know About Us!
        </h2>
        <p
          style={{
            color: "#333",
            lineHeight: "1.8",
            marginBottom: "20px",
          }}
        >
          Statify Solutions Limited is a reliable provider of Enterprise Resource
          Planning System and solutions for institutions, businesses, and
          organizations.
        </p>
        <p
          style={{
            color: "#333",
            lineHeight: "1.8",
            marginBottom: "20px",
          }}
        >
          At Statify Solutions Limited, we pride ourselves on being a trusted
          partner for organizations looking to streamline their operations,
          improve efficiency, and achieve sustainable growth. With a focus on
          delivering cutting-edge ERP Solutions, we empower businesses to
          transform their processes and adapt seamlessly to the ever-evolving
          market landscape.
        </p>
        {/* Bullet Points */}
        <ul style={{ listStyle: "none", padding: "0", color: "#024A59" }}>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <span
              style={{
                color: "#024A59",
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              ✔
            </span>{" "}
            Comprehensive ERP Solutions
          </li>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <span
              style={{
                color: "#024A59",
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              ✔
            </span>{" "}
            Industry Expertise
          </li>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <span
              style={{
                color: "#024A59",
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              ✔
            </span>{" "}
            Customization and Scalability
          </li>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <span
              style={{
                color: "#024A59",
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              ✔
            </span>{" "}
            End-to-End Support
          </li>
        </ul>
      </div>
    </section>
      {/* about end  */}
      {/* services start */}
      <>
      <Services/>
      <CoreValues/>
      <ProductsPage/>
      <WhyChooseUs/>
      </>
      {/* services end */}
    </div>
  );
};

export default HomePage;
