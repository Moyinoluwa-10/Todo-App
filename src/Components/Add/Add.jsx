import React from "react";
import "./Add.css";
import PlusImage from "../../assets/svgs/plus.svg";

const Add = () => {
  return (
    <div className="add">
      <div className="btn-cont">
        <button type="submit" className="btn-add">
          <img src={PlusImage} alt="plu-icon" />
        </button>
      </div>
    </div>
  );
};

export default Add;
