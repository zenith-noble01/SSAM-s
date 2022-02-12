import React from "react";
import "./NotFound.css";
import notfound from "../../images/31.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="Notfound">
      <div className="notfoundContainer">
        <div className="notFoundLeftContainer">
          <div className="topLeft">
            <p>Whoops that page is gone!</p>
          </div>
          <p>
            The link you clicked may be broken or the page may have been
            removed. You can try to use the search box again or go back to{" "}
            <Link ckassName="link" to="/">
              home page
            </Link>
          </p>
        </div>
        <div className="notFoundRightContainer">
          <img src={notfound} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
