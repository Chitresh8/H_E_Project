import React from "react";
import "./Modal.css";

export const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-content">
          <div className="sub-modal-content-1">
            <h1>Details</h1>
          </div>
          <div className="content">
            <div className="sub-modal-content-2">
              <h5>S.No</h5>
              <p>{props.sno}</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Name</h5>
              <p>{props.name}</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Brand Name</h5>
              <p>{props.brandname}</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Motor Brand</h5>
              <p>{props.motorbrand}</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Motor Model</h5>
              <p>{props.motormodel}</p>
            </div>
          </div>
        </div>
        <div className="close-btn">
          <button onClick={props.closeClickHandler}>Close</button>
        </div>
      </div>
    </div>
  );
};
