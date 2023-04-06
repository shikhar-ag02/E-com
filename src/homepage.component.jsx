import React from "react";
import "./homepage.style.scss";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats </h1>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets </h1>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Sneakers</h1>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Women </h1>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Men </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
