import React from "react";
// higher order component
import { withRouter } from 'react-router-dom';

import "./menu-item.styles.scss";

// destructure props
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
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

// give access to router props - match-location-history
export default withRouter(MenuItem);
