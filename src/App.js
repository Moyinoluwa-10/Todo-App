import logo from "./logo.png";
import "./App.css";
import { useState } from "react";
import { send } from "emailjs-com";
import Verification from "./Verification";
import "./Verification.css";
import styled from "styled-components";

function App() {
  return (
    <div className="Verification">
      <Verification />
    </div>
  );
}

export default App;
