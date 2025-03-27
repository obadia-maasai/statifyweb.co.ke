// import React from "react";
// import "../App.css"
// import carousel1 from "../assests/images/carousel-1.jpg"

// import business from "../assests/images/business-central-icon.png"
// import dynamicsicon from "../assests/images/dynamics-icon.png"
// import crm from "../assests/images/crm-icon.png"
// import azure from "../assests/images/azure-icon.png"

// import ErpImg3 from "../assests/images/ErpImg3.jpg";
// import WhyChooseUs from "./WhyChooseUs";

// const HomePage = () => {
//   return (
//     <div>
//       <style>
//         {`
//           .homepage-container {
//             display: flex;
//           }

//           .image-section {
//             width: 50%;
//             height: 100%;
//           }

//           .image {
//             padding:20px;
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//           }

//           .content-section {
//             width: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             background-color: #ffffff;
            
//           }

//           .content-wrapper {
//             max-width: 70%;
//             text-align: left;
//           }

//           .title {
//             font-size: 2.5rem;
//             font-weight: bold;
//             margin-bottom: 1rem;
//           }

//           .description {
//             font-size: 1.125rem;
//             color: #024A59;
//             margin-bottom: 1.5rem;
//           }

//           .learn-more {
//             background-color: #FFA916;
//             color: #fff;
//             padding: 0.75rem 1.5rem;
//             border-radius: 0.5rem;
//             cursor: pointer;
//             transition: background-color 0.3s ease;
//           }

//           .learn-more:hover {
//             background-color: #FFA916;
//           }
//         `}
//       </style>

//       <div className="homepage-container">
//         {/* Left Section - Image */}
//         <div className="image-section">
//           <img
//             src={ErpImg3}
//             alt="ERP System Overview"
//             className="image"
//           />
//         </div>

//         {/* Right Section - Content */}
//         <div className="content-section">
//           <div className="content-wrapper">
//           <h1
//               className="display-4 text-white mb-4"
//               style={{
//                 fontWeight: "bold",
//                 lineHeight: "1.2",
//                 fontSize: "2rem",
//                 color: "#FFA916",
//               }}
//             >
              
//               <span style={{ color: "#FFA916" }}  >
//               Welcome To Statify Solutions Limited
//               </span>
//             </h1>
//             <p className="description">
//               Discover smarter ways to grow your business. We design tailored ERP solutions to address your
//               unique challenges, enhance efficiency, and support your evolving
//               needs.
//             </p>
//             <button className="learn-more">Know More</button>
//           </div>
//         </div>
//       </div>

//       {/* Header Start */}
//       <div
//         className="container-fluid header p-0 mb-5"
//         style={{
//           height: "100vh",
//           maxHeight: "400px",
//           position: "relative",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "#024A59",
//         }}
//       >
//         <div
//           className="row w-100"
//           style={{
//             height: "100%",
//             alignItems: "center",
//             justifyContent: "center",
//             textAlign: "center",
//             padding: "0 20px",
//           }}
//         >
//           {/* Text Section */}
//           <div
//             className="col-lg-8 col-md-10"
//             style={{
//               // paddingTop: "40px",
//               backgroundColor: "#024A59",
//               maxHeight: "200px",
//               borderRadius: "15px",
//             }}
//           >
//             <h1
//               className="display-4 text-white mb-4"
//               style={{
//                 fontWeight: "bold",
//                 lineHeight: "1.2",
//                 fontSize: "2rem",
//                 color: "#FFA916",
//               }}
//             >
//               <span style={{ color: "#FFA916" }}>
//               Company Overview
//               </span>
//             </h1>
//             <p
//               style={{
//                 color: "#F8F9FA",
//                 fontSize: "1.1rem",
//                 lineHeight: "1.8",
//                 opacity: "0.9",
//               }}
//             >
//              Statify Solutions Limited is a reliable provider of Enterprise Resource Planning System and solutions for institutions, businesses, and organizations.
//             At Statify Solutions Limited, we pride ourselves on being a trusted partner for organizations looking to streamline their operations, improve efficiency, and achieve sustainable growth. With a focus on delivering cutting-edge ERP Solutions, we empower businesses to transform their processes and adapt seamlessly to the ever-evolving market landscape.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Header End */}
      
//       {/* services start */}
//       <>
//         <div style={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}>
//           {/* Header Section */}
//           <div
//             style={{
//               textAlign: "center",
//               margin: "0 auto 50px",
//               maxWidth: "600px",
//             }}
//           >
//             <h2
//               style={{
//                 color: "#FFA916",
//                 backgroundColor: "#024A59",
//                 display: "inline-block",
//                 borderRadius: "50px",
//                 padding: "5px 20px",
//               }}
//             >
//               Our Services
//             </h2>
//           </div>

//           {/* Services Section */}
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               gap: "20px",
//               justifyContent: "center",
//             }}
//           >
//             {/* Service 1 */}
//             <div
//               style={{
//                 backgroundColor: "#024A59",
//                 borderRadius: "10px",
//                 padding: "30px",
//                 color: "#fff",
//                 flex: "1 1 calc(33% - 20px)",
//                 maxWidth: "400px",
//                 minWidth: "300px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "65px",
//                   height: "65px",
//                   backgroundColor: "#fff",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginBottom: "20px",
//                 }}
//               >
//                 <i
//                   className="fa fa-network-wired"
//                   style={{ fontSize: "24px", color: "#28a745" }}
//                 ></i>
//               </div>
//               <h4 style={{ color: "#FFA916", marginBottom: "15px" }}>
//                 Integrated ERP Solutions
//               </h4>
//               <p style={{ lineHeight: "1.8" }}>
//                 Our integrated ERP solutions are designed to streamline your
//                 business operations, from finance and human resources to supply
//                 chain management and customer relationship management. With our
//                 expertise in Microsoft ERP systems, we offer tailored solutions that
//                 meet your specific business requirements.
//               </p>
//             </div>

