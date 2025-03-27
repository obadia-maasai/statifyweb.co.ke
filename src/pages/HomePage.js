import React from "react";
import "../App.css"
import carousel1 from "../assests/images/carousel-1.jpg"

import business from "../assests/images/business-central-icon.png"
import dynamicsicon from "../assests/images/dynamics-icon.png"
import crm from "../assests/images/crm-icon.png"
import azure from "../assests/images/azure-icon.png"

import ErpImg3 from "../assests/images/ErpImg3.jpg";
import WhyChooseUs from "./WhyChooseUs";




const HomePage = () => {
  return (
    <div>
      <style>
        {`
          .homepage-container {
            display: flex;
          }

          .image-section {
            width: 50%;
            height: 100%;
          }

          .image {
            padding:20px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .content-section {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
            
          }

          .content-wrapper {
            max-width: 70%;
            text-align: left;
          }

          .title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .description {
            font-size: 1.125rem;
            color: #024A59;
            margin-bottom: 1.5rem;
          }

          .learn-more {
            background-color: #FFA916;
            color: #fff;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .learn-more:hover {
            background-color: #FFA916;
          }
        `}
      </style>

      <div className="homepage-container">
        {/* Left Section - Image */}
        <div className="image-section">
          <img
            src={ErpImg3}
            alt="ERP System Overview"
            className="image"
          />
        </div>

        {/* Right Section - Content */}
        <div className="content-section">
          <div className="content-wrapper">
          <h1
              className="display-4 text-white mb-4"
              style={{
                fontWeight: "bold",
                lineHeight: "1.2",
                fontSize: "2rem",
                color: "#FFA916",
              }}
            >
              
              <span style={{ color: "#FFA916" }}  >
              Welcome To Statify Solutions Limited
              </span>
            </h1>
            <p className="description">
              Discover smarter ways to grow your business. We design tailored ERP solutions to address your
              unique challenges, enhance efficiency, and support your evolving
              needs.
            </p>
            <button className="learn-more">Know More</button>
          </div>
        </div>
      </div>

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
              <span style={{ color: "#FFA916" }}>
              Company Overview
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
             Statify Solutions Limited is a reliable provider of Enterprise Resource Planning System and solutions for institutions, businesses, and organizations.
            At Statify Solutions Limited, we pride ourselves on being a trusted partner for organizations looking to streamline their operations, improve efficiency, and achieve sustainable growth. With a focus on delivering cutting-edge ERP Solutions, we empower businesses to transform their processes and adapt seamlessly to the ever-evolving market landscape.
            </p>
          </div>
        </div>
      </div>
      {/* Header End */}
      
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
            <h2
              style={{
                color: "#FFA916",
                backgroundColor: "#024A59",
                display: "inline-block",
                borderRadius: "50px",
                padding: "5px 20px",
              }}
            >
              Our Services
            </h2>
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
                Our Products
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
<WhyChooseUs/>
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
      {/* services end */}
    </div>
  );
};

export default HomePage;

// import { Link } from 'react-router-dom';
// import {
//   Briefcase,
//   ChartBar,
//   Lightbulb,
//   Network,
//   CheckCircle,
//   Building,
//   Settings
// } from 'lucide-react';
// import ErpImg3 from "../assests/images/ErpImg3.jpg";
// import business from "../assests/images/business-central-icon.png";
// import dynamicsicon from "../assests/images/dynamics-icon.png";
// import crm from "../assests/images/crm-icon.png";
// import azure from "../assests/images/azure-icon.png";
// import WhyChooseUs from "./WhyChooseUs";
// import { faGear } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

// const HomePage = () => {
//   const services = [
//     { icon: Network, title: "Integrated ERP Solutions", text: "Streamline operations from finance to CRM with tailored Microsoft solutions" },
//   { icon: ChartBar, title: "Data Driven Solutions", text: "Harness advanced analytics for data-driven decision making" },
//   { icon: Lightbulb, title: "Strategic Consultancy", text: "Navigate business complexities with growth-focused strategies" },
//   { icon: Settings, title: "Custom Solutions", text: "Tailored systems for your unique business requirements" } 
//   ];

//   const products = [
//     { icon: dynamicsicon, title: "Dynamics 365 Office", text: "Enhance productivity with powerful business tools" },
//     { icon: business, title: "Business Central/NAV", text: "All-in-one business management solution" },
//     { icon: crm, title: "Dynamics CRM", text: "Build strong customer relationships" },
//     { icon: azure, title: "Microsoft Azure", text: "Cloud solutions for unmatched scalability" }
//   ];

//   const industries = [
//     "Healthcare", "Finance", "Manufacturing", "Supply Chain",
//     "Human Resource", "Education", "NGO", "Tours & Travel"
//   ];

