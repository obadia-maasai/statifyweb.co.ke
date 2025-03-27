// import React from "react";
// import "../App.css"
// import header from "../assests/images/about-2.jpg"
// const Services = () => {
//   return (
//     <>
//     <div
//   className="container-fluid page-header py-1 mb-2 wow fadeIn justify-content-center text-center"
//   data-wow-delay="0.1s"
//   style={{
//     backgroundImage: `url(${header})`, // Replace 'header' with the correct image path
//     backgroundSize: "cover", // Ensures the image covers the entire background
//     backgroundPosition: "center", // Centers the background image
//     backgroundRepeat: "no-repeat", // Prevents tiling of the image
//     height: "200px", // Reduced height to make it slimmer
//   }}
// >
//   <div className="container py-2">
//     <h1
//       className="display-5 mb-2 animated slideInDown"
//       style={{ color: '#FFA916',fontWeight:"bolder" }}
//     >
//       Services
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
//           className="breadcrumb-item y active"
//           aria-current="page"
//           style={{ color: '#024A59',fontWeight:"bold" }}
//         >
//           Services
//         </li>
//       </ol>
//     </nav>
//   </div>
// </div>

//     <div style={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}>
//       {/* Header Section */}
//       <div
//         style={{
//           textAlign: "center",
//           margin: "0 auto 50px",
//           maxWidth: "600px",
//         }}
//       >
//         <p
//           style={{
//             color: "#FFA916",
//             backgroundColor: "#024A59",
//             display: "inline-block",
//             borderRadius: "50px",
//             padding: "5px 20px",
//           }}
//         >
//           Services
//         </p>
//         <h1 style={{ color: "#000", fontWeight: "bold" }}>
//           Service That We Offer
//         </h1>
//       </div>

//       {/* Services Section */}
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//           justifyContent: "center",
//         }}
//       >
//         {/* Service 1 */}
//         <div
//           style={{
//             backgroundColor: "#024A59",
//             borderRadius: "10px",
//             padding: "30px",
//             color: "#fff",
//             flex: "1 1 calc(33% - 20px)",
//             maxWidth: "400px",
//             minWidth: "300px",
//           }}
//         >
//           <div
//             style={{
//               width: "65px",
//               height: "65px",
//               backgroundColor: "#fff",
//               borderRadius: "50%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginBottom: "20px",
//             }}
//           >
//             <i
//               className="fa fa-network-wired"
//               style={{ fontSize: "24px", color: "#28a745" }}
//             ></i>
//           </div>
//           <h4 style={{ color: "#FFA916", marginBottom: "15px" }}>
//             Integrated ERP Solutions
//           </h4>
//           <p style={{ lineHeight: "1.8" }}>
//             Our integrated ERP solutions are designed to streamline your
//             business operations, from finance and human resources to supply
//             chain management and customer relationship management. With our
//             expertise in Microsoft ERP systems, we offer tailored solutions that
//             meet your specific business requirements.
//           </p>
//         </div>

//         {/* Service 2 */}
//         <div
//           style={{
//             backgroundColor: "#024A59",
//             borderRadius: "10px",
//             padding: "30px",
//             color: "#fff",
//             flex: "1 1 calc(33% - 20px)",
//             maxWidth: "400px",
//             minWidth: "300px",
//           }}
//         >
//           <div
//             style={{
//               width: "65px",
//               height: "65px",
//               backgroundColor: "#fff",
//               borderRadius: "50%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginBottom: "20px",
//             }}
//           >
//             <i
//               className="fa fa-chart-line"
//               style={{ fontSize: "24px", color: "#17a2b8" }}
//             ></i>
//           </div>
//           <h4 style={{ color: "#FFA916", marginBottom: "15px" }}>
//             Data Driven Business Solutions
//           </h4>
//           <p style={{ lineHeight: "1.8" }}>
//             Harness the power of data with our advanced analytics and digital
//             transformation services. We help you unlock actionable insights from
//             your data assets, enabling data-driven decision-making and
//             innovation.
//           </p>
//         </div>

//         {/* Service 3 */}
//         <div
//           style={{
//             backgroundColor: "#024A59",
//             borderRadius: "10px",
//             padding: "30px",
//             color: "#fff",
//             flex: "1 1 calc(33% - 20px)",
//             maxWidth: "400px",
//             minWidth: "300px",
//           }}
//         >
//           <div
//             style={{
//               width: "65px",
//               height: "65px",
//               backgroundColor: "#fff",
//               borderRadius: "50%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginBottom: "20px",
//             }}
//           >
//             <i
//               className="fa fa-lightbulb"
//               style={{ fontSize: "24px", color: "#FFC107" }}
//             ></i>
//           </div>
//           <h4 style={{ color: "#FFA916", marginBottom: "15px" }}>
//             Strategic Business Consultancy
//           </h4>
//           <p style={{ lineHeight: "1.8" }}>
//             Our strategic business consultancy services are aimed at helping you
//             navigate the complexities of the business landscape and make
//             informed decisions that drive growth and profitability.
//           </p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Services;

