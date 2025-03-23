// import React from "react";
// import "../App.css"
// import PageHeader from "../components/PageHeader";
// import about1 from "../assests/images/about-1.jpg"
// import about2 from "../assests/images/about-2.jpg"
// import vision from "../assests/images/carousel-1.jpg"
// import vision1 from "../assests/images/about-2.jpg"
// import feature from '../assests/images/feature.jpg'

// const AboutPage = () => {
//   return (
//     <div>
//       <PageHeader/>
//       {/* About Section */}
//       <div className="container-xxl py-5">
//         <div className="container">
//           <div className="row g-5">
//             <div className="col-lg-6">
//               <div className="d-flex flex-column">
//                 <img
//                   className="img-fluid rounded w-75 align-self-end"
//                   src={about1}
//                   alt="About Us"
//                 />
//                 <img
//                   className="img-fluid rounded w-50 bg-white pt-3 pe-3"
//                   src={about2}
//                   alt="About Us"
//                   style={{ marginTop: "-25%" }}
//                 />
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <p
//                 style={{
//                   color: "#FFA916",
//                   backgroundColor: "#024A59",
//                 }}
//                 className="d-inline-block border rounded-pill py-1 px-4"
//               >
//                 About Us
//               </p>
//               <h1 className="mb-4">Get to Know About Us!</h1>
//               <p style={{ color: "black" }}>
//                 Statify Solutions Limited is a reliable provider of Enterprise
//                 Resource Planning System and solutions for institutions,
//                 businesses, and organizations.
//               </p>
//               <p style={{ color: "black" }} className="mb-4">
//                 At Statify Solutions Limited, we pride ourselves on being a
//                 trusted partner for organizations looking to streamline their
//                 operations, improve efficiency, and achieve sustainable growth.
//                 With a focus on delivering cutting-edge ERP Solutions, we
//                 empower businesses to transform their processes and adapt
//                 seamlessly to the ever-evolving market landscape.
//               </p>
//               <p style={{ color: "black" }}>
//                 <i
//                   style={{ color: "#FFA916" }}
//                   className="far fa-check-circle me-3"
//                 ></i>
//                 Comprehensive ERP Solutions
//               </p>
//               <p style={{ color: "black" }}>
//                 <i
//                   style={{ color: "#FFA916" }}
//                   className="far fa-check-circle me-3"
//                 ></i>
//                 Industry Expertise
//               </p>
//               <p style={{ color: "black" }}>
//                 <i
//                   style={{ color: "#FFA916" }}
//                   className="far fa-check-circle me-3"
//                 ></i>
//                 Customization and Scalability
//               </p>
//               <p style={{ color: "black" }}>
//                 <i
//                   style={{ color: "#FFA916" }}
//                   className="far fa-check-circle me-3"
//                 ></i>
//                 End-to-End Support
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="container-fluid  overflow-hidden my-5 px-lg-0">
//         <div className="container-fluid feature px-lg-0" style={{ backgroundColor: "#024A59" }}>
//           <div className="row g-0 mx-lg-0">
//             <div className="col-lg-6 feature-text py-5">
//               <div className="p-lg-5 ps-lg-0">
//                 <p
//                   style={{ color: "#FFA916" }}
//                   className="d-inline-block border rounded-pill py-1 px-4"
//                 >
//                   Why Choose Statify Solutions Limited
//                 </p>
//                 <p className="text-white mb-4 pb-2">
//                   Choose Statify Solutions and unlock the full potential of your
//                   enterprise. Experience the difference of working with a
//                   partner committed to empowering your growth and transformation.
//                 </p>
//                 <div className="row g-4">
//                   <div className="col-6">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
//                         style={{ width: 55, height: 55 }}
//                       >
//                         <i
//                           style={{ color: "#FFA916" }}
//                           className="fa fa-user-md"
//                         ></i>
//                       </div>
//                       <div className="ms-4">
//                         <p className="text-white mb-2">Data</p>
//                         <h5 className="text-white mb-0">
//                           Centralized Data Processing
//                         </h5>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
//                         style={{ width: 55, height: 55 }}
//                       >
//                         <i
//                           style={{ color: "#FFA916" }}
//                           className="fa fa-check"
//                         ></i>
//                       </div>
//                       <div className="ms-4">
//                         <p className="text-white mb-2">Integration</p>
//                         <h5 className="text-white mb-0">
//                           Enterprise-wide Integration
//                         </h5>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
//                         style={{ width: 55, height: 55 }}
//                       >
//                         <i
//                           style={{ color: "#FFA916" }}
//                           className="fa fa-comment-medical"
//                         ></i>
//                       </div>
//                       <div className="ms-4">
//                         <p className="text-white mb-2">Positive</p>
//                         <h5 className="text-white mb-0">Consultation</h5>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
//                         style={{ width: 55, height: 55 }}
//                       >
//                         <i
//                           style={{ color: "#FFA916" }}
//                           className="fa fa-headphones"
//                         ></i>
//                       </div>
//                       <div className="ms-4">
//                         <p className="text-white mb-2">24 Hours</p>
//                         <h5 className="text-white mb-0">Support</h5>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
//                         style={{ width: 55, height: 55 }}
//                       >
//                         <i
//                           style={{ color: "#FFA916" }}
//                           className="fa fa-headphones"
//                         ></i>
//                       </div>
//                       <div className="ms-4">
//                         <p className="text-white mb-2">Reporting</p>
//                         <h5 className="text-white mb-0">Real-time Reporting</h5>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
//               <div className="position-relative h-100">
//                 <img
//                   className="position-absolute img-fluid w-100 h-100"
//                   src={feature}
//                   style={{ objectFit: "cover" }}
//                   alt="Features"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Vision Section */}
//       <div className="container-xxl py-5" style={{ backgroundColor: "#f8f9fa" }}>
//         <div className="container">
//           <div className="row g-5">
//             <div className="col-lg-6">
//               <div className="d-flex flex-column">
//                 <img
//                   className="img-fluid rounded w-75 align-self-end"
//                   src={vision}
//                   alt="Vision"
//                 />
//                 <img
//                   className="img-fluid rounded w-50 bg-white pt-3 pe-3"
//                   src={vision1}
//                   alt="Vision"
//                   style={{ marginTop: "-25%" }}
//                 />
//               </div>
//             </div>
//             <div
//               className="col-lg-6"
//               style={{ backgroundColor: "#024A59", color: "white" }}
//             >
//               <p
//                 style={{
//                   color: "#FFA916",
//                   backgroundColor: "#024A59",
//                 }}
//                 className="d-inline-block border rounded-pill py-1 px-4"
//               >
//                 Our Vision
//               </p>
//               <p className="text-white mb-4">
//                 To be the foremost global provider of transformative software
//                 solutions. We aspire to redefine the technological landscape by
//                 consistently delivering cutting-edge solutions that empower
//                 businesses to thrive in an ever-evolving digital era.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;