//   return (
//     <div className="overflow-hidden">
//       {/* Hero Section */}
//       <section 
//         className="relative bg-cover bg-center h-[700px] animate-fade-in"
//         style={{ backgroundImage: `url(${ErpImg3})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-[#024A59]/90 to-[#FFA916]/70" />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//           <div className="text-white max-w-2xl animate-slide-up">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               Transform Your Business <br/>
//               <span className="text-[#FFA916]">With Smart ERP Solutions</span>
//             </h1>
//             <p className="text-xl mb-8 md:text-2xl md:leading-relaxed">
//               Streamline operations and drive growth with cutting-edge ERP systems
//               tailored to your organizational needs.
//             </p>
//             <Link
//               to="/contact"
//               className="inline-block bg-[#FFA916] text-[#024A59] px-8 py-4 rounded-xl text-lg 
//               font-semibold hover:bg-[#f4a110] transition-all shadow-lg hover:scale-105"
//             >
//               Start Digital Transformation
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Company Overview */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl font-bold text-[#024A59] mb-4">
//               About <span className="text-[#FFA916]">Statify Solutions</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We empower organizations to streamline operations and achieve sustainable growth through
//               cutting-edge ERP solutions and digital transformation strategies.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative animate-slide-left">
//               <div className="bg-[#024A59]/10 rounded-2xl p-8">
//                 <div className="bg-gray-200 h-96 rounded-2xl shadow-xl" />
//               </div>
//             </div>

//             <div className="space-y-6 animate-slide-right">
//               {[
//                 "15+ Years Industry Experience",
//                 "Certified Microsoft Partners",
//                 "100+ Successful Implementations",
//                 "24/7 Technical Support"
//               ].map((item, index) => (
//                 <div key={index} className="flex items-start gap-4">
//                   <div className="bg-[#FFA916] p-2 rounded-lg">
//                     <CheckCircle className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-800">{item}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-[#f8fafb]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl font-bold text-[#024A59] mb-4">
//               Our <span className="text-[#FFA916]">Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Comprehensive solutions for digital transformation and business growth
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all 
//                 animate-card-pop delay-100 hover:scale-105"
//               >
//                 <div className="bg-[#024A59] w-max p-4 rounded-xl mb-6">
//                   <service.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{service.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl font-bold text-[#024A59] mb-4">
//               Microsoft <span className="text-[#FFA916]">Products</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Leverage world-class solutions for enterprise management and productivity
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {products.map((product, index) => (
//               <div
//                 key={index}
//                 className="bg-[#f8fafb] p-8 rounded-2xl text-center hover:shadow-lg transition-all
//                 animate-card-pop delay-200 hover:scale-105"
//               >
//                 <div className="bg-white p-4 rounded-full w-max mx-auto mb-6">
//                   <img src={product.icon} alt={product.title} className="h-12 w-12" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">{product.title}</h3>
//                 <p className="text-gray-600 text-sm">{product.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries Section */}
//       <section className="py-20 bg-[#024A59]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Industries <span className="text-[#FFA916]">We Serve</span>
//             </h2>
//             <p className="text-xl text-gray-200 max-w-2xl mx-auto">
//               Customized solutions for diverse industry verticals
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {industries.map((industry, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 
//                 transition-all animate-fade-in delay-300"
//               >
//                 <div className="flex items-center gap-3">
//                   <Building className="h-6 w-6 text-[#FFA916]" />
//                   <h3 className="text-lg font-semibold text-white">{industry}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-24 bg-gradient-to-br from-[#024A59] to-[#01303b]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="animate-scale-in">
//             <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
//               Start your digital transformation journey with our expert guidance and
//               cutting-edge ERP solutions.
//             </p>
//             <Link
//               to="/contact"
//               className="bg-[#FFA916] text-[#024A59] px-10 py-4 rounded-xl text-lg 
//               font-bold hover:bg-[#f4a110] transition-all shadow-lg flex items-center 
//               justify-center space-x-2 mx-auto hover:scale-105"
//             >
//               <Briefcase className="w-6 h-6" />
//               <span>Schedule Free Consultation</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <WhyChooseUs />

//       <style jsx global>{`
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes slide-up {
//           from { transform: translateY(50px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }

//         @keyframes slide-left {
//           from { transform: translateX(-50px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }

//         @keyframes slide-right {
//           from { transform: translateX(50px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }

//         @keyframes card-pop {
//           from { transform: scale(0.9); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }

//         @keyframes scale-in {
//           from { transform: scale(0.95); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out;
//         }

//         .animate-slide-left {
//           animation: slide-left 0.8s ease-out;
//         }

//         .animate-slide-right {
//           animation: slide-right 0.8s ease-out;
//         }

//         .animate-card-pop {
//           animation: card-pop 0.6s ease-out;
//         }

//         .animate-scale-in {
//           animation: scale-in 0.6s ease-out;
//         }

//         .delay-100 {
//           animation-delay: 100ms;
//         }

//         .delay-200 {
//           animation-delay: 200ms;
//         }

//         .delay-300 {
//           animation-delay: 300ms;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;
