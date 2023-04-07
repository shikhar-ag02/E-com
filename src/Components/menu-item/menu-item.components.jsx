import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

const MenuItem = ({ title, image, id, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {" "}
      </div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()} </h1>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
