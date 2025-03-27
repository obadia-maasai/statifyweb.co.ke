// import React from "react";
// import "../App.css"
// import business from "../assests/images/business-central-icon.png"
// import dynamicsicon from "../assests/images/dynamics-icon.png"
// import crm from "../assests/images/crm-icon.png"
// import azure from "../assests/images/azure-icon.png"
// import carousel1 from "../assests/images/carousel-1.jpg"
// import header from "../assests/images/about-1.jpg"

// const ProductsPage = () => {
//   return (
//     <>
//     <div
//   className="container-fluid page-header py-1 mb-2 wow fadeIn justify-content-center text-center"
//   data-wow-delay="0.1s"
//   style={{
//     backgroundImage: `url(${header})`, 
//     backgroundSize: "cover", 
//     backgroundPosition: "center", 
//     backgroundRepeat: "no-repeat", 
//     height: "200px", 
//   }}
// >
//   <div className="container py-2">
//     <h1
//       className="display-5 mb-2 animated slideInDown"
//       style={{ color: '#FFA916',fontWeight:"bolder" }}
//     >
//       Products
//     </h1>
//     <nav
//       aria-label="breadcrumb"
//       className="animated slideInDown"
//     >
//       <ol className="breadcrumb text-uppercase mb-0 justify-content-center text-center">
//         <li className="breadcrumb-item">
//           <a href="/" style={{ color: '#FFA916',fontWeight:"bold" }}>
//             Home
//           </a>
//         </li>
//         <li className="breadcrumb-item">
//           <p href="#" style={{ color: '#FFA916', marginBottom: 0,fontWeight:"bold" }}>
//             Pages
//           </p>
//         </li>
//         <li
//           className="breadcrumb-item  active"
//           aria-current="page"
//           style={{ color: '#024A59',fontWeight:"bold" }}
//         >
//           Products
//         </li>
//       </ol>
//     </nav>
//   </div>
// </div>