// import React from "react";
// import "../App.css";
// import header from "../assests/images/about-2.jpg";
// import {  useNavigate} from 'react-router-dom'; 

// const Services = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       {/* Hero Header Section */}
//       <div
//         className="container-fluid page-header py-1 mb-2 wow fadeIn"
//         data-wow-delay="0.1s"
//         style={{
//           background: `linear-gradient(rgba(2, 74, 89, 0.8), rgba(2, 74, 89, 0.9)), url(${header})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "30vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           position: "relative",
//         }}
//       >
//         <div className="container text-center">
//           <h1
//             className="display-3 mb-3 animated zoomIn"
//             style={{
//               color: "#FFA916",
//               fontWeight: "900",
//               textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
//               letterSpacing: "2px",
//             }}
//           >
//             Comprehensive Business Solutions
//           </h1>
//           <p
//             className="lead wow fadeInUp"
//             data-wow-delay="0.3s"
//             style={{
//               color: "#fff",
//               fontSize: "1.4rem",
//               maxWidth: "800px",
//               margin: "0 auto",
//             }}
//           >
//             Transform your business operations with our end-to-end digital solutions and expert consultancy services
//           </p>
//         </div>
//       </div>

//       {/* Statistics Banner */}
      
//       {/* Detailed Services Section */}
//       <div style={{ padding: "80px 20px", backgroundColor: "#f8f9fa" }}>
//         <div className="container">
//           {/* Section Header */}
//           <div
//             className="wow fadeInUp"
//             data-wow-delay="0.1s"
//             style={{ textAlign: "center", marginBottom: "60px" }}
//           >
//             <h2
//               style={{
//                 color: "#024A59",
//                 fontWeight: "700",
//                 fontSize: "2.5rem",
//                 marginBottom: "30px",
//               }}
//             >
//               Our Service Ecosystem
//             </h2>
//           </div>

