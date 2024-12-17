import React from 'react';

const PageHeader = () => {
  return (
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn justify-content-center text-center"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <h1
          className="display-3 mb-3 animated slideInDown"
          style={{ color: '#FFA916' }}
        >
          Products
        </h1>
        <nav
          aria-label="breadcrumb"
          className="animated slideInDown"
        >
          <ol className="breadcrumb text-uppercase mb-0 justify-content-center text-center">
            <li className="breadcrumb-item">
              <a href="index.html" style={{ color: '#FFA916' }}>
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <h1 href="#" style={{ color: '#FFA916' }}>
                Pages
              </h1>
            </li>
            <li
              className="breadcrumb-item text-primary active"
              aria-current="page"
              style={{ color: '#024A59 !important' }}
            >
              Products
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
