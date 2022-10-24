import React from "react";
import VerificationCodeInput from "../../Components/VerificationCode/VerificationCodeInput";
import "./VerifyCode.css";

const VerifyCode = () => {
  return (
    <div className="flex fld hFull">
      <VerificationCodeInput />
    </div>
  );
};

export default VerifyCode;