//           {/* Service Tabs */}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//               gap: "40px",
//             }}
//           >
//             {/* ERP Solutions */}
//             <div
//               className="wow fadeInLeft"
//               style={{
//                 backgroundColor: "#fff",
//                 borderRadius: "15px",
//                 padding: "30px",
//                 boxShadow: "0 10px 30px rgba(2, 74, 89, 0.1)",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "0",
//                   left: "0",
//                   right: "0",
//                   height: "5px",
//                   backgroundColor: "#FFA916",
//                 }}
//               ></div>
//               <h3
//                 style={{
//                   color: "#024A59",
//                   marginBottom: "20px",
//                   fontSize: "1.8rem",
//                 }}
//               >
//                 <i
//                   className="fas fa-cogs mr-2"
//                   style={{ color: "#FFA916" }}
//                 ></i>
//                 ERP Implementation
//               </h3>
//               <ul
//                 style={{
//                   listStyle: "none",
//                   paddingLeft: "20px",
//                   marginBottom: "25px",
//                 }}
//               >
//                 {[
//                   "Custom workflow design",
//                   "Multi-department integration",
//                   "Real-time analytics dashboard",
//                   "Legacy system migration",
//                   "Continuous support & updates",
//                 ].map((item, index) => (
//                   <li
//                     key={index}
//                     style={{
//                       marginBottom: "10px",
//                       position: "relative",
//                     }}
//                   >
//                     <i
//                       className="fas fa-check-circle"
//                       style={{
//                         color: "#FFA916",
//                         position: "absolute",
//                         left: "-20px",
//                         top: "3px",
//                       }}
//                     ></i>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Business Intelligence */}
//             <div
//               className="wow fadeInUp"
//               style={{
//                 backgroundColor: "#fff",
//                 borderRadius: "15px",
//                 padding: "30px",
//                 boxShadow: "0 10px 30px rgba(2, 74, 89, 0.1)",
//               }}
//             >
//               <h3
//                 style={{
//                   color: "#024A59",
//                   marginBottom: "20px",
//                   fontSize: "1.8rem",
//                 }}
//               >
//                 <i
//                   className="fas fa-brain mr-2"
//                   style={{ color: "#FFA916" }}
//                 ></i>
//                 Advanced Analytics
//               </h3>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(2, 1fr)",
//                   gap: "15px",
//                 }}
//               >
//                 {[
//                   { icon: "fa-database", text: "Data Warehousing" },
//                   { icon: "fa-chart-pie", text: "Predictive Modeling" },
//                   { icon: "fa-map-marked", text: "Geospatial Analysis" },
//                   { icon: "fa-robot", text: "AI-Powered Insights" },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       backgroundColor: "#f8f9fa",
//                       padding: "15px",
//                       borderRadius: "8px",
//                       textAlign: "center",
//                     }}
//                   >
//                     <i
//                       className={`fas ${item.icon}`}
//                       style={{ color: "#024A59", fontSize: "1.5rem" }}
//                     ></i>
//                     <p style={{ margin: "10px 0 0", color: "#024A59" }}>
//                       {item.text}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Consultancy */}
//             <div
//               className="wow fadeInRight"
//               style={{
//                 backgroundColor: "#fff",
//                 borderRadius: "15px",
//                 padding: "30px",
//                 boxShadow: "0 10px 30px rgba(2, 74, 89, 0.1)",
//               }}
//             >
//               <h3
//                 style={{
//                   color: "#024A59",
//                   marginBottom: "20px",
//                   fontSize: "1.8rem",
//                 }}
//               >
//                 <i
//                   className="fas fa-handshake mr-2"
//                   style={{ color: "#FFA916" }}
//                 ></i>
//                 Strategic Consultancy
//               </h3>
//               <div
//                 style={{
//                   borderLeft: "3px solid #FFA916",
//                   paddingLeft: "20px",
//                 }}
//               >
//                 <p
//                   style={{
//                     color: "#666",
//                     fontStyle: "italic",
//                     marginBottom: "15px",
//                   }}
//                 >
//                   "We help you navigate digital transformation with proven frameworks and industry expertise"
//                 </p>
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <div
//                     style={{
//                       width: "40px",
//                       height: "40px",
//                       borderRadius: "50%",
//                       backgroundColor: "#024A59",
//                       marginRight: "15px",
//                     }}
//                   ></div>
//                   <div>
//                     <p style={{ margin: 0, fontWeight: "600", color: "#024A59" }}>
//                       John Smith
//                     </p>
//                     <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
//                       Lead Consultant
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Technology Stack */}
//           {/* <div
//             style={{
//               marginTop: "80px",
//               padding: "40px",
//               backgroundColor: "#fff",
//               borderRadius: "15px",
//               boxShadow: "0 10px 30px rgba(2, 74, 89, 0.1)",
//             }}
//           >
//             <h3
//               style={{
//                 color: "#024A59",
//                 textAlign: "center",
//                 marginBottom: "40px",
//                 fontSize: "2rem",
//               }}
//             >
//               Trusted By Industry Leaders
//             </h3>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
//                 gap: "30px",
//                 alignItems: "center",
//                 justifyItems: "center",
//               }}
//             >
//               {[
//                 "fab fa-microsoft",
//                 "fab fa-aws",
//                 "fab fa-google",
//                 "fas fa-database",
//                 "fab fa-salesforce",
//                 "fab fa-sap",
//               ].map((icon, index) => (
//                 <i
//                   key={index}
//                   className={icon}
//                   style={{
//                     fontSize: "3rem",
//                     color: "#024A59",
//                     opacity: "0.7",
//                     transition: "all 0.3s ease",
//                   }}
//                   onMouseOver={(e) => {
//                     e.target.style.opacity = "1";
//                     e.target.style.transform = "scale(1.2)";
//                   }}
//                   onMouseOut={(e) => {
//                     e.target.style.opacity = "0.7";
//                     e.target.style.transform = "scale(1)";
//                   }}
//                 ></i>
//               ))}
//             </div>
//           </div> */}
          