//             {/* Service 2 */}
//             <div
//               style={{
//                 backgroundColor: "#024A59",
//                 borderRadius: "10px",
//                 padding: "30px",
//                 color: "#fff",
//                 flex: "1 1 calc(33% - 20px)",
//                 maxWidth: "400px",
//                 minWidth: "300px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "65px",
//                   height: "65px",
//                   backgroundColor: "#fff",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginBottom: "20px",
//                 }}
//               >
//                 <i
//                   className="fa fa-chart-line"
//                   style={{ fontSize: "24px", color: "#17a2b8" }}
//                 ></i>
//               </div>
//               <h4 style={{ color: "#FFA916", marginBottom: "15px" }}>
//                 Data Driven Business Solutions
//               </h4>
//               <p style={{ lineHeight: "1.8" }}>
//                 Harness the power of data with our advanced analytics and digital
//                 transformation services. We help you unlock actionable insights from
//                 your data assets, enabling data-driven decision-making and
//                 innovation.
//               </p>
//             </div>

//             {/* Service 3 */}
//             <div
//               style={{
//                 backgroundColor: "#024A59",
//                 borderRadius: "10px",
//                 padding: "30px",
//                 color: "#fff",
//                 flex: "1 1 calc(33% - 20px)",
//                 maxWidth: "400px",
//                 minWidth: "300px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "65px",
//                   height: "65px",
//                   backgroundColor: "#fff",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginBottom: "20px",
//                 }}
//               >
//                 <i
//                   className="fa fa-lightbulb"
//                   style={{ fontSize: "24px", color: "#FFC107" }}
//                 ></i>
//               </div>
//               <h4 style={{ color: "#FFA916", marginBottom: "15px" }}>
//                 Strategic Business Consultancy
//               </h4>
//               <p style={{ lineHeight: "1.8" }}>
//                 Our strategic business consultancy services are aimed at helping you
//                 navigate the complexities of the business landscape and make
//                 informed decisions that drive growth and profitability.
//               </p>
//             </div>
//           </div>
//         </div>
        
//         {/* Products Start */}
//         <div className="container-xxl py-5">
//           <div className="container">
//             <div
//               className="text-center mx-auto mb-5"
//               style={{
//                 maxWidth: "600px",
//                 animation: "fadeInUp 1s ease-in-out",
//               }}
//             >
//               <h2
//                 style={{
//                   color: "#FFA916",
//                   marginBottom: "20px",
//                   animation: "fadeInUp 1.2s ease-in-out",
//                 }}
//               >
//                 Our Products
//               </h2>
//               <p
//                 style={{
//                   color: "black",
//                   animation: "fadeInUp 1.5s ease-in-out",
//                 }}
//               >
//                 Discover cutting-edge solutions designed to empower your business with
//                 seamless integrations and superior performance.
//               </p>
//             </div>
//             <div className="row g-4">
//               {/* Product 1 */}
//               <div
//                 className="col-lg-3 col-md-6"
//                 style={{
//                   animation: "fadeInUp 1s ease-in-out",
//                   animationDelay: "0.1s",
//                 }}
//               >
//                 <div className="text-center p-4">
//                   <div
//                     style={{
//                       backgroundColor: "#024A59",
//                       animation: "scaleUp 1s ease-in-out",
//                       animationDelay: "0.2s",
//                     }}
//                     className="icon rounded-circle p-4 mb-3 mx-auto"
//                   >
//                     <img
//                       src={dynamicsicon}
//                       alt="Microsoft Dynamics 365 Office"
//                       style={{ width: "40px", height: "40px" }}
//                     />
//                   </div>
//                   <h5
//                     style={{
//                       color: "#FFA916",
//                       marginBottom: "15px",
//                       animation: "fadeInUp 1.3s ease-in-out",
//                     }}
//                   >
//                     Microsoft Dynamics 365 Office
//                   </h5>
//                   <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
//                     Enhance productivity and collaboration with Microsoft's suite of
//                     powerful business tools.
//                   </p>
//                 </div>
//               </div>
//               {/* Repeat similar pattern for the other products */}
//               {/* Product 2 */}
//               <div
//                 className="col-lg-3 col-md-6"
//                 style={{
//                   animation: "fadeInUp 1s ease-in-out",
//                   animationDelay: "0.3s",
//                 }}
//               >
//                 <div className="text-center p-4">
//                   <div
//                     style={{
//                       backgroundColor: "#024A59",
//                       animation: "scaleUp 1.2s ease-in-out",
//                       animationDelay: "0.4s",
//                     }}
//                     className="icon rounded-circle p-4 mb-3 mx-auto"
//                   >
//                     <img
//                       src={business}
//                       alt="Dynamics 365 Business Central/NAV"
//                       style={{ width: "40px", height: "40px" }}
//                     />
//                   </div>
//                   <h5
//                     style={{
//                       color: "#FFA916",
//                       marginBottom: "15px",
//                       animation: "fadeInUp 1.3s ease-in-out",
//                     }}
//                   >
//                     Dynamics 365 Business Central/NAV
//                   </h5>
//                   <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
//                     Streamline operations and drive growth with this all-in-one
//                     business management solution.
//                   </p>
//                 </div>
//               </div>
//               {/* Product 3 */}
//               <div
//                 className="col-lg-3 col-md-6"
//                 style={{
//                   animation: "fadeInUp 1s ease-in-out",
//                   animationDelay: "0.5s",
//                 }}
//               >
//                 <div className="text-center p-4">
//                   <div
//                     style={{
//                       backgroundColor: "#024A59",
//                       animation: "scaleUp 1.2s ease-in-out",
//                       animationDelay: "0.6s",
//                     }}
//                     className="icon rounded-circle p-4 mb-3 mx-auto"
//                   >
//                     <img
//                       src={crm}
//                       alt="Microsoft Dynamics CRM"
//                       style={{ width: "40px", height: "40px" }}
//                     />
//                   </div>
//                   <h5
//                     style={{
//                       color: "#FFA916",
//                       marginBottom: "15px",
//                       animation: "fadeInUp 1.3s ease-in-out",
//                     }}
//                   >
//                     Microsoft Dynamics CRM
//                   </h5>
//                   <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
//                     Build and maintain strong customer relationships with intuitive CRM
//                     tools.
//                   </p>
//                 </div>
//               </div>
//               {/* Product 4 */}
//               <div
//                 className="col-lg-3 col-md-6"
//                 style={{
//                   animation: "fadeInUp 1s ease-in-out",
//                   animationDelay: "0.7s",
//                 }}
//               >
//                 <div className="text-center p-4">
//                   <div
//                     style={{
//                       backgroundColor: "#024A59",
//                       animation: "scaleUp 1.2s ease-in-out",
//                       animationDelay: "0.8s",
//                     }}
//                     className="icon rounded-circle p-4 mb-3 mx-auto"
//                   >
//                     <img
//                       src={azure}
//                       alt="Microsoft Azure"
//                       style={{ width: "40px", height: "40px" }}
//                     />
//                   </div>
//                   <h5
//                     style={{
//                       color: "#FFA916",
//                       marginBottom: "15px",
//                       animation: "fadeInUp 1.3s ease-in-out",
//                     }}
//                   >
//                     Microsoft Azure
//                   </h5>
//                   <p style={{ color: "black", animation: "fadeInUp 1.4s ease-in-out" }}>
//                     Leverage the power of the cloud to achieve unparalleled scalability
//                     and performance.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Products End */}

