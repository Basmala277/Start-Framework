import React from "react";
import "./Contact.css";

function ContactSection() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">CONATCT SECTION</h2>
          <div className="divider-custom mb-5">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <form>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control no-border"
                id="userName"
                placeholder="userName"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="number"
                className="form-control no-border"
                id="userAge"
                placeholder="userAge"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control no-border"
                id="userEmail"
                placeholder="userEmail"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control no-border"
                id="userPassword"
                placeholder="userPassword"
              />
            </div>
            <button type="submit" className="btn btn-green w-20">
              send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
