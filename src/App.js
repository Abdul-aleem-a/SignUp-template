import { useState } from "react";
import "./App.css";
import axios from "axios";
import icon1 from "../src/assests/business.png";
import icon2 from "../src/assests/microscope.png";
import icon3 from "../src/assests/note.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DiagnosticLabForm() {
  const [formData, setFormData] = useState({
    labName: "",
    name: "",
    role: "",
    pathologyReports: "",
    radiologyReports: "",
    mobileNumber: "",
    address: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = Object.values(formData).every((field) => field !== "");

    if (isFormValid) {
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setFormData({
        labName: "",
        name: "",
        role: "",
        pathologyReports: "",
        radiologyReports: "",
        mobileNumber: "",
        address: "",
      });
    } else {
      toast.error("Please fill out all fields!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="left-panel">
        <div className="feature d-flex">
          <img className="icons" src={icon1} alt="building" />
          <div style={{ marginLeft: "20px" }}>
            <h3 style={{ color: "white" }}>Eiusmod tempor</h3>
            <p style={{ color: "wheat" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="feature d-flex">
          <img className="icons" src={icon2} alt="building" />
          <div style={{ marginLeft: "20px" }}>
            <h3 style={{ color: "white" }}>Natus error sit</h3>
            <p style={{ color: "wheat" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="feature d-flex">
          <img className="icons" src={icon3} alt="building" />
          <div style={{ marginLeft: "20px" }}>
            <h3 style={{ color: "white" }}>Dignissimoss ducimus</h3>
            <p style={{ color: "wheat" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>

      <div className="form-container">
        <h1 style={{ fontFamily: "unset", fontWeight: "bold" }}>
          Sign up as <br />
          <span style={{ color: "blue" }}>Diagnostic Lab</span>
        </h1>
        <hr
          style={{
            width: "2em",
            marginLeft: "1%",
            padding: "2px",
            color: "black",
            marginTop: "-1px",
            backgroundColor: "black",
          }}
        />
        <form style={{ marginTop: "1em" }} onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Lab Name</label>
            <input
              type="text"
              name="labName"
              placeholder="Enter your laboratory name"
              value={formData.labName}
              onChange={handleChange}
              style={{ marginBottom: "-1em" }}
            />
          </div>
          <div className="form-group" style={{ display: "flex", gap: "5em" }}>
            <div style={{ flex: 1 }}>
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                style={{ marginBottom: "1em" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label>Your Role</label>
              <input
                type="text"
                name="role"
                placeholder="Enter your role in the lab"
                value={formData.role}
                onChange={handleChange}
                style={{ marginBottom: "1em" }}
              />
            </div>
          </div>
          <div className="form-group" style={{ display: "flex", gap: "5em" }}>
            <div style={{ flex: 1 }}>
              <label>Daily Pathology Reports</label>
              <input
                type="text"
                name="pathologyReports"
                placeholder="Number of pathology reports"
                value={formData.pathologyReports}
                onChange={handleChange}
                style={{ marginBottom: "1em" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label>Daily Radiology Reports</label>
              <input
                type="text"
                name="radiologyReports"
                placeholder="Number of radiology reports"
                value={formData.radiologyReports}
                onChange={handleChange}
                style={{ marginBottom: "1em" }}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              placeholder="Enter your mobile number"
              value={formData.mobileNumber}
              onChange={handleChange}
              style={{ marginBottom: "1em" }}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter lab address"
              value={formData.address}
              onChange={handleChange}
              style={{ marginBottom: "1em" }}
            />
          </div>
          <div className="form-group terms">
            <div className="terms-wrapper d-flex justify-content-between">
              <input type="checkbox" name="termsAccepted" />
              <label style={{ marginTop: "-1em" }}>
                I agree with all <a href="#">Terms and Conditions</a> and <br />
                <a href="#">Privacy Policies</a> of evolko.
              </label>
            </div>
            <button
              type="submit"
              className="submit-button"
              style={{ width: "10em" }}
            >
              Sign Up
            </button>
          </div>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
}

export default DiagnosticLabForm;