//         {/* Animations */}
//         <style>
//           {`
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
//         </style>
//         {/* Section with Background */}
//         <div
//           className="container-xxxl py-5"
//           style={{
//             backgroundImage: `url(${carousel1})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover", // Ensures the image covers the container
//             backgroundPosition: "center", // Centers the image
//             animation: "fadeIn 1.5s ease-in-out",
//           }}

//         >
//           <div
//             className="container-xxxl"
//             style={{
//               backgroundColor: "rgba(255, 255, 255, 0.8)",
//               borderRadius: "8px",
//               padding: "30px",
//               animation: "slideIn 2s ease-in-out",
//             }}
//           >
//             {/* Industries Section */}
//             <div className="row mt-5">
//               <h2
//                 className="text-center mb-4"
//                 style={{
//                   color: "#024A59",
//                   animation: "fadeInDown 1.5s ease-in-out",
//                 }}
//               >
//                 Industries
//               </h2>
//               {[
//                 "Healthcare",
//                 "Finance",
//                 "Manufacturing",
//                 "Supply Chain",
//                 "Human Resource",
//                 "Education",
//                 "NGO",
//                 "Tours & Travel",
//               ].map((industry, index) => (
//                 <div
//                   key={index}
//                   className={`col-md-3 ${index >= 4 ? "mt-3" : ""}`}
//                   style={{
//                     animation: "scaleIn 1.5s ease-in-out",
//                     animationDelay: `${0.2 * (index + 1)}s`,
//                   }}
//                 >
//                   <div className="card text-center border-0 shadow-sm">
//                     <div className="card-body">
//                       <h6 style={{ color: "#024A59" }}>
//                         <i
//                           className="bi bi-check-circle-fill"
//                           style={{ color: "#FFA916" }}
//                         ></i>{" "}
//                         {industry}
//                       </h6>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
// <WhyChooseUs/>
//         {/* Animations */}
//         <style>
//           {`
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
//         </style>

        
//       </>
//       {/* services end */}
//     </div>
//   );
// };

// export default HomePage;




// import { Link } from 'react-router-dom';
// import {
 
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


