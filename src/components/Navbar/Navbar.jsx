import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <div className="p-4 navbar shadow sticky-top">
      <div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon
            className="admin-icon"
            icon={faUserCircle}
          ></FontAwesomeIcon>
          <h6 className="ms-2">Admin</h6>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
