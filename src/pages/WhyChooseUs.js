// import React from 'react';
// import feature from "../assests/images/feature.jpg"
// import "../App.css"

// const WhyChooseUs = () => {
//   return (
//     <div className="container-fluid overflow-hidden my-5 px-lg-0">
//       <div className="container-xxl feature px-lg-0" style={{ backgroundColor: '#024A59' }}>
//         <div className="row g-0 mx-lg-0">
//           {/* Left Text Section */}
//           <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
//             <div className="p-lg-5 ps-lg-0">
//               <p
//                 style={{ color: '#FFA916' }}
//                 className="d-inline-block border rounded-pill py-1 px-4"
//               >
//                 Why Choose Statify Limited Company
//               </p>
//               <p className="text-white mb-4 pb-2">
//                 Statify Solutions Limited is a reliable provider of Enterprise Resource Planning
//                 System and solutions for institutions, businesses, and organizations.
//               </p>
//               <div className="row g-4">
//                 {/* Feature 1 */}
//                 <div className="col-6">
//                   <div className="d-flex align-items-center">
//                     <div
//                       className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
//                       style={{ width: '55px', height: '55px' }}
//                     >
//                       <i className="fa fa-user-md" style={{ color: '#FFA916' }}></i>
//                     </div>
//                     <div className="ms-4">
//                       <p className="text-white mb-2">Experience</p>
//                       <h5 className="text-white mb-0">Industry Expertise</h5>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Feature 2 */}
//                 <div className="col-6">
//                   <div className="d-flex align-items-center">
//                     <div
//                       className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
//                       style={{ width: '55px', height: '55px' }}
//                     >
//                       <i className="fa fa-check" style={{ color: '#FFA916' }}></i>
//                     </div>
//                     <div className="ms-4">
//                       <p className="text-white mb-2">Quality</p>
//                       <h5 className="text-white mb-0">Comprehensive & Quality ERP Solution</h5>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Feature 3 */}
//                 <div className="col-6">
//                   <div className="d-flex align-items-center">
//                     <div
//                       className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
//                       style={{ width: '55px', height: '55px' }}
//                     >
//                       <i className="fa fa-comment-medical" style={{ color: '#FFA916' }}></i>
//                     </div>
//                     <div className="ms-4">
//                       <p className="text-white mb-2">Positive</p>
//                       <h5 className="text-white mb-0">Flexibility and Scalability</h5>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Feature 4 */}
//                 <div className="col-6">
//                   <div className="d-flex align-items-center">
//                     <div
//                       className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
//                       style={{ width: '55px', height: '55px' }}
//                     >
//                       <i className="fa fa-headphones" style={{ color: '#FFA916' }}></i>
//                     </div>
//                     <div className="ms-4">
//                       <p className="text-white mb-2">24 Hours</p>
//                       <h5 className="text-white mb-0">Support</h5>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Right Image Section */}
//           <div
//             className="col-lg-6 pe-lg-0 wow fadeIn"
//             data-wow-delay="0.5s"
//             style={{ minHeight: '400px' }}
//           >
//             <div className="position-relative h-100">
//               <img
//                 className="position-absolute img-fluid w-100 h-100"
//                 src={feature}
//                 style={{ objectFit: 'cover' }}
//                 alt="Feature"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;

import React from 'react';
import feature from "../assests/images/feature.jpg";
import "../App.css";

const WhyChooseUs = () => {
  return (
    <div 
      className="container-fluid overflow-hidden my-5 px-lg-0 wow fadeIn" 
      data-wow-delay="0.1s"
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        className="container-xxxl feature px-lg-0" 
        style={{ 
          backgroundColor: '#024A59',
          borderRadius: '20px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.15)'
        }}
      >
        <div className="row g-0 mx-lg-0">
          {/* Left Text Section */}
          <div 
            className="col-lg-6 feature-text py-5 wow fadeInLeft" 
            data-wow-delay="0.2s"
            style={{
              padding: '60px 40px',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div className="p-lg-5 ps-lg-0">
              <div 
                className="d-inline-block rounded-pill py-2 px-4 mb-4"
                style={{
                  backgroundColor: 'rgba(255,169,22,0.15)',
                  border: '2px solid #FFA916'
                }}
              >
                <p 
                  style={{ 
                    color: '#FFA916',
                    margin: 0,
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                  }}
                >
                  Why Choose Statify Limited
                </p>
              </div>
              <h1 
                className="text-white mb-4" 
                style={{
                  fontSize: '2.5rem',
                  lineHeight: 1.3,
                  fontWeight: '700'
                }}
              >
                Transforming Businesses Through Innovation
              </h1>
              <div className="row g-4">
                {[
                  { 
                    icon: 'fa-user-shield', 
                    title: 'Industry Expertise',
                    desc: '15+ Years Experience',
                    color: '#FFA916'
                  },
                  { 
                    icon: 'fa-check-double', 
                    title: 'Comprehensive Solutions',
                    desc: 'End-to-End ERP Systems',
                    color: '#FFA916'
                  },
                  { 
                    icon: 'fa-expand-arrows-alt', 
                    title: 'Flexibility',
                    desc: 'Scalable Architecture',
                    color: '#FFA916'
                  },
                  { 
                    icon: 'fa-headset', 
                    title: '24/7 Support',
                    desc: 'Dedicated Assistance',
                    color: '#FFA916'
                  }
                ].map((feature, index) => (
                  <div 
                    className="col-6" 
                    key={index}
                    style={{
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
                  >
                    <div className="d-flex align-items-center">
                      <div 
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle"
                        style={{ 
                          width: '65px', 
                          height: '65px',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          border: `2px solid ${feature.color}`
                        }}
                      >
                        <i 
                          className={`fas ${feature.icon} fa-lg`} 
                          style={{ color: feature.color }}
                        ></i>
                      </div>
                      <div className="ms-3">
                        <p 
                          className="mb-1" 
                          style={{
                            color: '#FFA916',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                          }}
                        >
                          {feature.desc}
                        </p>
                        <h5 
                          className="mb-0" 
                          style={{
                            color: '#fff',
                            fontSize: '1.1rem',
                            fontWeight: '600'
                          }}
                        >
                          {feature.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div 
            className="col-lg-6 pe-lg-0 wow fadeInRight" 
            data-wow-delay="0.4s"
            style={{ 
              minHeight: '500px',
              position: 'relative'
            }}
          >
            <div 
              className="position-relative h-100"
              style={{
                background: `linear-gradient(45deg, rgba(2,74,89,0.4), rgba(2,74,89,0.2)), url(${feature})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderTopRightRadius: '20px',
                borderBottomRightRadius: '20px'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '40px',
                  right: '40px',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                <h4 
                  style={{ 
                    color: '#024A59',
                    marginBottom: '15px',
                    fontWeight: '700'
                  }}
                >
                  Why We Stand Out
                </h4>
                <p 
                  style={{ 
                    color: '#666',
                    lineHeight: 1.6,
                    marginBottom: 0
                  }}
                >
                  Combining cutting-edge technology with industry expertise to deliver 
                  transformative ERP solutions that drive measurable business growth 
                  and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;