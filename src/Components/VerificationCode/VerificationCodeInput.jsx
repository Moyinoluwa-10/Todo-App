import React, { useState } from "react";
import "./VerificationCodeInput.css";
import Form from "react-bootstrap/Form";

const VerificationCodeInput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="verificationCodeInput d-flex justify-content-center flex-column gap-5">
      <div className="top d-flex justify-content-center align-items-center flex-column">
        <h2>Email Verification</h2>
        <p className="d-flex align-items-center flex-column">
          <span>A Verification Code Has been sent to </span>
          <span className="fw-semibold">fgi******@gmail.com</span>
        </p>
      </div>
      <div className="form d-flex justify-content-center align-items-center gap-2">
        {otp.map((data, index) => {
          return (
            <Form.Control
              className="input"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      <p>Entered code-{otp.join("")}</p>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => {
          alert("Entered OTP is " + otp.join(""));
          setOtp([...otp.map((v) => "")]);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default VerificationCodeInput;