import React from "react";
import "../App.css";
// import PageHeader from '../components/PageHeader'
import about1 from "../assests/images/about-1.jpg";
import about2 from "../assests/images/about-2.jpg";
import vision from "../assests/images/carousel-1.jpg";
import vision1 from "../assests/images/about-2.jpg";
import feature from '../assests/images/feature.jpg';
import team1 from '../assests/images/feature.jpg';
import team2 from '../assests/images/carousel-2.jpg';
import team3 from '../assests/images/about-2.jpg';

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Header */}
      <div 
        className="container-fluid header-bg py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          background: `linear-gradient(rgba(2, 74, 89, 0.8), rgba(2, 74, 89, 0.9)), url(${about1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "30vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">
            About Statify Solutions
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="/" style={{ color: '#FFA916' }}>Home</a></li>
              <li className="breadcrumb-item"><a href="/" style={{ color: '#FFA916' }}>Pages</a></li>
              <li className="breadcrumb-item active text-white" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative">
                <img 
                  className="img-fluid rounded w-75" 
                  src={about1} 
                  alt="Our Team" 
                  style={{ transform: 'rotate(-3deg)' }}
                />
                <img 
                  className="img-fluid rounded w-50 position-absolute top-50 end-0" 
                  src={about2} 
                  alt="Office" 
                  style={{ transform: 'translateY(-25%) rotate(5deg)' }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="section-title">
                <span 
                  className="d-inline-block rounded-pill px-4 py-1"
                  style={{ backgroundColor: '#024A59', color: '#FFA916' }}
                >
                  Who We Are
                </span>
                <h1 className="display-6 mb-4 mt-3" style={{ color: '#024A59' }}>
                  Empowering Business Transformation
                </h1>
              </div>
              <p className="mb-4" style={{ color: '#666', lineHeight: '1.8' }}>
                Statify Solutions Limited is a leading provider of enterprise-grade ERP solutions 
                that transform business operations through digital innovation and strategic 
                process optimization.
              </p>
              <div className="row g-3">
                {['Comprehensive ERP Solutions', 'Industry Expertise', 'Customization & Scalability', '24/7 Support'].map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="d-flex align-items-center">
                      <div 
                        className="icon-box rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ 
                          width: '50px', 
                          height: '50px', 
                          backgroundColor: '#FFA916',
                          color: '#024A59'
                        }}
                      >
                        <i className="fas fa-check"></i>
                      </div>
                      <h6 className="mb-0" style={{ color: '#024A59' }}>{item}</h6>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a 
                  href="/contact" 
                  className="btn btn-primary px-4 py-2"
                  style={{
                    backgroundColor: '#024A59',
                    color: '#FFA916',
                    border: 'none',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#FFA916';
                    e.target.style.color = '#024A59';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#024A59';
                    e.target.style.color = '#FFA916';
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="section-title">
                <span 
                  className="d-inline-block rounded-pill px-4 py-1"
                  style={{ backgroundColor: '#024A59', color: '#FFA916' }}
                >
                  Why Choose Us
                </span>
                <h1 className="display-6 mb-4 mt-3" style={{ color: '#024A59' }}>
                  Your Trusted Technology Partner
                </h1>
                <p className="mb-4" style={{ color: '#666' }}>
                  We combine technical excellence with deep industry knowledge to deliver 
                  transformative solutions that drive measurable business outcomes.
                </p>
              </div>
              <div className="row g-3">
                {[
                  { icon: 'fa-database', title: 'Centralized Data Processing', text: 'Unified data management across all departments' },
                  { icon: 'fa-link', title: 'Enterprise Integration', text: 'Seamless system integration ecosystem' },
                  { icon: 'fa-chart-line', title: 'Real-time Analytics', text: 'AI-powered business intelligence dashboards' },
                  { icon: 'fa-shield-alt', title: 'Security First', text: 'Enterprise-grade security protocols' }
                ].map((feature, index) => (
                  <div className="col-md-6 wow fadeIn" data-wow-delay={`0.${index + 1}s`} key={index}>
                    <div 
                      className="feature-item p-4 rounded"
                      style={{ 
                        backgroundColor: 'white',
                        transition: 'all 0.3s',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
                    >
                      <div 
                        className="icon-box mb-3"
                        style={{ 
                          width: '60px', 
                          height: '60px', 
                          backgroundColor: '#FFA916',
                          borderRadius: '12px'
                        }}
                      >
                        <i className={`fas ${feature.icon} fa-2x`} style={{ color: '#024A59' }}></i>
                      </div>
                      <h5 style={{ color: '#024A59' }}>{feature.title}</h5>
                      <p style={{ color: '#666' }}>{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="position-relative h-100">
                <img 
                  src={feature} 
                  className="img-fluid rounded-3" 
                  alt="Features" 
                  style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                />
                <div 
                  className="position-absolute bg-white rounded-pill px-4 py-2"
                  style={{ bottom: '-25px', left: '50%', transform: 'translateX(-50%)' }}
                >
                  <span style={{ color: '#024A59' }}>25+ Years Combined Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div 
        className="container-fluid py-5 wow fadeIn" 
        data-wow-delay="0.1s"
        style={{ 
          background: `linear-gradient(45deg, rgba(2, 74, 89, 0.9), rgba(2, 74, 89, 0.95)), url(${vision})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 text-white">
              <span 
                className="d-inline-block rounded-pill px-4 py-1 mb-3"
                style={{ backgroundColor: '#FFA916', color: '#024A59' }}
              >
                Our Vision
              </span>
              <h1 className="display-6 mb-4">Shaping the Future of Enterprise Technology</h1>
              <p className="mb-4 lead">
                To be the global leader in intelligent enterprise solutions that 
                empower businesses to thrive in the digital age through continuous 
                innovation and strategic partnerships.
              </p>
              <div className="row g-4">
                {['Innovation', 'Integrity', 'Excellence', 'Partnership'].map((value, index) => (
                  <div className="col-6" key={index}>
                    <div className="d-flex align-items-center">
                      <div 
                        className="icon-box rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ 
                          width: '50px', 
                          height: '50px', 
                          backgroundColor: '#FFA916',
                          color: '#024A59'
                        }}
                      >
                        <i className="fas fa-star"></i>
                      </div>
                      <h5 className="mb-0 text-white">{value}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src={vision1} 
                  className="img-fluid rounded-3" 
                  alt="Vision" 
                  style={{ boxShadow: '20px 20px 0 0 rgba(255,169,22,0.3)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <span 
              className="d-inline-block rounded-pill px-4 py-1 mb-3"
              style={{ backgroundColor: '#024A59', color: '#FFA916' }}
            >
              Leadership Team
            </span>
            <h1 className="display-6 mb-5" style={{ color: '#024A59' }}>Meet Our Experts</h1>
          </div>
          <div className="row g-4">
            {[
              { img: team1, name: 'John Smith', role: 'CEO' },
              { img: team2, name: 'Sarah Johnson', role: 'CTO' },
              { img: team3, name: 'Michael Brown', role: 'COO' }
            ].map((member, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${index + 1}s`} key={index}>
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src={member.img} alt={member.name} />
                    <div className="team-overlay">
                      <div className="d-flex align-items-center justify-content-center h-100">
                        <a className="btn btn-square mx-1" href="/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="btn btn-square mx-1" href="/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-square mx-1" href="/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center p-4" style={{ backgroundColor: '#024A59' }}>
                    <h5 className="mb-0 text-white">{member.name}</h5>
                    <small className="text-uppercase" style={{ color: '#FFA916' }}>{member.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-fluid py-5 bg-light">
        <div className="container text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-6 mb-4" style={{ color: '#024A59' }}>
                Ready to Transform Your Business?
              </h1>
              <p className="mb-4 lead" style={{ color: '#666' }}>
                Let's discuss how we can help you achieve operational excellence through 
                intelligent enterprise solutions.
              </p>
              <a 
                href="/contact" 
                className="btn btn-primary px-5 py-3"
                style={{
                  backgroundColor: '#024A59',
                  color: '#FFA916',
                  border: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#FFA916';
                  e.target.style.color = '#024A59';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#024A59';
                  e.target.style.color = '#FFA916';
                }}
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;