//           {/* Process Timeline */}
//           <div
//             style={{
//               marginTop: "80px",
//               position: "relative",
//               padding: "40px 0",
//             }}
//           >
//             <h3
//               style={{
//                 color: "#024A59",
//                 textAlign: "center",
//                 marginBottom: "50px",
//                 fontSize: "2rem",
//               }}
//             >
//               Our Implementation Process
//             </h3>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 position: "relative",
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "20%",
//                   left: "0",
//                   right: "0",
//                   height: "3px",
//                   backgroundColor: "#FFA916",
//                   zIndex: "1",
//                 }}
//               ></div>
//               {[
//                 { icon: "fa-comments", title: "Consultation" },
//                 { icon: "fa-search", title: "Analysis" },
//                 { icon: "fa-drafting-compass", title: "Design" },
//                 { icon: "fa-rocket", title: "Launch" },
//                 { icon: "fa-chart-line", title: "Optimize" },
//               ].map((step, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     zIndex: "2",
//                     textAlign: "center",
//                     position: "relative",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "60px",
//                       height: "60px",
//                       backgroundColor: "#024A59",
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       margin: "0 auto 15px",
//                     }}
//                   >
//                     <i
//                       className={`fas ${step.icon}`}
//                       style={{ color: "#FFA916", fontSize: "1.5rem" }}
//                     ></i>
//                   </div>
//                   <h4
//                     style={{
//                       color: "#024A59",
//                       fontSize: "1.1rem",
//                       fontWeight: "600",
//                     }}
//                   >
//                     {step.title}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div
//         style={{
//           backgroundColor: "#FFA916",
//           padding: "80px 20px",
//           textAlign: "center",
//         }}
//       >
//         <div className="container">
//           <h2
//             style={{
//               color: "#024A59",
//               fontSize: "2.5rem",
//               marginBottom: "30px",
//               fontWeight: "700",
//             }}
//           >
//             Ready to Transform Your Business?
//           </h2>
//           <p
//             style={{
//               color: "#024A59",
//               fontSize: "1.2rem",
//               marginBottom: "40px",
//               maxWidth: "800px",
//               margin: "0 auto",
//             }}
//           >
//             Schedule a free consultation with our experts to discover how we can
//             optimize your business operations
//           </p>
//           <button
//       style={{
//         backgroundColor: "#024A59",
//         color: "#fff",
//         padding: "15px 40px",
//         borderRadius: "30px",
//         border: "none",
//         fontSize: "1.1rem",
//         fontWeight: "600",
//         cursor: "pointer",
//         transition: "all 0.3s ease",
//       }}
//       onMouseOver={(e) => {
//         e.target.style.backgroundColor = "#01303b";
//         e.target.style.transform = "translateY(-2px)";
//       }}
//       onMouseOut={(e) => {
//         e.target.style.backgroundColor = "#024A59";
//         e.target.style.transform = "translateY(0)";
//       }}
//       onClick={() => navigate("/contact")}
//     >
//       Get Started Now
//     </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