//      {/* Products Start */}
// <div className="container-xxl py-5">
//   <div className="container">
//     <div
//       className="text-center mx-auto mb-5"
//       style={{
//         maxWidth: "600px",
//         animation: "fadeInUp 1s ease-in-out",
//       }}
//     >
//       <h2
//         style={{
//           color: "#FFA916",
//           marginBottom: "20px",
//           animation: "fadeInUp 1.2s ease-in-out",
//         }}
//       >
//         Our Product
//       </h2>
//       <p
//         style={{
//           color: "black",
//           animation: "fadeInUp 1.5s ease-in-out",
//         }}
//       >
//         Discover cutting-edge solutions designed to empower your business with
//         seamless integrations and superior performance.
//       </p>
//     </div>
//     <div className="row g-4">
//       {/* Product 1 */}
//       <div
//         className="col-lg-3 col-md-6"
//         style={{
//           animation: "fadeInUp 1s ease-in-out",
//           animationDelay: "0.1s",
//         }}
//       >
//         <div className="text-center p-4">
//           <div
//             style={{
//               backgroundColor: "#024A59",
//               animation: "scaleUp 1s ease-in-out",
//               animationDelay: "0.2s",
//             }}
//             className="icon rounded-circle p-4 mb-3 mx-auto"
//           >
//             <img
//               src={dynamicsicon}
//               alt="Microsoft Dynamics 365 Office"
//               style={{ width: "40px", height: "40px" }}
//             />
//           </div>
//           <h5
//             style={{
//               color: "#FFA916",
//               marginBottom: "15px",
//               animation: "fadeInUp 1.3s ease-in-out",
//             }}
//           >
//             Microsoft Dynamics 365 Office
//           </h5>
//           <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
//             Enhance productivity and collaboration with Microsoft's suite of
//             powerful business tools.
//           </p>
//         </div>
//       </div>
//       {/* Repeat similar pattern for the other products */}
//       {/* Product 2 */}
//       <div
//         className="col-lg-3 col-md-6"
//         style={{
//           animation: "fadeInUp 1s ease-in-out",
//           animationDelay: "0.3s",
//         }}
//       >
//         <div className="text-center p-4">
//           <div
//             style={{
//               backgroundColor: "#024A59",
//               animation: "scaleUp 1.2s ease-in-out",
//               animationDelay: "0.4s",
//             }}
//             className="icon rounded-circle p-4 mb-3 mx-auto"
//           >
//             <img
//               src={business}
//               alt="Dynamics 365 Business Central/NAV"
//               style={{ width: "40px", height: "40px" }}
//             />
//           </div>
//           <h5
//             style={{
//               color: "#FFA916",
//               marginBottom: "15px",
//               animation: "fadeInUp 1.3s ease-in-out",
//             }}
//           >
//             Dynamics 365 Business Central/NAV
//           </h5>
//           <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
//             Streamline operations and drive growth with this all-in-one
//             business management solution.
//           </p>
//         </div>
//       </div>
//       {/* Product 3 */}
//       <div
//         className="col-lg-3 col-md-6"
//         style={{
//           animation: "fadeInUp 1s ease-in-out",
//           animationDelay: "0.5s",
//         }}
//       >
//         <div className="text-center p-4">
//           <div
//             style={{
//               backgroundColor: "#024A59",
//               animation: "scaleUp 1.2s ease-in-out",
//               animationDelay: "0.6s",
//             }}
//             className="icon rounded-circle p-4 mb-3 mx-auto"
//           >
//             <img
//               src={crm}
//               alt="Microsoft Dynamics CRM"
//               style={{ width: "40px", height: "40px" }}
//             />
//           </div>
//           <h5
//             style={{
//               color: "#FFA916",
//               marginBottom: "15px",
//               animation: "fadeInUp 1.3s ease-in-out",
//             }}
//           >
//             Microsoft Dynamics CRM
//           </h5>
//           <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
//             Build and maintain strong customer relationships with intuitive CRM
//             tools.
//           </p>
//         </div>
//       </div>
//       {/* Product 4 */}
//       <div
//         className="col-lg-3 col-md-6"
//         style={{
//           animation: "fadeInUp 1s ease-in-out",
//           animationDelay: "0.7s",
//         }}
//       >
//         <div className="text-center p-4">
//           <div
//             style={{
//               backgroundColor: "#024A59",
//               animation: "scaleUp 1.2s ease-in-out",
//               animationDelay: "0.8s",
//             }}
//             className="icon rounded-circle p-4 mb-3 mx-auto"
//           >
//             <img
//               src={azure}
//               alt="Microsoft Azure"
//               style={{ width: "40px", height: "40px" }}
//             />
//           </div>
//           <h5
//             style={{
//               color: "#FFA916",
//               marginBottom: "15px",
//               animation: "fadeInUp 1.3s ease-in-out",
//             }}
//           >
//             Microsoft Azure
//           </h5>
//           <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
//             Leverage the power of the cloud to achieve unparalleled scalability
//             and performance.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// {/* Products End */}

// {/* Animations */}
// <style>
//   {`
//     @keyframes fadeInUp {
//       from {
//         opacity: 0;
//         transform: translateY(20px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }

//     @keyframes scaleUp {
//       from {
//         transform: scale(0.9);
//       }
//       to {
//         transform: scale(1);
//       }
//     }
//   `}
// </style>
// {/* Section with Background */}
// <div
//   className="container-xxxl py-5"
//   style={{
//     backgroundImage: `url(${carousel1})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover", // Ensures the image covers the container
//     backgroundPosition: "center", // Centers the image
//     animation: "fadeIn 1.5s ease-in-out",
//   }}
  
