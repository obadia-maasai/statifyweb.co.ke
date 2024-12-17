import React from "react";
import "../App.css"
const Services = () => {
  return (
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
    </>
  );
};

export default Services;
