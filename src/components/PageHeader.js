import React from 'react';
import header from "../assests/images/header-page.jpg"

const PageHeader = () => {
  return (
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
      style={{ color: '#FFA916', fontWeight:"bolder" }}
    >
      About Us
    </h1>
    <nav
      aria-label="breadcrumb"
      className="animated slideInDown"
    >
      <ol className="breadcrumb text-uppercase mb-0 justify-content-center text-center">
        <li className="breadcrumb-item">
          <a href="/" style={{ color: '#FFA916',fontWeight:"bold" }}>
            Home
          </a>
        </li>
        <li className="breadcrumb-item">
          <p href="#" style={{ color: '#FFA916', marginBottom: 0,fontWeight:"bold" }}>
            Pages
          </p>
        </li>
        <li
          className="breadcrumb-item  active"
          aria-current="page"
          style={{ color: '#024A59',fontWeight:"bold" }}
        >
          About Us
        </li>
      </ol>
    </nav>
  </div>
</div>


  );
};

export default PageHeader;