// >
//   <div
//     className="container-xxxl"
//     style={{
//       backgroundColor: "rgba(255, 255, 255, 0.8)",
//       borderRadius: "8px",
//       padding: "30px",
//       animation: "slideIn 2s ease-in-out",
//     }}
//   >
//     <div
//       className="text-center mx-auto mb-5 wow fadeInUp"
//       data-wow-delay="0.1s"
//       style={{
//         maxWidth: "600px",
//         animation: "fadeInUp 1s ease-in-out",
//       }}
//     >
//       <p
//         style={{
//           color: "#FFA916",
//           backgroundColor: "#024A59",
//           animation: "fadeIn 1.2s ease-in-out",
//         }}
//         className="d-inline-block border rounded-pill py-1 px-4"
//       >
//         Our Products
//       </p>
//       <h1
//         style={{
//           color: "#024A59",
//           animation: "fadeIn 1.4s ease-in-out",
//         }}
//       >
//         Empowering Businesses, Transforming Potential
//       </h1>
//       <p
//         style={{
//           color: "black",
//           animation: "fadeIn 1.6s ease-in-out",
//         }}
//       >
//         Delivering Innovative Solutions Across Industries
//       </p>
//     </div>
//     <div className="row g-4">
//       {/* Finance and Accounting */}
//       <div
//         className="col-lg-4 wow fadeInUp"
//         data-wow-delay="0.1s"
//         style={{
//           animation: "fadeInUp 1.3s ease-in-out",
//         }}
//       >
//         <div className="text-center p-4">
//           <h5 style={{ color: "#FFA916" }} className="mb-3">
//             Finance and Accounting
//           </h5>
//           <p style={{ color: "black" }}>
//             Managing financial transactions, general ledger, budgeting, and
//             compliance to streamline operations.
//           </p>
//         </div>
//       </div>
//       {/* Supply Chain */}
//       <div
//         className="col-lg-4 wow fadeInUp"
//         data-wow-delay="0.3s"
//         style={{
//           animation: "fadeInUp 1.5s ease-in-out",
//         }}
//       >
//         <div className="text-center p-4">
//           <h5 style={{ color: "#FFA916" }} className="mb-3">
//             Supply Chain and Inventory
//           </h5>
//           <p style={{ color: "black" }}>
//             Optimizing procurement, inventory control, and logistics to ensure
//             seamless business operations.
//           </p>
//         </div>
//       </div>
//       {/* HR and Payroll */}
//       <div
//         className="col-lg-4 wow fadeInUp"
//         data-wow-delay="0.5s"
//         style={{
//           animation: "fadeInUp 1.7s ease-in-out",
//         }}
//       >
//         <div className="text-center p-4">
//           <h5 style={{ color: "#FFA916" }} className="mb-3">
//             HR and Payroll
//           </h5>
//           <p style={{ color: "black" }}>
//             Automating employee records, performance, leave, and payroll for
//             better workforce management.
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Industries Section */}
//     <div className="row mt-5">
//       <h2
//         className="text-center mb-4"
//         style={{
//           color: "#024A59",
//           animation: "fadeInDown 1.5s ease-in-out",
//         }}
//       >
//         Industries
//       </h2>
//       {[
//         "Healthcare",
//         "Finance",
//         "Manufacturing",
//         "Supply Chain",
//         "Human Resource",
//         "Education",
//         "NGO",
//         "Tours & Travel",
//       ].map((industry, index) => (
//         <div
//           key={index}
//           className={`col-md-3 ${index >= 4 ? "mt-3" : ""}`}
//           style={{
//             animation: "scaleIn 1.5s ease-in-out",
//             animationDelay: `${0.2 * (index + 1)}s`,
//           }}
//         >
//           <div className="card text-center border-0 shadow-sm">
//             <div className="card-body">
//               <h6 style={{ color: "#024A59" }}>
//                 <i
//                   className="bi bi-check-circle-fill"
//                   style={{ color: "#FFA916" }}
//                 ></i>{" "}
//                 {industry}
//               </h6>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

// {/* Animations */}
// <style>
//   {`
//     @keyframes fadeIn {
//       from {
//         opacity: 0;
//       }
//       to {
//         opacity: 1;
//       }
//     }

//     @keyframes fadeInUp {
//       from {
//         opacity: 0;
//         transform: translateY(20px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }

//     @keyframes fadeInDown {
//       from {
//         opacity: 0;
//         transform: translateY(-20px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }

//     @keyframes scaleIn {
//       from {
//         opacity: 0;
//         transform: scale(0.9);
//       }
//       to {
//         opacity: 1;
//         transform: scale(1);
//       }
//     }

//     @keyframes slideIn {
//       from {
//         transform: translateX(-100%);
//         opacity: 0;
//       }
//       to {
//         transform: translateX(0);
//         opacity: 1;
//       }
//     }
//   `}
// </style>

//     </>
//   );
// };

// export default ProductsPage;

// import React from "react";
// import "../App.css";
// import business from "../assests/images/business-central-icon.png";
// import dynamicsicon from "../assests/images/dynamics-icon.png";
// import crm from "../assests/images/crm-icon.png";
// import azure from "../assests/images/azure-icon.png";
// // import carousel1 from "../assests/images/carousel-1.jpg";l
// import header from "../assests/images/about-1.jpg";

