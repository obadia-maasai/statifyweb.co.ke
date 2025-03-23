import React, { useState } from 'react';
import "../App.css"
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import header from "../assests/images/carousel-1.jpg"


const ContactUs = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_mobile: '',
    from_date: '',
    from_time: '',
    problem_description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const templateParams = { ...formData };

    emailjs
      .send('service_d72c317', 'template_m2utjtl', templateParams)
      .then(
        () => {
          alert('Appointment booked successfully! Check your email for confirmation.');
          setFormData({
            from_name: '',
            from_email: '',
            from_mobile: '',
            from_date: '',
            from_time: '',
            problem_description: '',
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send email. Please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div>
      <div
  className="container-fluid page-header py-1 mb-2 wow fadeIn justify-content-center text-center"
  data-wow-delay="0.1s"
  style={{
    backgroundImage: `url(${header})`, // Replace 'header' with the correct image path
    backgroundSize: "cover", // Ensures the image covers the entire background
    backgroundPosition: "center", // Centers the background image
    backgroundRepeat: "no-repeat", // Prevents tiling of the image
    height: "200px", // Reduced height to make it slimmer
  }}
>
  <div className="container py-2">
    <h1
      className="display-5 mb-2 animated slideInDown"
      style={{ color: '#FFA916',fontWeight:"bolder" }}
    >
      Contact Us
    </h1>
    <nav
      aria-label="breadcrumb"
      className="animated slideInDown"
    >
      <ol className="breadcrumb text-uppercase mb-0 justify-content-center text-center">
        <li className="breadcrumb-item">
          <a href="/" style={{ color: '#FFA916' ,fontWeight:"bold"}}>
            Home
          </a>
        </li>
        <li className="breadcrumb-item">
          <p href="#" style={{ color: '#FFA916', marginBottom: 0 }}>
            Pages
          </p>
        </li>
        <li
          className="breadcrumb-item  active"
          aria-current="page"
          style={{ color: '#024A59',fontWeight:"bold" }}
        >
          Contact Us
        </li>
      </ol>
    </nav>
  </div>
</div>

      {/* Appointment Section Start */}
      <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      {/* Appointment Description */}
      <div
        className="col-lg-6"
        style={{
          animation: 'slideInLeft 1s ease-in-out',
          animationFillMode: 'both',
        }}
      >
        <p
          className="d-inline-block border rounded-pill py-1 px-4"
          style={{
            backgroundColor: '#024A59',
            color: '#FFA916',
          }}
        >
          Book Demo
        </p>
        <h1 style={{ color: 'black' }} className="mb-4">
          Make An Appointment To Visit Our Company
        </h1>
        <p style={{ color: 'black' }} className="mb-4">
          Book a visit to our company and explore our services firsthand. Meet
          our expert team, discuss your needs, and discover tailored solutions
          in a welcoming environment. Schedule your appointment today!
        </p>
      </div>
      {/* Appointment Form */}
      <div
        className="col-lg-6"
        style={{
          animation: 'slideInRight 1s ease-in-out',
          animationFillMode: 'both',
        }}
      >
        <div
          className="rounded h-100 d-flex align-items-center p-5"
          style={{ backgroundColor: '#024A59' }}
        >
          <form onSubmit={handleBookingSubmit}>
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input
                  style={{ color: 'black' }}
                  type="text"
                  name="from_name"
                  className="form-control border-0"
                  placeholder="Your Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  style={{ color: 'black' }}
                  type="email"
                  name="from_email"
                  className="form-control border-0"
                  placeholder="Your Email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  style={{ color: 'black' }}
                  type="text"
                  name="from_mobile"
                  className="form-control border-0"
                  placeholder="Your Mobile"
                  value={formData.from_mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  style={{ color: 'black' }}
                  type="date"
                  name="from_date"
                  className="form-control border-0"
                  value={formData.from_date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  style={{ color: 'black' }}
                  type="time"
                  name="from_time"
                  className="form-control border-0"
                  value={formData.from_time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  style={{ color: 'black' }}
                  name="problem_description"
                  className="form-control border-0"
                  rows="5"
                  placeholder="Describe your problem"
                  value={formData.problem_description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  style={{ backgroundColor: '#FFA916', color: '#024A59' }}
                  className="btn w-100 py-3"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Book Appointment'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  {`
    @keyframes slideInLeft {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `}
</style>

      {/* Appointment Section End */}

      {/* Contact Section Start */}
      <div className="container-xxxxl py-5">
        <div className="container">
          <div className="row g-4">
            {/* Contact Details */}
            <div className="col-lg-4">
              <div className="h-100 rounded d-flex align-items-center p-5" style={{ backgroundColor: '#024A59' }}>
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: '55px', height: '55px' }}>
                  <i className="fa fa-map-marker-alt" style={{ color: '#FFA916' }}></i>
                </div>
                <div className="ms-4">
                  <p className="mb-2" style={{ color: '#FFA916' }}>
                    Address
                  </p>
                  <h5 className="mb-0" style={{ color: 'white' }}>
                    Ngong, Uptown Mall
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="h-100 rounded d-flex align-items-center p-5" style={{ backgroundColor: '#024A59' }}>
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: '55px', height: '55px' }}>
                  <i className="fa fa-phone-alt" style={{ color: '#FFA916' }}></i>
                </div>
                <div className="ms-4">
                  <p className="mb-2" style={{ color: '#FFA916' }}>
                    Call Us Now
                  </p>
                  <h5 style={{ color: 'white' }}>
                    <a href="https://wa.me/254796265933" style={{ color: 'inherit' }}>+254796265933</a><br />
                    <a href="https://wa.me/254728813009" style={{ color: 'inherit' }}>+254728813009</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="h-100 rounded d-flex align-items-center p-5" style={{ backgroundColor: '#024A59' }}>
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: '55px', height: '55px' }}>
                  <i className="fa fa-envelope-open" style={{ color: '#FFA916' }}></i>
                </div>
                <div className="ms-4">
                  <p className="mb-2" style={{ color: '#FFA916' }}>
                    Mail Us Now
                  </p>
                  <h5 style={{ color: 'white' }}>
                    <a href="mailto:info@statify.co.ke" style={{ color: 'inherit' }}>info@statify.co.ke</a>
                  </h5>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="rounded p-5" style={{ backgroundColor: '#024A59' }}>
                <p className="d-inline-block border rounded-pill py-1 px-4" style={{ color: '#FFA916' }}>
                  Contact Us
                </p>
                <h1 className="mb-4" style={{ color: '#FFA916' }}>
                  Have Any Query? Please Contact Us!
                </h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input style={{ color: 'black' }} type="text" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input style={{ color: 'black' }} type="email" className="form-control" placeholder="Your Email" required />
                    </div>
                    <div className="col-12">
                      <textarea style={{ color: 'black' }} className="form-control" rows="5" placeholder="Describe your problem" required></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn w-100 py-3" type="submit" style={{ backgroundColor: '#FFA916', color: '#024A59' }}>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Map Section */}
            <div className="col-lg-6">
            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9818265242175!2d36.654182!3d-1.3502966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f037eb4e3c86b%3A0xebe7ae25b6b1fa05!2sUptown%20Mall%2C%20Ngong!5e0!3m2!1sen!2ske!4v1699261116928!5m2!1sen!2ske" 
                            frameBorder="0"
  style={{ minHeight: '600px', border: '0' , width:'500px'}}
  allowFullScreen
  aria-hidden="false"
  tabIndex="0"
  title="Google Map showing Uptown Mall"
/>


            </div>
          </div>
        </div>
      </div>
      {/* Contact Section End */}
    </div>
  );
};

export default ContactUs;


// import React, { useState } from 'react';
// import "../App.css"
// import emailjs from 'emailjs-com';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import header from "../assests/images/carousel-1.jpg"

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     from_name: '',
//     from_email: '',
//     from_mobile: '',
//     from_date: '',
//     from_time: '',
//     problem_description: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleBookingSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     const templateParams = { ...formData };

//     emailjs
//       .send('service_d72c317', 'template_m2utjtl', templateParams)
//       .then(
//         () => {
//           alert('Appointment booked successfully! Check your email for confirmation.');
//           setFormData({
//             from_name: '',
//             from_email: '',
//             from_mobile: '',
//             from_date: '',
//             from_time: '',
//             problem_description: '',
//           });
//           setIsSubmitting(false);
//         },
//         (error) => {
//           console.error('EmailJS Error:', error);
//           alert('Failed to send email. Please try again later.');
//           setIsSubmitting(false);
//         }
//       );
//   };

//   return (
//     <div style={{ backgroundColor: '#f8f9fa' }}>
//       {/* Hero Header */}
//       <div
//         className="container-fluid py-5 mb-5 wow fadeIn"
//         data-wow-delay="0.1s"
//         style={{
//           background: `linear-gradient(rgba(2, 74, 89, 0.8), url(${header})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '60vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           position: 'relative'
//         }}
//       >
//         <div className="container text-center">
//           <h1
//             className="display-4 text-white mb-3 animated slideInDown"
//             style={{
//               textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//               fontWeight: '700'
//             }}
//           >
//             Get in Touch
//           </h1>
//           <nav aria-label="breadcrumb" className="animated slideInDown">
//             <ol className="breadcrumb justify-content-center mb-0">
//               <li className="breadcrumb-item">
//                 <a href="/" style={{ color: '#FFA916', fontWeight: '600' }}>Home</a>
//               </li>
//               <li className="breadcrumb-item">
//                 <span style={{ color: '#FFA916', fontWeight: '600' }}>Pages</span>
//               </li>
//               <li className="breadcrumb-item active text-white" aria-current="page">Contact</li>
//             </ol>
//           </nav>
//         </div>
//       </div>

//       {/* Appointment Section */}
//       <div className="container-xxl py-5">
//         <div className="container">
//           <div className="row g-5 align-items-center">
//             {/* Appointment Description */}
//             <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
//               <div
//                 className="d-inline-block rounded-pill px-4 py-1 mb-4"
//                 style={{ backgroundColor: '#024A59', color: '#FFA916' }}
//               >
//                 Book Demo
//               </div>
//               <h1 className="display-6 mb-4" style={{ color: '#024A59' }}>
//                 Schedule Your Personalized Consultation
//               </h1>
//               <p className="mb-4" style={{ color: '#666', lineHeight: '1.8' }}>
//                 Experience our solutions firsthand with a tailored demonstration. 
//                 Our experts will guide you through our services and answer all 
//                 your questions in a dedicated session.
//               </p>
//               <div className="bg-light rounded p-4" style={{ borderLeft: '4px solid #FFA916' }}>
//                 <h5 style={{ color: '#024A59' }}>Why Schedule a Demo?</h5>
//                 <ul className="list-unstyled">
//                   {[
//                     'Personalized solution walkthrough',
//                     'Direct access to technical experts',
//                     'Customized implementation plan',
//                     'Q&A session with our team'
//                   ].map((item, index) => (
//                     <li key={index} className="mb-2" style={{ color: '#666' }}>
//                       <i className="fas fa-check-circle me-2" style={{ color: '#FFA916' }}></i>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Appointment Form */}
//             <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
//               <div
//                 className="rounded p-5"
//                 style={{
//                   backgroundColor: '#024A59',
//                   boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
//                 }}
//               >
//                 <form onSubmit={handleBookingSubmit}>
//                   <div className="row g-3">
//                     <div className="col-12 col-sm-6">
//                       <input
//                         type="text"
//                         name="from_name"
//                         className="form-control"
//                         placeholder="Your Name"
//                         value={formData.from_name}
//                         onChange={handleChange}
//                         required
//                         style={{
//                           backgroundColor: 'rgba(255,255,255,0.9)',
//                           borderRadius: '8px',
//                           padding: '12px 20px',
//                           border: '2px solid transparent',
//                           transition: 'all 0.3s'
//                         }}
//                       />
//                     </div>
//                     <div className="col-12 col-sm-6">
//                       <input
//                         type="email"
//                         name="from_email"
//                         className="form-control"
//                         placeholder="Your Email"
//                         value={formData.from_email}
//                         onChange={handleChange}
//                         required
//                         style={{
//                           backgroundColor: 'rgba(255,255,255,0.9)',
//                           borderRadius: '8px',
//                           padding: '12px 20px',
//                           border: '2px solid transparent',
//                           transition: 'all 0.3s'
//                         }}
//                       />
//                     </div>
//                     <div className="col-12 col-sm-6">
//                       <input
//                         type="text"
//                         name="from_mobile"
//                         className="form-control"
//                         placeholder="Mobile Number"
//                         value={formData.from_mobile}
//                         onChange={handleChange}
//                         required
//                         style={{
//                           backgroundColor: 'rgba(255,255,255,0.9)',
//                           borderRadius: '8px',
//                           padding: '12px 20px',
//                           border: '2px solid transparent',
//                           transition: 'all 0.3s'
//                         }}
//                       />
//                     </div>
//                     <div className="col-12 col-sm-6">
//                       <input
//                         type="date"
//                         name="from_date"
//                         className="form-control"
//                         value={formData.from_date}
//                         onChange={handleChange}
//                         required
//                         style={{
//                           backgroundColor: 'rgba(255,255,255,0.9)',
//                           borderRadius: '8px',
//                           padding: '12px 20px',
//                           border: '2px solid transparent',
//                           transition: 'all 0.3s'
//                         }}
//                       />
//                     </div>
//                     <div className="col-12 col-sm-6">
//                       <input
//                         type="time"
//                         name="from_time"
//                         className="form-control"
//                         value={formData.from_time}
//                         onChange={handleChange}
//                         required
//                         style={{
//                           backgroundColor: 'rgba(255,255,255,0.9)',
//                           borderRadius: '8px',
//                           padding: '12px 20px',
//                           border: '2px solid transparent',
//                           transition: 'all 0.3s'
//                         }}
//                       />
//                     </div>
//                     <div className="col-12">
//                       <textarea
//                         name="problem_description"
//                         className="form-control"
//                         rows="4"
//                         placeholder="Describe your requirements"
//                         value={formData.problem_description}
//                         onChange={handleChange}
//                         required
//                         style={{
//                           backgroundColor: 'rgba(255,255,255,0.9)',
//                           borderRadius: '8px',
//                           padding: '12px 20px',
//                           border: '2px solid transparent',
//                           transition: 'all 0.3s'
//                         }}
//                       ></textarea>
//                     </div>
//                     <div className="col-12">
//                       <button
//                         className="btn w-100 py-3"
//                         type="submit"
//                         disabled={isSubmitting}
//                         style={{
//                           backgroundColor: '#FFA916',
//                           color: '#024A59',
//                           fontWeight: '600',
//                           borderRadius: '8px',
//                           transition: 'all 0.3s',
//                           transform: 'translateY(0)'
//                         }}
//                         onMouseOver={(e) => {
//                           e.target.style.transform = 'translateY(-2px)';
//                           e.target.style.boxShadow = '0 5px 15px rgba(255,169,22,0.3)';
//                         }}
//                         onMouseOut={(e) => {
//                           e.target.style.transform = 'translateY(0)';
//                           e.target.style.boxShadow = 'none';
//                         }}
//                       >
//                         {isSubmitting ? (
//                           <div className="spinner-border spinner-border-sm" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                           </div>
//                         ) : (
//                           'Schedule Consultation'
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Information */}
//       <div className="container-xxl py-5">
//         <div className="container">
//           <div className="row g-4">
//             {/* Contact Cards */}
//             {[
//               {
//                 icon: 'fa-map-marker-alt',
//                 title: 'Visit Us',
//                 content: 'Ngong, Uptown Mall',
//                 style: { backgroundColor: '#024A59' }
//               },
//               {
//                 icon: 'fa-phone-alt',
//                 title: 'Call Us',
//                 content: (
//                   <>
//                     <a href="tel:+254796265933" style={{ color: 'white' }}>+254 796 265933</a><br />
//                     <a href="tel:+254728813009" style={{ color: 'white' }}>+254 728 813009</a>
//                   </>
//                 ),
//                 style: { backgroundColor: '#FFA916' }
//               },
//               {
//                 icon: 'fa-envelope',
//                 title: 'Email Us',
//                 content: <a href="mailto:info@statify.co.ke" style={{ color: 'white' }}>info@statify.co.ke</a>,
//                 style: { backgroundColor: '#024A59' }
//               }
//             ].map((item, index) => (
//               <div className="col-lg-4 col-md-6 wow fadeInUp" key={index} data-wow-delay={`0.${index + 1}s`}>
//                 <div
//                   className="d-flex align-items-center p-4 rounded-3 h-100"
//                   style={{
//                     ...item.style,
//                     transition: 'all 0.3s',
//                     cursor: 'pointer'
//                   }}
//                   onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
//                   onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
//                 >
//                   <div
//                     className="icon-box d-flex align-items-center justify-content-center me-4"
//                     style={{
//                       width: '60px',
//                       height: '60px',
//                       backgroundColor: 'rgba(255,255,255,0.2)',
//                       borderRadius: '12px'
//                     }}
//                   >
//                     <i className={`fas ${item.icon} fa-2x`} style={{ color: 'white' }}></i>
//                   </div>
//                   <div>
//                     <h5 className="text-white mb-1">{item.title}</h5>
//                     <div className="text-white-50">{item.content}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Contact Form */}
//             <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
//               <div
//                 className="rounded p-5 h-100 d-flex flex-column justify-content-center"
//                 style={{ backgroundColor: '#024A59', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
//               >
//                 <h3 className="text-white mb-4">Quick Message</h3>
//                 <form>
//                   <div className="row g-3">
//                     <div className="col-md-6">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Your Name"
//                         style={{
//                           backgroundColor: 'rgba(255,255,255,0.9)',
//                           borderRadius: '8px',
//                           padding: '12px 20px'
//                         }}
//                       />
//                     </div>
//                     <div className="col-md-6">
//                       <input
//                         type="email"
//                         className="form-control"
//                         placeholder="Your Email"
//                         style={{
//                           backgroundColor: 'rgba(255,255,255,0.9)',
//                           borderRadius: '8px',
//                           padding: '12px 20px'
//                         }}
//                       />
//                     </div>
//                     <div className="col-12">
//                       <textarea
//                         className="form-control"
//                         rows="4"
//                         placeholder="Your Message"
//                         style={{
//                           backgroundColor: 'rgba(255,255,255,0.9)',
//                           borderRadius: '8px',
//                           padding: '12px 20px'
//                         }}
//                       ></textarea>
//                     </div>
//                     <div className="col-12">
//                       <button
//                         className="btn w-100 py-3"
//                         type="submit"
//                         style={{
//                           backgroundColor: '#FFA916',
//                           color: '#024A59',
//                           fontWeight: '600',
//                           borderRadius: '8px'
//                         }}
//                       >
//                         Send Message
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             {/* Map Section */}
//             <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
//               <div
//                 className="rounded-3 overflow-hidden h-100"
//                 style={{
//                   boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
//                   border: '3px solid #FFA916'
//                 }}
//               >
//                <iframe
//                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9818265242175!2d36.654182!3d-1.3502966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f037eb4e3c86b%3A0xebe7ae25b6b1fa05!2sUptown%20Mall%2C%20Ngong!5e0!3m2!1sen!2ske!4v1699261116928!5m2!1sen!2ske" 
//                              frameBorder="0"
//    style={{ minHeight: '600px', border: '0' , width:'500px'}}
//    allowFullScreen
//    aria-hidden="false"
//    tabIndex="0"
//    title="Google Map showing Uptown Mall"
//  />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;