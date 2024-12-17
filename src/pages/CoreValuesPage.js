import React from "react";
import "../App.css"
const CoreValues = () => {
  return (
    <div style={{ padding: "50px 0", backgroundColor: "#f9f9f9" }}>
      <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
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
            Our Core Values
          </p>
          <h1>Innovate Beyond, Empower Within</h1>
          <p style={{ color: "black" }}>
            The Essence of Excellence at Statify Solutions Limited
          </p>
        </div>

        {/* Core Values Carousel */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1rem",
            flexWrap: "wrap",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Innovation */}
          <div
            style={{
              textAlign: "center",
              flex: "1",
              padding: "1rem",
              borderRadius: "8px",
              maxWidth: "300px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                backgroundColor: "#024A59",
                borderRadius: "50%",
                display: "inline-block",
                padding: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <h5 style={{ color: "#FFA916", margin: 0 }}>Innovation</h5>
            </div>
            <p style={{ color: "black", lineHeight: "1.6" }}>
              We embrace a culture of continuous innovation, constantly pushing
              the boundaries to develop cutting-edge solutions that empower our
              clients to stay ahead in a rapidly evolving business landscape.
            </p>
          </div>

          {/* Integrity and Accountability */}
          <div
            style={{
              textAlign: "center",
              flex: "1",
              padding: "1rem",
              borderRadius: "8px",
              maxWidth: "300px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                backgroundColor: "#024A59",
                borderRadius: "50%",
                display: "inline-block",
                padding: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <h5 style={{ color: "#FFA916", margin: 0 }}>
                Integrity and Accountability
              </h5>
            </div>
            <p style={{ color: "black", lineHeight: "1.6" }}>
              Integrity is the foundation of our interactions, both within our
              team and with our clients. We uphold the highest ethical standards
              in all our endeavors, fostering trust and transparency.
            </p>
          </div>

          {/* Exquisite Client Empowerment */}
          <div
            style={{
              textAlign: "center",
              flex: "1",
              padding: "1rem",
              borderRadius: "8px",
              maxWidth: "300px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                backgroundColor: "#024A59",
                borderRadius: "50%",
                display: "inline-block",
                padding: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <h5 style={{ color: "#FFA916", margin: 0 }}>
                Exquisite Client Empowerment
              </h5>
            </div>
            <p style={{ color: "black", lineHeight: "1.6" }}>
              Our dedication to Exquisite Client Empowerment is the cornerstone
              of our success. We go beyond meeting needs; we empower our clients
              to thrive, creating lasting partnerships where success is a shared
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