// const HomePage = () => {
//   const services = [
//     { icon: Network, title: "Integrated ERP Solutions", text: "Streamline operations from finance to CRM with tailored Microsoft solutions" },
//     { icon: ChartBar, title: "Data Driven Solutions", text: "Harness advanced analytics for data-driven decision making" },
//     { icon: Lightbulb, title: "Strategic Consultancy", text: "Navigate business complexities with growth-focused strategies" },
//     { icon: Settings, title: "Custom Solutions", text: "Tailored systems for your unique business requirements" }
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
//     <div style={{ overflow: 'hidden' }}>
//       {/* Hero Section */}
//       <section 
//         style={{ 
//           position: 'relative',
//           background: `linear-gradient(rgba(2, 74, 89, 0.9), rgba(255, 169, 22, 0.7)), url(${ErpImg3})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '600px',
//           display: 'flex',
//           alignItems: 'center'
//         }}
//       >
//         <div style={{ 
//           maxWidth: '1280px',
//           margin: '0 auto',
//           padding: '0 32px',
//           position: 'relative',
//           zIndex: 1
//         }}>
//           <div style={{ 
//             color: 'white',
//             maxWidth: '640px',
//             textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
//           }}>
//             <h1 style={{ 
//               fontSize: '3.5rem',
//               fontWeight: '700',
//               marginBottom: '1.5rem',
//               lineHeight: '1.2'
//             }}>
//               Transform Your Business <br/>
//               <span style={{ color: '#FFA916' }}>With Smart ERP Solutions</span>
//             </h1>
//             <p style={{ 
//               fontSize: '1.5rem',
//               marginBottom: '2rem',
//               lineHeight: '1.6'
//             }}>
//               Streamline operations and drive growth with cutting-edge ERP systems
//               tailored to your organizational needs.
//             </p>
//             <Link
//               to="/contact"
//               style={{
//                 display: 'inline-block',
//                 backgroundColor: '#FFA916',
//                 color: '#024A59',
//                 padding: '16px 32px',
//                 borderRadius: '12px',
//                 fontSize: '1.25rem',
//                 fontWeight: '600',
//                 transition: 'all 0.3s ease',
//                 textDecoration: 'none',
//                 boxShadow: '0 4px 15px rgba(255, 169, 22, 0.4)',
//                 transform: 'translateY(0)',
//                 ':hover': {
//                   transform: 'translateY(-2px)',
//                   boxShadow: '0 6px 20px rgba(255, 169, 22, 0.6)'
//                 }
//               }}
//             >
//               Start Digital Transformation
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Company Overview */}
//       <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
//         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
//           <div style={{ textAlign: 'center', marginBottom: '64px' }}>
//             <h2 style={{ 
//               fontSize: '3rem',
//               fontWeight: '700',
//               color: '#024A59',
//               marginBottom: '1rem'
//             }}>
//               About <span style={{ color: '#FFA916' }}>Statify Solutions</span>
//             </h2>
//             <p style={{ 
//               fontSize: '1.25rem',
//               color: '#4a5568',
//               maxWidth: '800px',
//               margin: '0 auto',
//               lineHeight: '1.6'
//             }}>
//               We empower organizations to streamline operations and achieve sustainable growth through
//               cutting-edge ERP solutions and digital transformation strategies.
//             </p>
//           </div>

//           <div
//       style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//         gap: '48px',
//         alignItems: 'center',
//       }}
//     >
//       <div
//         style={{
//           position: 'relative',
//           background: 'rgba(2, 74, 89, 0.1)',
//           borderRadius: '20px',
//           padding: '32px',
//         }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V0VCU0lURXxlbnwwfHwwfHx8MA%3D%3D" // Replace with your image URL
//           alt="Team working on a project at their office"
//           style={{
//             width: '100%',
//             height: '384px',
//             objectFit: 'cover',
//             borderRadius: '20px',
//             boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//           }}
//         />
//       </div>

//       <div style={{ display: 'grid', gap: '24px' }}>
//         {[
//           '15+ Years Industry Experience',
//           'Certified Microsoft Partners',
//           '100+ Successful Implementations',
//           '24/7 Technical Support',
//         ].map((item, index) => (
//           <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
//             <div
//               style={{
//                 backgroundColor: '#FFA916',
//                 padding: '8px',
//                 borderRadius: '12px',
//               }}
//             >
//               <CheckCircle style={{ color: 'white', width: '24px', height: '24px' }} />
//             </div>
//             <h3
//               style={{
//                 fontSize: '1.25rem',
//                 fontWeight: '600',
//                 color: '#2d3748',
//               }}
//             >
//               {item}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section style={{ padding: '80px 0', backgroundColor: '#f8fafb' }}>
//         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
//           <div style={{ textAlign: 'center', marginBottom: '64px' }}>
//             <h2 style={{ 
//               fontSize: '3rem',
//               fontWeight: '700',
//               color: '#024A59',
//               marginBottom: '1rem'
//             }}>
//               Our <span style={{ color: '#FFA916' }}>Services</span>
//             </h2>
//             <p style={{ 
//               fontSize: '1.25rem',
//               color: '#4a5568',
//               maxWidth: '800px',
//               margin: '0 auto'
//             }}>
//               Comprehensive solutions for digital transformation and business growth
//             </p>
//           </div>

