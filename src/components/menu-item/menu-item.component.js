import React from "react";
import "./menu-item.styles.scss";

// destructure props
const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`${size} menu-item`}
    >
      <div
        className="background-image"
        // give dynamic values
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle1">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
