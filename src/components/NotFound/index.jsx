import React from 'react';

const NotFound = () => {
  return (
    <div className="container">
      <img src={`${__dirname}image/404.svg`} alt="Page not found" style={{ display: "block", margin: "0 auto"}} />
    </div>
  );
};

export default NotFound;