//           <div style={{ 
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//             gap: '32px'
//           }}>
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 style={{
//                   backgroundColor: 'white',
//                   padding: '32px',
//                   borderRadius: '20px',
//                   boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   ':hover': {
//                     transform: 'translateY(-5px)',
//                     boxShadow: '0 15px 40px rgba(0,0,0,0.12)'
//                   }
//                 }}
//               >
//                 <div style={{ 
//                   backgroundColor: '#024A59',
//                   width: 'max-content',
//                   padding: '16px',
//                   borderRadius: '16px',
//                   marginBottom: '24px'
//                 }}>
//                   <service.icon style={{ color: 'white', width: '32px', height: '32px' }} />
//                 </div>
//                 <h3 style={{ 
//                   fontSize: '1.5rem',
//                   fontWeight: '700',
//                   color: '#1a202c',
//                   marginBottom: '12px'
//                 }}>{service.title}</h3>
//                 <p style={{ 
//                   color: '#4a5568',
//                   lineHeight: '1.6'
//                 }}>{service.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
//         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
//           <div style={{ textAlign: 'center', marginBottom: '64px' }}>
//             <h2 style={{ 
//               fontSize: '3rem',
//               fontWeight: '700',
//               color: '#024A59',
//               marginBottom: '1rem'
//             }}>
//               Microsoft <span style={{ color: '#FFA916' }}>Products</span>
//             </h2>
//             <p style={{ 
//               fontSize: '1.25rem',
//               color: '#4a5568',
//               maxWidth: '800px',
//               margin: '0 auto'
//             }}>
//               Leverage world-class solutions for enterprise management and productivity
//             </p>
//           </div>

//           <div style={{ 
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
//             gap: '32px'
//           }}>
//             {products.map((product, index) => (
//               <div
//                 key={index}
//                 style={{
//                   backgroundColor: '#f8fafb',
//                   padding: '32px',
//                   borderRadius: '20px',
//                   textAlign: 'center',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   ':hover': {
//                     transform: 'translateY(-5px)',
//                     boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
//                   }
//                 }}
//               >
//                 <div style={{ 
//                   backgroundColor: 'white',
//                   padding: '16px',
//                   borderRadius: '50%',
//                   width: 'max-content',
//                   margin: '0 auto 24px',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
//                 }}>
//                   <img 
//                     src={product.icon} 
//                     alt={product.title} 
//                     style={{ width: '48px', height: '48px' }} 
//                   />
//                 </div>
//                 <h3 style={{ 
//                   fontSize: '1.25rem',
//                   fontWeight: '700',
//                   color: '#1a202c',
//                   marginBottom: '12px'
//                 }}>{product.title}</h3>
//                 <p style={{ 
//                   color: '#4a5568',
//                   fontSize: '0.875rem'
//                 }}>{product.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries Section */}
//       <section style={{ padding: '80px 0', backgroundColor: '#024A59' }}>
//         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
//           <div style={{ textAlign: 'center', marginBottom: '64px' }}>
//             <h2 style={{ 
//               fontSize: '3rem',
//               fontWeight: '700',
//               color: 'white',
//               marginBottom: '1rem'
//             }}>
//               Industries <span style={{ color: '#FFA916' }}>We Serve</span>
//             </h2>
//             <p style={{ 
//               fontSize: '1.25rem',
//               color: '#e2e8f0',
//               maxWidth: '800px',
//               margin: '0 auto'
//             }}>
//               Customized solutions for diverse industry verticals
//             </p>
//           </div>

//           <div style={{ 
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//             gap: '24px'
//           }}>
//             {industries.map((industry, index) => (
//               <div
//                 key={index}
//                 style={{
//                   backgroundColor: 'rgba(255,255,255,0.1)',
//                   padding: '24px',
//                   borderRadius: '16px',
//                   backdropFilter: 'blur(8px)',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   ':hover': {
//                     backgroundColor: 'rgba(255,255,255,0.2)',
//                     transform: 'translateY(-3px)'
//                   }
//                 }}
//               >
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                   <Building style={{ color: '#FFA916', width: '24px', height: '24px' }} />
//                   <h3 style={{ 
//                     fontSize: '1.125rem',
//                     fontWeight: '600',
//                     color: 'white'
//                   }}>{industry}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
     

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

//         @keyframes card-pop {
//           from { transform: scale(0.9); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }

//         @keyframes gradient-shine {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out;
//         }

//         .animate-card-pop {
//           animation: card-pop 0.6s ease-out;
//         }

//         .gradient-animation {
//           background-size: 200% 200%;
//           animation: gradient-shine 8s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;



import { Link } from 'react-router-dom';
import {
  ChartBar,
  Lightbulb,
  Network,
  CheckCircle,
  Building,
  Settings
} from 'lucide-react';
import ErpImg3 from "../assests/images/ErpImg3.jpg";
import business from "../assests/images/business-central-icon.png";
import dynamicsicon from "../assests/images/dynamics-icon.png";
import crm from "../assests/images/crm-icon.png";
import azure from "../assests/images/azure-icon.png";
import WhyChooseUs from "./WhyChooseUs";
import TeamCollaboration from "../assests/images/about-1.jpg"; 
import ServiceVisual from "../assests/images/carousel-1.jpg"; 
import IndustryIcons from "../assests/images/ErpImg3.jpg"; 
const HomePage = () => {
  const services = [
    { icon: Network, title: "Integrated ERP Solutions", text: "Streamline operations from finance to CRM with tailored Microsoft solutions" },
    { icon: ChartBar, title: "Data Driven Solutions", text: "Harness advanced analytics for data-driven decision making" },
    { icon: Lightbulb, title: "Strategic Consultancy", text: "Navigate business complexities with growth-focused strategies" },
    // { icon: Settings, title: "Custom Solutions", text: "Tailored systems for your unique business requirements" }
  ];

  const products = [
    { icon: dynamicsicon, title: "Dynamics 365 Office", text: "Enhance productivity with powerful business tools" },
    { icon: business, title: "Business Central/NAV", text: "All-in-one business management solution" },
    { icon: crm, title: "Dynamics CRM", text: "Build strong customer relationships" },
    { icon: azure, title: "Microsoft Azure", text: "Cloud solutions for unmatched scalability" }
  ];
  const industries = [
        "Healthcare", "Finance", "Manufacturing", "Supply Chain",
        "Human Resource", "Education", "NGO", "Tours & Travel"
      ];


  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section (keep existing) */}
       {/* Hero Section */}
       <section 
        style={{ 
          position: 'relative',
          background: `linear-gradient(rgba(2, 74, 89, 0.9), rgba(255, 169, 22, 0.7)), url(${ErpImg3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div style={{ 
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ 
            color: 'white',
            maxWidth: '640px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            <h1 style={{ 
              fontSize: '3.5rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Transform Your Business <br/>
              <span style={{ color: '#FFA916' }}>With Smart ERP Solutions</span>
            </h1>
            <p style={{ 
              fontSize: '1.5rem',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Streamline operations and drive growth with cutting-edge ERP systems
              tailored to your organizational needs.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                backgroundColor: '#FFA916',
                color: '#024A59',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '1.25rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(255, 169, 22, 0.4)',
                transform: 'translateY(0)',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(255, 169, 22, 0.6)'
                }
              }}
            >
              Start Digital Transformation
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div className="animate-slide-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '700', color: '#024A59', marginBottom: '1rem' }}>
              About <span style={{ color: '#FFA916' }}>Statify Solutions</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>
              We empower organizations through digital transformation
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            <div className="animate-card-pop" style={{ position: 'relative', perspective: '1000px' }}>
              <div style={{
                background: `url(${TeamCollaboration}) center/cover`,
                borderRadius: '20px',
                height: '500px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transform: 'rotateX(10deg) rotateY(-10deg)',
                transition: 'all 0.3s ease',
                ':hover': {
                  transform: 'rotateX(0deg) rotateY(0deg)'
                }
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  right: '-30px',
                  background: '#FFA916',
                  padding: '24px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                  <span style={{ fontSize: '2rem', fontWeight: '700', color: '#024A59' }}>15+</span>
                  <p style={{ color: '#024A59', margin: 0 }}>Years Experience</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '24px', alignContent: 'center' }}>
              {['Strategic ERP Implementation', 'Cloud Integration Experts', 'Data-Driven Decision Making', 'End-to-End Support'].map((item, index) => (
                <div key={index} className="animate-slide-up" style={{ 
                  animationDelay: `${index * 0.1}s`,
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px',
                  padding: '24px',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateX(10px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                  }
                }}>
                  <div style={{
                    flexShrink: 0,
                    background: 'linear-gradient(135deg, #024A59 0%, #FFA916 100%)',
                    padding: '12px',
                    borderRadius: '12px'
                  }}>
                    <CheckCircle style={{ color: 'white', width: '24px', height: '24px' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2d3748', margin: 0 }}>{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(160deg, #f8fafb 0%, #e2e8f0 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div className="animate-slide-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '700', color: '#024A59', marginBottom: '1rem' }}>
              Our <span style={{ color: '#FFA916' }}>Services</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>
              Comprehensive solutions for digital transformation
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '12px',
            position: 'relative'
          }}>
            <img src={ServiceVisual} alt="Service visualization" style={{
              position: 'absolute',
              right: '-100px',
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: 0.1,
              pointerEvents: 'none',
              width: '600px'
            }} />

            {services.map((service, index) => (
              <div key={index} className="animate-card-pop" style={{
                background: 'white',
                padding: '10px',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                ':hover': {
                  transform: 'translateY(-10px) rotateZ(2deg)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                  '::before': {
                    transform: 'translateX(0%)'
                  }
                },
                '::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '200%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,169,22,0.1) 50%, transparent 100%)',
                  transition: 'transform 0.6s ease',
                  transform: 'translateX(-100%)'
                }
              }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, #024A59 0%, #FFA916 100%)',
                  width: 'max-content',
                  padding: '16px',
                  borderRadius: '16px',
                  marginBottom: '24px'
                }}>
                  <service.icon style={{ color: 'white', width: '32px', height: '32px' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a202c', marginBottom: '12px' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Industries Section */}
      <section style={{ padding: '80px 0', background: '#024A59', position: 'relative' }}>
        <img src={IndustryIcons} alt="Industry icons" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.05,
          width: '80%',
          pointerEvents: 'none'
        }} />
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
          <div className="animate-slide-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
              Industries <span style={{ color: '#FFA916' }}>We Serve</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '800px', margin: '0 auto' }}>
              Tailored solutions for diverse sectors
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            position: 'relative'
          }}>
            {industries.map((industry, index) => (
              <div key={index} className="animate-card-pop" style={{
                background: 'rgba(255,255,255,0.08)',
                padding: '32px',
                borderRadius: '16px',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'center',
                ':hover': {
                  background: 'rgba(255,255,255,0.15)',
                  transform: 'scale(1.05)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'rgba(255,169,22,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <Building style={{ color: '#FFA916', width: '32px', height: '32px' }} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'white',
                  margin: 0
                }}>{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Products Section */}
       <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
           <div style={{ textAlign: 'center', marginBottom: '64px' }}>
             <h2 style={{ 
              fontSize: '3rem',
              fontWeight: '700',
              color: '#024A59',
              marginBottom: '1rem'
            }}>
              Microsoft <span style={{ color: '#FFA916' }}>Products</span>
            </h2>
            <p style={{ 
              fontSize: '1.25rem',
              color: '#4a5568',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Leverage world-class solutions for enterprise management and productivity
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px'
          }}>
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8fafb',
                  padding: '32px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <div style={{ 
                  backgroundColor: 'white',
                  padding: '16px',
                  borderRadius: '50%',
                  width: 'max-content',
                  margin: '0 auto 24px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
                }}>
                  <img 
                    src={product.icon} 
                    alt={product.title} 
                    style={{ width: '48px', height: '48px' }} 
                  />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#1a202c',
                  marginBottom: '12px'
                }}>{product.title}</h3>
                <p style={{ 
                  color: '#4a5568',
                  fontSize: '0.875rem'
                }}>{product.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs/>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes card-pop {
          from { transform: scale(0.8) rotateZ(-5deg); opacity: 0; }
          to { transform: scale(1) rotateZ(0deg); opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-card-pop {
          animation: card-pop 0.6s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-slide-up,
          .animate-card-pop {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;


// import { Link } from 'react-router-dom';
// import {
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
// // import WhyChooseUs from "./WhyChooseUs";
// import TeamCollaboration from "../assests/images/about-1.jpg"; // Add new image
// import ServiceVisual from "../assests/images/carousel-1.jpg"; // Add new image
// import IndustryIcons from "../assests/images/ErpImg3.jpg"; // Add new SVG

// const HomePage = () => {
//   const industries = [
//         "Healthcare", "Finance", "Manufacturing", "Supply Chain",
//         "Human Resource", "Education", "NGO", "Tours & Travel"
//       ];
//       const services = [
//         { icon: Network, title: "Integrated ERP Solutions", text: "Streamline operations from finance to CRM with tailored Microsoft solutions" },
//         { icon: ChartBar, title: "Data Driven Solutions", text: "Harness advanced analytics for data-driven decision making" },
//         { icon: Lightbulb, title: "Strategic Consultancy", text: "Navigate business complexities with growth-focused strategies" },
//         { icon: Settings, title: "Custom Solutions", text: "Tailored systems for your unique business requirements" }
//       ];
    
//       const products = [
//         { icon: dynamicsicon, title: "Dynamics 365 Office", text: "Enhance productivity with powerful business tools" },
//         { icon: business, title: "Business Central/NAV", text: "All-in-one business management solution" },
//         { icon: crm, title: "Dynamics CRM", text: "Build strong customer relationships" },
//         { icon: azure, title: "Microsoft Azure", text: "Cloud solutions for unmatched scalability" }
//       ];
    
//   // ... (keep existing data arrays)

//   return (
//     <div style={{ overflow: 'hidden' }}>
//     {/* Hero Section */}
//        <section 
//         style={{ 
//           position: 'relative',
//           background: `linear-gradient(rgba(2, 74, 89, 0.9), rgba(255, 169, 22, 0.7)), url(${ErpImg3})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '600px',
//           display: 'flex',
//           alignItems: 'center'
//         }}
//       >
//         <div style={{ 
//           maxWidth: '1280px',
//           margin: '0 auto',
//           padding: '0 32px',
//           position: 'relative',
//           zIndex: 1
//         }}>
//           <div style={{ 
//             color: 'white',
//             maxWidth: '640px',
//             textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
//           }}>
//             <h1 style={{ 
//               fontSize: '3.5rem',
//               fontWeight: '700',
//               marginBottom: '1.5rem',
//               lineHeight: '1.2'
//             }}>
//               Transform Your Business <br/>
//               <span style={{ color: '#FFA916' }}>With Smart ERP Solutions</span>
//             </h1>
//             <p style={{ 
//               fontSize: '1.5rem',
//               marginBottom: '2rem',
//               lineHeight: '1.6'
//             }}>
//               Streamline operations and drive growth with cutting-edge ERP systems
//               tailored to your organizational needs.
//             </p>
//             <Link
//               to="/contact"
//               style={{
//                 display: 'inline-block',
//                 backgroundColor: '#FFA916',
//                 color: '#024A59',
//                 padding: '16px 32px',
//                 borderRadius: '12px',
//                 fontSize: '1.25rem',
//                 fontWeight: '600',
//                 transition: 'all 0.3s ease',
//                 textDecoration: 'none',
//                 boxShadow: '0 4px 15px rgba(255, 169, 22, 0.4)',
//                 transform: 'translateY(0)',
//                 ':hover': {
//                   transform: 'translateY(-2px)',
//                   boxShadow: '0 6px 20px rgba(255, 169, 22, 0.6)'
//                 }
//               }}
//             >
//               Start Digital Transformation
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced About Section */}
//       <section style={{ padding: '80px 0', backgroundColor: '#f8fafb' }}>
//         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
//           <div className="animate-slide-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
//             <h2 style={{ fontSize: '3rem', fontWeight: '700', color: '#024A59', marginBottom: '1rem' }}>
//               About <span style={{ color: '#FFA916' }}>Statify Solutions</span>
//             </h2>
//             <p style={{ fontSize: '1.25rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>
//               We empower organizations through digital transformation
//             </p>
//           </div>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
//             <div className="animate-card-pop" style={{ position: 'relative', perspective: '1000px' }}>
//               <div style={{
//                 background: `url(${TeamCollaboration}) center/cover`,
//                 borderRadius: '20px',
//                 height: '500px',
//                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
//                 transform: 'rotateX(10deg) rotateY(-10deg)',
//                 transition: 'all 0.3s ease',
//                 ':hover': {
//                   transform: 'rotateX(0deg) rotateY(0deg)'
//                 }
//               }}>
//                 <div style={{
//                   position: 'absolute',
//                   bottom: '-30px',
//                   right: '-30px',
//                   background: '#FFA916',
//                   padding: '24px',
//                   borderRadius: '16px',
//                   boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
//                 }}>
//                   <span style={{ fontSize: '2rem', fontWeight: '700', color: '#024A59' }}>15+</span>
//                   <p style={{ color: '#024A59', margin: 0 }}>Years Experience</p>
//                 </div>
//               </div>
//             </div>

//             <div style={{ display: 'grid', gap: '24px', alignContent: 'center' }}>
//               {['Strategic ERP Implementation', 'Cloud Integration Experts', 'Data-Driven Decision Making', 'End-to-End Support'].map((item, index) => (
//                 <div key={index} className="animate-slide-up" style={{ 
//                   animationDelay: `${index * 0.1}s`,
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   gap: '16px',
//                   padding: '24px',
//                   background: 'white',
//                   borderRadius: '16px',
//                   boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
//                   transition: 'all 0.3s ease',
//                   ':hover': {
//                     transform: 'translateX(10px)',
//                     boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
//                   }
//                 }}>
//                   <div style={{
//                     flexShrink: 0,
//                     background: 'linear-gradient(135deg, #024A59 0%, #FFA916 100%)',
//                     padding: '12px',
//                     borderRadius: '12px'
//                   }}>
//                     <CheckCircle style={{ color: 'white', width: '24px', height: '24px' }} />
//                   </div>
//                   <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2d3748', margin: 0 }}>{item}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Services Section */}
//       <section style={{ padding: '80px 0', background: 'linear-gradient(160deg, #f8fafb 0%, #e2e8f0 100%)' }}>
//         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
//           <div className="animate-slide-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
//             <h2 style={{ fontSize: '3rem', fontWeight: '700', color: '#024A59', marginBottom: '1rem' }}>
//               Our <span style={{ color: '#FFA916' }}>Services</span>
//             </h2>
//             <p style={{ fontSize: '1.25rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>
//               Comprehensive solutions for digital transformation
//             </p>
//           </div>

//           <div style={{ 
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//             gap: '32px',
//             position: 'relative'
//           }}>
//             <img src={ServiceVisual} alt="Service visualization" style={{
//               position: 'absolute',
//               right: '-100px',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               opacity: 0.1,
//               pointerEvents: 'none',
//               width: '600px'
//             }} />

//             {services.map((service, index) => (
//               <div key={index} className="animate-card-pop" style={{
//                 background: 'white',
//                 padding: '32px',
//                 borderRadius: '20px',
//                 boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
//                 transition: 'all 0.3s ease',
//                 cursor: 'pointer',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 ':hover': {
//                   transform: 'translateY(-10px) rotateZ(2deg)',
//                   boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
//                   '::before': {
//                     transform: 'translateX(0%)'
//                   }
//                 },
//                 '::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '200%',
//                   height: '100%',
//                   background: 'linear-gradient(90deg, transparent 0%, rgba(255,169,22,0.1) 50%, transparent 100%)',
//                   transition: 'transform 0.6s ease',
//                   transform: 'translateX(-100%)'
//                 }
//               }}>
//                 <div style={{ 
//                   background: 'linear-gradient(135deg, #024A59 0%, #FFA916 100%)',
//                   width: 'max-content',
//                   padding: '16px',
//                   borderRadius: '16px',
//                   marginBottom: '24px'
//                 }}>
//                   <service.icon style={{ color: 'white', width: '32px', height: '32px' }} />
//                 </div>
//                 <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a202c', marginBottom: '12px' }}>
//                   {service.title}
//                 </h3>
//                 <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{service.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Industries Section */}
//       <section style={{ padding: '80px 0', background: '#024A59', position: 'relative' }}>
//         <img src={IndustryIcons} alt="Industry icons" style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           opacity: 0.05,
//           width: '80%',
//           pointerEvents: 'none'
//         }} />
        
//         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
//           <div className="animate-slide-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
//             <h2 style={{ fontSize: '3rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
//               Industries <span style={{ color: '#FFA916' }}>We Serve</span>
//             </h2>
//             <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '800px', margin: '0 auto' }}>
//               Tailored solutions for diverse sectors
//             </p>
//           </div>

//           <div style={{ 
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//             gap: '24px',
//             position: 'relative'
//           }}>
//             {industries.map((industry, index) => (
//               <div key={index} className="animate-card-pop" style={{
//                 background: 'rgba(255,255,255,0.08)',
//                 padding: '32px',
//                 borderRadius: '16px',
//                 backdropFilter: 'blur(8px)',
//                 transition: 'all 0.3s ease',
//                 cursor: 'pointer',
//                 textAlign: 'center',
//                 ':hover': {
//                   background: 'rgba(255,255,255,0.15)',
//                   transform: 'scale(1.05)',
//                   boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
//                 }
//               }}>
//                 <div style={{
//                   width: '64px',
//                   height: '64px',
//                   background: 'rgba(255,169,22,0.1)',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   margin: '0 auto 16px'
//                 }}>
//                   <Building style={{ color: '#FFA916', width: '32px', height: '32px' }} />
//                 </div>
//                 <h3 style={{ 
//                   fontSize: '1.25rem',
//                   fontWeight: '600',
//                   color: 'white',
//                   margin: 0
//                 }}>{industry}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Keep other sections */}

//       <style jsx global>{`
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes slide-up {
//           from { transform: translateY(50px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }

//         @keyframes card-pop {
//           from { transform: scale(0.8) rotateZ(-5deg); opacity: 0; }
//           to { transform: scale(1) rotateZ(0deg); opacity: 1; }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//         }

//         .animate-card-pop {
//           animation: card-pop 0.6s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .animate-fade-in,
//           .animate-slide-up,
//           .animate-card-pop {
//             animation: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;