import React from "react";
import "../App.css";
import header from "../assests/images/about-2.jpg";
import { useNavigate } from 'react-router-dom';
import { 
  Settings, 
  CheckCircle, 
  BrainCog, 
  Database, 
  PieChart, 
  Map, 
  Bot, 
  Handshake, 
  MessageCircle, 
  Search, 
  DraftingCompass, 
  Rocket, 
  LineChart, 
  User
} from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Header Section */}
      <div
        className="container-fluid page-header py-1 mb-2 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          background: `linear-gradient(rgba(2, 74, 89, 0.8), rgba(2, 74, 89, 0.9)), url(${header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div className="container text-center">
          <h1
            className="display-3 mb-3 animated zoomIn"
            style={{
              color: "#FFA916",
              fontWeight: "900",
              textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
              letterSpacing: "2px",
            }}
          >
            Comprehensive Business Solutions
          </h1>
          <p
            className="lead wow fadeInUp"
            data-wow-delay="0.3s"
            style={{
              color: "#fff",
              fontSize: "1.4rem",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Transform your business operations with our end-to-end digital solutions and expert consultancy services
          </p>
        </div>
      </div>

      {/* Detailed Services Section */}
      <div style={{ padding: "80px 20px", backgroundColor: "#f8f9fa" }}>
        <div className="container">
          {/* Section Header */}
          <div
            className="wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2
              style={{
                color: "#024A59",
                fontWeight: "700",
                fontSize: "2.5rem",
                marginBottom: "30px",
              }}
            >
              Our Service Ecosystem
            </h2>
          </div>

          {/* Service Tabs */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            {/* ERP Solutions */}
            <div
              className="wow fadeInLeft"
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(2, 74, 89, 0.1)",
                position: "relative",
                overflow: "hidden",
                background: 'linear-gradient(135deg,rgb(50, 104, 117) 0%,rgb(132, 172, 180) 100%)',
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  height: "5px",
                  backgroundColor: "#FFA916",
                }}
              ></div>
              <h3
                style={{
                  color: "#FFA916",
                  marginBottom: "20px",
                  fontSize: "1.8rem",
                }}
              >
                <Settings 
                  size={28} 
                  color="#FFA916" 
                  style={{ marginRight: "10px" }} 
                />
                ERP Implementation
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "20px",
                  marginBottom: "25px",
                  // background: 'linear-gradient(135deg,rgb(201, 234, 241) 0%,rgb(132, 172, 180) 100%)',
                }}
              >
                {[
                  "Custom workflow design",
                  "Multi-department integration",
                  "Real-time analytics dashboard",
                  "Legacy system migration",
                  "Continuous support & updates",
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "10px",
                      position: "relative",
                      color:'white'
                    }}
                  >
                    <CheckCircle
                      size={16}
                      color="#FFA916"
                      style={{
                        position: "absolute",
                        left: "-20px",
                        top: "3px",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Intelligence */}
            <div
              className="wow fadeInUp"
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(2, 74, 89, 0.1)",
                background: 'linear-gradient(135deg,rgb(173, 161, 131) 0%,rgb(244, 219, 174) 100%)'
              }}
            >
              <h3
                style={{
                  color: "#024A59",
                  marginBottom: "20px",
                  fontSize: "1.8rem",
                }}
              >
                <BrainCog 
                  size={28} 
                  color="#FFA916" 
                  style={{ marginRight: "10px" }} 
                />
                Advanced Analytics
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "15px",
                  // background: 'linear-gradient(135deg,rgb(50, 104, 117) 0%,rgb(132, 172, 180) 100%)',
                }}
              >
                {[
                  { icon: Database, text: "Data Warehousing" },
                  { icon: PieChart, text: "Predictive Modeling" },
                  { icon: Map, text: "Geospatial Analysis" },
                  { icon: Bot, text: "AI-Powered Insights" },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#f8f9fa",
                      color:'white',
                      padding: "15px",
                      borderRadius: "8px",
                      textAlign: "center",
                      background: 'linear-gradient(135deg,rgb(50, 104, 117) 0%,rgb(132, 172, 180) 100%)',
                    }}
                  >
                    <item.icon
                      size={24}
                      color="#FFA916"
                      strokeWidth={1.5}
                    />
                    
                    <p style={{ margin: "10px 0 0", color: "white" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultancy */}
            <div
              className="wow fadeInRight"
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(2, 74, 89, 0.1)",
                background: 'linear-gradient(135deg,rgb(50, 104, 117) 0%,rgb(132, 172, 180) 100%)',
              }}
            >
              <h3
                style={{
                  color: "#FFA916",
                  marginBottom: "20px",
                  fontSize: "1.8rem",
                }}
              >
                <Handshake 
                  size={28} 
                  color="#FFA916" 
                  style={{ marginRight: "10px" }} 
                />
                Strategic Consultancy
              </h3>
              <div
                style={{
                  borderLeft: "3px solid #FFA916",
                  paddingLeft: "20px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontStyle: "italic",
                    marginBottom: "15px",
                  }}
                >
                  "We help you navigate digital transformation with proven frameworks and industry expertise"
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                  
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#024A59",
                      marginRight: "15px",
                    }}
                  > <User style={{color:'#FFA916'}}/></div>
                  <div>
                    <p style={{ margin: 0, fontWeight: "600", color: "white" }}>
                      Shadrack Kipkoech
                    </p>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#FFA916" }}>
                      Lead Consultant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div
            style={{
              marginTop: "80px",
              position: "relative",
              padding: "40px 0",
            }}
          >
            <h3
              style={{
                color: "#024A59",
                textAlign: "center",
                marginBottom: "50px",
                fontSize: "2rem",
              }}
            >
              Our Implementation Process
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "0",
                  right: "0",
                  height: "3px",
                  backgroundColor: "#FFA916",
                  zIndex: "1",
                }}
              ></div>
              {[
                { icon: MessageCircle, title: "Consultation" },
                { icon: Search, title: "Analysis" },
                { icon: DraftingCompass, title: "Design" },
                { icon: Rocket, title: "Launch" },
                { icon: LineChart, title: "Optimize" },
              ].map((step, index) => (
                <div
                  key={index}
                  style={{
                    zIndex: "2",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#024A59",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px",
                    }}
                  >
                    <step.icon
                      color="white"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4
                    style={{
                      color: "#024A59",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                    }}
                  >
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          backgroundColor: "#FFA916",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              color: "#024A59",
              fontSize: "2.5rem",
              marginBottom: "30px",
              fontWeight: "700",
            }}
          >
            Ready to Transform Your Business?
          </h2>
          <p
            style={{
              color: "#024A59",
              fontSize: "1.2rem",
              marginBottom: "40px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Schedule a free consultation with our experts to discover how we can
            optimize your business operations
          </p>
          <button
            style={{
              backgroundColor: "#024A59",
              color: "#fff",
              padding: "15px 40px",
              borderRadius: "30px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#01303b";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#024A59";
              e.target.style.transform = "translateY(0)";
            }}
            onClick={() => navigate("/contact")}
          >
            Get Started Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;