// const ProductsPage = () => {
//   const industries = [
//     { name: "Healthcare", icon: "bi bi-heart-pulse", image: "healthcare.jpg" },
//     { name: "Finance", icon: "bi bi-cash-coin", image: "finance.jpg" },
//     { name: "Manufacturing", icon: "bi bi-gear", image: "manufacturing.jpg" },
//     { name: "Retail", icon: "bi bi-cart", image: "retail.jpg" },
//     { name: "Education", icon: "bi bi-book", image: "education.jpg" },
//     { name: "Logistics", icon: "bi bi-truck", image: "logistics.jpg" },
//     { name: "Hospitality", icon: "bi bi-house-door", image: "hospitality.jpg" },
//     { name: "Government", icon: "bi bi-bank", image: "government.jpg" },
//   ];
//   return (
//     <>
//       {/* Page Header */}
//       <div
//         className="container-fluid page-header py-1 mb-2 wow fadeIn"
//         data-wow-delay="0.1s"
//         style={{
//           background: `linear-gradient(rgba(2, 74, 89, 0.7), rgba(2, 74, 89, 0.7)), url(${header})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "300px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center"
//         }}
//       >
//         <div className="container text-center">
//           <h1 className="display-4 text-white mb-3 animated slideInDown">
//             Our Products
//           </h1>
//           <nav aria-label="breadcrumb" className="animated slideInDown">
//             <ol className="breadcrumb justify-content-center mb-0">
//               <li className="breadcrumb-item">
//                 <a className="text-white" href="/">
//                   Home
//                 </a>
//               </li>
//               <li className="breadcrumb-item">
//                 <a className="text-white" href="/">
//                   Pages
//                 </a>
//               </li>
//               <li className="breadcrumb-item text-yellow active" style={{color:"#FFA916"}} aria-current="page">
//                 Products
//               </li>
//             </ol>
//           </nav>
//         </div>
//       </div>

//       {/* Products Section */}
//       <div className="container-xxl py-5">
//         <div className="container">
//           <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
//             <h2 className="section-title text-gradient">Our Solutions</h2>
//             <p className="lead text-muted">
//               Cutting-edge solutions designed to empower your business with seamless integrations
//               and superior performance.
//             </p>
//           </div>
//           <div className="row g-4">
//             {[
//               { img: dynamicsicon, title: "Microsoft Dynamics 365 Office", 
//                 text: "Enhance productivity and collaboration with powerful business tools." },
//               { img: business, title: "Dynamics 365 Business Central/NAV", 
//                 text: "Streamline operations and drive growth with all-in-one management." },
//               { img: crm, title: "Microsoft Dynamics CRM", 
//                 text: "Build strong customer relationships with intuitive CRM tools." },
//               { img: azure, title: "Microsoft Azure", 
//                 text: "Leverage cloud power for unparalleled scalability and performance." }
//             ].map((product, index) => (
//               <div key={index} className="col-lg-3 col-md-6">
//                 <div className="product-card animated-card">
//                   <div className="icon-box bg-primary">
//                     <img src={product.img} alt={product.title} />
//                   </div>
//                   <h5 className="mt-4">{product.title}</h5>
//                   <p className="text-muted">{product.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Feature Section */}
//       <div className="container-fluid feature-section py-5">
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="section-title text-white">Core Features</h2>
//           </div>
//           <div className="row g-4">
//             {[
//               { title: "Finance & Accounting", 
//                 text: "Comprehensive financial management solutions" },
//               { title: "Supply Chain", 
//                 text: "End-to-end supply chain optimization" },
//               { title: "HR & Payroll", 
//                 text: "Automated workforce management systems" },
//               { title: "Business Intelligence", 
//                 text: "Advanced analytics and reporting tools" }
//             ].map((feature, index) => (
//               <div key={index} className="col-lg-3 col-md-6">
//                 <div className="feature-card">
//                   <div className="feature-icon">
//                     <i className="bi bi-graph-up"></i>
//                   </div>
//                   <h5>{feature.title}</h5>
//                   <p>{feature.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Industries Section */}
//       <div
//       style={{
//         backgroundColor: "#f8f9fa",
//         padding: "60px 0",
//         animation: "fadeIn 1s ease-in-out",
//       }}
//     >
//       <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
//         <div style={{ marginBottom: "40px" }}>
//           <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
//             Industries We Serve
//           </h2>
//           <p style={{ fontSize: "1.1rem", color: "#6c757d" }}>
//             Delivering tailored solutions across multiple sectors
//           </p>
//         </div>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//             gap: "20px",
//             justifyContent: "center",
//           }}
//         >
//           {industries.map((industry, index) => (
//             <div
//               key={index}
//               style={{
//                 position: "relative",
//                 background: `url(${industry.image}) center/cover`,
//                 padding: "60px 20px",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 textAlign: "center",
//                 color: "#fff",
//                 transition: "transform 0.3s ease-in-out",
//                 cursor: "pointer",
//                 overflow: "hidden",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "0",
//                   left: "0",
//                   width: "100%",
//                   height: "100%",
//                   backgroundColor: "rgba(0, 0, 0, 0.5)",
//                   transition: "opacity 0.3s ease-in-out",
//                 }}
//               />
//               <div style={{ position: "relative", zIndex: 2 }}>
//                 <div
//                   style={{
//                     fontSize: "40px",
//                     marginBottom: "10px",
//                     animation: "bounce 1.5s infinite",
//                   }}
//                 >
//                   <i className={industry.icon}></i>
//                 </div>
//                 <h6
//                   style={{
//                     fontSize: "1.2rem",
//                     fontWeight: "bold",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   {industry.name}
//                 </h6>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>


