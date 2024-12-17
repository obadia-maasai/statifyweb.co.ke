import React, { useState } from 'react';
import "../App.css"
// import moment from 'moment';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PageHeader from '../components/PageHeader';

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
      {/* <PageHeader/> */}
      {/* Appointment Section Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Appointment Description */}
            <div className="col-lg-6">
              <p className="d-inline-block border rounded-pill py-1 px-4" style={{ backgroundColor: '#024A59', color: '#FFA916' }}>
                Book Demo
              </p>
              <h1 style={{ color: 'black' }} className="mb-4">
                Make An Appointment To Visit Our Company
              </h1>
              <p style={{ color: 'black' }} className="mb-4">
                Book a visit to our company and explore our services firsthand. Meet our expert team, discuss your needs, and discover tailored solutions in a welcoming environment. Schedule your appointment today!
              </p>
            </div>
            {/* Appointment Form */}
            <div className="col-lg-6">
              <div className="rounded h-100 d-flex align-items-center p-5" style={{ backgroundColor: '#024A59' }}>
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
