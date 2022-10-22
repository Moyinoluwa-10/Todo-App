import "./Verification.css";
import { useState } from "react";
import { send } from "emailjs-com";
import styled from "styled-components";
import logo from "./logo.png";

const StyledBox = styled.div`
  position: relative;
  width: 428px;
  height: 926px;

  background: #ffffff;
`;

const StyledButton = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px, 24px, 10px, 24px;
  gap: 10px;

  position: absolute;
  width: 380px;
  height: 50px;
  left: 24px;
  top: 701px;

  background: #110eaf;
  border: 1px solid #1511d2;
  border-radius: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 24px;
  gap: 10px;

  position: absolute;
  width: 380px;
  height: 55px;
  left: 24px;
  top: 581px;

  border: 1px solid #110eaf;
  border-radius: 8px;
`;

const StyledInput = styled.input`
  width: 85px;
  height: 19px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: rgba(17, 14, 175, 0.69);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Verification = () => {
  const [toSend, setToSend] = useState({
    Input_email: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    {
      const onSubmit = (e) => {
        e.preventDefault();
        send("service_f1t1h19", "__ejs-test-mail-service__", toSend, "User ID")
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
          })
          .catch((err) => {
            console.log("FAILED...", err);
          });
      };
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <StyledBox>
      <img src={logo} alt="Group1 logo" />
      <div>
        {
          <StyledForm onSubmit={onSubmit}>
            <StyledInput
              type="text"
              name="Input_email"
              placeholder="Input_email"
              value={toSend.Input_email}
              onChange={handleChange}
            />
            <StyledButton type="submit">Get Started</StyledButton>
          </StyledForm>
        }
      </div>
    </StyledBox>
  );
};

export default Verification;