//       {/* Styles */}
//       <style jsx>{`
//         .section-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           position: relative;
//           display: inline-block;
//         } 
          
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }

//           @keyframes bounce {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-10px); }
//           }
        

//         .section-title.text-gradient {
//           background: linear-gradient(45deg, #024A59, #FFA916);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .product-card {
//           background: white;
//           border-radius: 15px;
//           padding: 2rem;
//           margin-bottom: 1rem;
//           transition: all 0.3s ease;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.08);
//         }

//         .product-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 15px 35px rgba(0,0,0,0.1);
//         }

//         .icon-box {
//           width: 80px;
//           height: 80px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 1.5rem;
//           transition: all 0.3s ease;
//         }

//         .feature-section {
//           background: linear-gradient(45deg, #024A59, #006272);
//           color: white;
//           position: relative;
//           overflow: hidden;
//         }

//         .feature-card {
//           background: rgba(255,255,255,0.1);
//           padding: 2rem;
//           border-radius: 15px;
//           backdrop-filter: blur(10px);
//           transition: all 0.3s ease;
//         }

//         .industry-card {
//           background: #f8f9fa;
//           padding: 1.5rem;
//           border-radius: 10px;
//           text-align: center;
//           transition: all 0.3s ease;
//         }

//         .industry-card:hover {
//           background: #024A59;
//           color: white;
//           transform: translateY(-5px);
//         }

//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//           100% { transform: translateY(0px); }
//         }

//         .animated-card {
//           animation: float 4s ease-in-out infinite;
//         }

//         @media (max-width: 768px) {
//           .section-title {
//             font-size: 2rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default ProductsPage;

import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import CountUp from "react-countup";
import { Smile, CheckCircle, Users, Clock, Banknote, Stethoscope, Factory, ShoppingCart,  Book, Locate, House, MonitorPauseIcon, GitGraph, Grape, ChartBar, LineChart } from 'lucide-react';
import WhyChooseUs from "./WhyChooseUs";
import header from "../assests/images/about-1.jpg";
import business from "../assests/images/business-central-icon.png";
import dynamicsicon from "../assests/images/dynamics-icon.png";
import crm from "../assests/images/crm-icon.png";
import azure from "../assests/images/azure-icon.png";

