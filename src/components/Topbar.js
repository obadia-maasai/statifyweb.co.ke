// import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';



// const Topbar = () => {
//   return (
//     <div style={{ width: '100%', margin: 0, padding: 0 }}>
//       <div
//         style={{
//           backgroundColor: '#024A59',
//           color: '#FFA916',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           padding: '5px 20px',
//           fontSize: '12px',
//         }}
//       >
//         {/* Left Section */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           {/* Email Section */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
//             <i
//               className="far fa-envelope"
//               style={{ color: '#FFA916', fontSize: '14px' }}
//             ></i>
//             <a
//               href="mailto:info@statify.co.ke"
//               style={{ textDecoration: 'none', color: '#FFA916' }}
//             >
//               info@statify.co.ke
//             </a>
//           </div>

//           {/* Location Section */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
//             <i
//               className="fa fa-map-marker-alt"
//               style={{ color: '#FFA916', fontSize: '14px' }}
//             ></i>
//             <span>Ngong, Uptown Mall</span>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
//           {/* Phone Numbers */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
//             <div
//               onClick={() => window.open('https://wa.me/254796265933', '_blank')}
//               style={{
//                 textDecoration: 'none',
//                 color: '#FFA916',
//                 cursor: 'pointer',
//               }}
//             >
//               +254796265933
//             </div>
//             <div
//               onClick={() => window.open('https://wa.me/254728813009', '_blank')}
//               style={{
//                 textDecoration: 'none',
//                 color: '#FFA916',
//                 cursor: 'pointer',
//               }}
//             >
//               +254728813009
//             </div>
//           </div>

//           {/* Social Media Icons */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//   <button
//     onClick={() => window.open('https://facebook.com', '_blank')}
//     style={{
//       backgroundColor: '#FFA916',
//       border: 'none',
//       borderRadius: '50%',
//       width: '25px',
//       height: '25px',
//       color: '#024A59',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       cursor: 'pointer',
//     }}
//   >
//     <FontAwesomeIcon icon={faFacebookF} />
//   </button>
//   <button
//     onClick={() => window.open('https://twitter.com', '_blank')}
//     style={{
//       backgroundColor: '#FFA916',
//       border: 'none',
//       borderRadius: '50%',
//       width: '25px',
//       height: '25px',
//       color: '#024A59',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       cursor: 'pointer',
//     }}
//   >
//     <FontAwesomeIcon icon={faTwitter} />
//   </button>
//   <button
//     onClick={() => window.open('https://linkedin.com', '_blank')}
//     style={{
//       backgroundColor: '#FFA916',
//       border: 'none',
//       borderRadius: '50%',
//       width: '25px',
//       height: '25px',
//       color: '#024A59',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       cursor: 'pointer',
//     }}
//   >
//     <FontAwesomeIcon icon={faLinkedinIn} />
//   </button>
//   <button
//     onClick={() => window.open('https://instagram.com', '_blank')}
//     style={{
//       backgroundColor: '#FFA916',
//       border: 'none',
//       borderRadius: '50%',
//       width: '25px',
//       height: '25px',
//       color: '#024A59',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       cursor: 'pointer',
//     }}
//   >
//     <FontAwesomeIcon icon={faInstagram} />
//   </button>
// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

import React from 'react';
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Topbar = () => {
  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <div
        style={{
          backgroundColor: '#024A59',
          color: '#FFA916',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '5px 20px',
          fontSize: '12px',
        }}
      >
        {/* Left Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Email Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Mail color="#FFA916" size={14} />
            <a
              href="mailto:info@statify.co.ke"
              style={{ textDecoration: 'none', color: '#FFA916' }}
            >
              info@statify.co.ke
            </a>
          </div>

          {/* Location Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MapPin color="#FFA916" size={14} />
            <span>Ngong, Uptown Mall</span>
          </div>
        </div>

        {/* Right Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Phone Numbers */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div
              onClick={() => window.open('https://wa.me/254796265933', '_blank')}
              style={{
                textDecoration: 'none',
                color: '#FFA916',
                cursor: 'pointer',
              }}
            >
              +254796265933
            </div>
            <div
              onClick={() => window.open('https://wa.me/254728813009', '_blank')}
              style={{
                textDecoration: 'none',
                color: '#FFA916',
                cursor: 'pointer',
              }}
            >
              +254728813009
            </div>
          </div>

          {/* Social Media Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => window.open('https://facebook.com', '_blank')}
              style={{
                backgroundColor: '#FFA916',
                border: 'none',
                borderRadius: '50%',
                width: '25px',
                height: '25px',
                color: '#024A59',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <Facebook color="#024A59" size={16} />
            </button>
            <button
              onClick={() => window.open('https://twitter.com', '_blank')}
              style={{
                backgroundColor: '#FFA916',
                border: 'none',
                borderRadius: '50%',
                width: '25px',
                height: '25px',
                color: '#024A59',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <Twitter color="#024A59" size={16} />
            </button>
            <button
              onClick={() => window.open('https://linkedin.com', '_blank')}
              style={{
                backgroundColor: '#FFA916',
                border: 'none',
                borderRadius: '50%',
                width: '25px',
                height: '25px',
                color: '#024A59',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <Linkedin color="#024A59" size={16} />
            </button>
            <button
              onClick={() => window.open('https://instagram.com', '_blank')}
              style={{
                backgroundColor: '#FFA916',
                border: 'none',
                borderRadius: '50%',
                width: '25px',
                height: '25px',
                color: '#024A59',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <Instagram color="#024A59" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;