const ProductsPage = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: industriesRef, inView: industriesInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const industries = [
    {
      name: 'Financial Services',
      background: 'linear-gradient(135deg,rgb(173, 161, 131) 0%,rgb(244, 219, 174) 100%)',
      icon: <Banknote style={{ width: 40, height: 40, color: '#024A59' }} />,
      text: 'Secure banking solutions and financial technology innovations'
    },
    {
      name: 'Healthcare',
      background: 'linear-gradient(135deg,rgb(201, 234, 241) 0%,rgb(132, 172, 180) 100%)',
      icon: <Stethoscope style={{ width: 40, height: 40, color: '#FFA916' }} />,
      text: 'Advanced medical systems and patient care technologies'
    },
    {
      name: 'Education',
      background: 'linear-gradient(135deg,rgb(173, 161, 131) 0%,rgb(244, 219, 174)  100%)',
      icon: <Book style={{ width: 40, height: 40, color: '#024A59' }} />,
      text: 'Advanced medical systems and patient care technologies'
    },
    {
      name: 'Manufacturing',
      background: 'linear-gradient(135deg,rgb(201, 234, 241) 0%,rgb(132, 172, 180) 100%)',
      icon: <Factory style={{ width: 40, height: 40, color: '#FFA916' }} />,
      text: 'Industrial automation and smart factory solutions'
    },
    {
      name: 'Retail',
      background: 'linear-gradient(135deg,rgb(173, 161, 131) 0%,rgb(244, 219, 174)  100%)',
      icon: <ShoppingCart style={{ width: 40, height: 40, color: '#024A59' }} />,
      text: 'E-commerce platforms and inventory management systems'
    },
    {
      name: 'Logistics',
      background: 'linear-gradient(135deg,rgb(201, 234, 241) 0%,rgb(132, 172, 180) 100%)',
      icon: <Locate style={{ width: 40, height: 40, color: '#FFA916' }} />,
      text: 'E-commerce platforms and inventory management systems'
    },
    {
      name: 'Government',
      background: 'linear-gradient(135deg,rgb(173, 161, 131) 0%,rgb(244, 219, 174)  100%)',
      icon: <House style={{ width: 40, height: 40, color: '#024A59' }} />,
      text: 'E-commerce platforms and inventory management systems'
    },
    {
      name: 'Human Resource',
      background: 'linear-gradient(135deg,rgb(201, 234, 241) 0%,rgb(132, 172, 180) 100%)',
      icon: <MonitorPauseIcon style={{ width: 40, height: 40, color: '#FFA916' }} />,
      text: 'E-commerce platforms and inventory management systems',
    },
  ];

  useEffect(() => {
    if (statsInView) setStatsVisible(true);
  }, [statsInView]);

  return (
    <div style={{ backgroundColor: '#f8fafc' }}>
      
       {/* Page Header */}
       <div
        className="container-fluid page-header py-1 mb-2 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          background: `linear-gradient(rgba(2, 74, 89, 0.7), rgba(2, 74, 89, 0.7)), url(${header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 text-white mb-3 animated slideInDown">
            Our Products
          </h1>
          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item text-yellow active" style={{color:"#FFA916"}} aria-current="page">
                Products
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Products Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h2 className="section-title text-gradient">Our Solutions</h2>
            <p className="lead text-muted">
              Cutting-edge solutions designed to empower your business with seamless integrations
              and superior performance.
            </p>
          </div>
          <div className="row g-4" >
            
            {[
              { img: dynamicsicon, title: "Microsoft Dynamics 365 Office", 
                text: "Enhance productivity and collaboration with powerful business tools." },
              { img: business, title: "Dynamics 365 Business Central/NAV", 
                text: "Streamline operations and drive growth with all-in-one management." },
              { img: crm, title: "Microsoft Dynamics CRM", 
                text: "Build strong customer relationships with intuitive CRM tools." },
              { img: azure, title: "Microsoft Azure", 
                text: "Leverage cloud power for unparalleled scalability and performance." }
            ].map((product, index) => (
              <div key={index} className="col-lg-3 col-md-6" > 
                <div className="product-card animated-card">
                  <div className="icon-box bg-primary">
                    <img src={product.img} alt={product.title} />
                  </div>
                  <h5 className="mt-4">{product.title}</h5>
                  <p className="text-muted">{product.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} style={{
        background: 'linear-gradient(45deg, #024A59, #006272)',
        padding: '4rem 2rem',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            {[
              { number: 150, title: "Happy Clients", icon: <Smile size={40} color="#FFA916" /> },
              { number: 95, title: "Projects Completed", icon: <CheckCircle size={40} color="#FFA916" /> },
              { number: 300, title: "Team Members", icon: <Users size={40} color="#FFA916" /> },
              { number: 24, title: "Support Hours", icon: <Clock size={40} color="#FFA916" /> }
            ].map((stat, index) => (
              <div key={index} style={{
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${index * 0.2}s`,
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                backdropFilter: 'blur(5px)'
              }}>
                <div style={{
                  background: 'rgba(255, 169, 22, 0.1)',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  {stat.icon}
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFA916', marginBottom: '0.5rem' }}>
                  {statsVisible ? <CountUp end={stat.number} duration={2.5} /> : stat.number}
                  {stat.title === 'Projects Completed' && '%'}
                  {['Happy Clients', 'Team Members'].includes(stat.title) && '+'}
                </h2>
                <p style={{ fontSize: '1.1rem', margin: 0 }}>{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div ref={industriesRef} style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Industries We Serve
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
              Tailored solutions for diverse industry needs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            padding: '1rem'
          }}>
            {industries.map((industry, index) => (
              <div key={index} style={{
                opacity: industriesInView ? 1 : 0,
                transform: industriesInView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${index * 0.2}s`
              }}>
                <div style={{
                  background: industry.background,
                  borderRadius: '16px',
                  padding: '2rem',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
                  }
                }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    {industry.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                    {industry.name}
                  </h3>
                  <p style={{ color: '#475569', lineHeight: 1.6 }}>
                    {industry.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="container-fluid feature-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-white">Core Features</h2>
          </div>
          <div className="row g-4" >
            {[
              { title: "Finance & Accounting", 
                text: "Comprehensive financial management solutions",
                icon: "Finance"
               },
                
              { title: "Supply Chain", 
                text: "End-to-end supply chain optimization",
                icon: "Finance" },
              { title: "HR & Payroll", 
                text: "Automated workforce management systems" ,              
                icon: "Finance"},
              { title: "Business Intelligence", 
                icon: "Finance",
                text: "Advanced analytics and reporting tools" }
            ].map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-6" >
                <div className="feature-card" style={{  background: 'linear-gradient(135deg,rgb(173, 161, 131) 0%,rgb(244, 219, 174) 100%)'}}>
                  <div className="feature-icon">
                    {/* <i className="bi bi-graph-up"></i> */}
                    <LineChart style={{color:'FFA16'}}></LineChart>
                  </div>
                  <h5 style={{color:'#024A59'}}>{feature.title}</h5>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <WhyChooseUs />

      <style jsx global>{`
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
          .section-title {
           font-size: 2.5rem;
           font-weight: 700;
           margin-bottom: 1rem;
           position: relative;
           display: inline-block;
         } 
          
           @keyframes fadeIn {
             from { opacity: 0; transform: translateY(20px); }
             to { opacity: 1; transform: translateY(0); }
           }

           @keyframes bounce {
             0%, 100% { transform: translateY(0); }
             50% { transform: translateY(-10px); }
           }
        

         .section-title.text-gradient {
           background: linear-gradient(45deg, #024A59, #FFA916);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
         }

         .product-card {
           background: white;
           border-radius: 15px;
           padding: 2rem;
           margin-bottom: 1rem;
           transition: all 0.3s ease;
           box-shadow: 0 10px 30px rgba(0,0,0,0.08);
         }

         .product-card:hover {
           transform: translateY(-10px);
           box-shadow: 0 15px 35px rgba(0,0,0,0.1);
         }

         .icon-box {
           width: 80px;
           height: 80px;
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           margin: 0 auto 1.5rem;
           transition: all 0.3s ease;
         }

         .feature-section {
           background: linear-gradient(45deg, #024A59, #006272);
           color: white;
           position: relative;
           overflow: hidden;
        }

         .feature-card {
          background: rgba(255,255,255,0.1);           padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
          @keyframes float {
           0% { transform: translateY(0px); }
           50% { transform: translateY(-20px); }
           100% { transform: translateY(0px); }
         }

         .animated-card {
           animation: float 4s ease-in-out infinite;
         }

         @media (max-width: 768px) {
           .section-title {
             font-size: 2rem;
           }
         product-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .icon-box {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.3s ease;
        }

        .feature-section {
          background: linear-gradient(45deg, #024A59, #FFA916);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .feature-card {
          background: rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

      `}</style>
    </div>
  );
};

export default ProductsPage;