import React from "react";
import { GrAdd } from "react-icons/gr";

const Add = () => {
  return (
    <div className="position-absolute bottom-0 end-0 mx-3 mb-5">
      <button
        type="submit"
        className="btn btn-primary shadow p-3 mb-5 bg-body rounded bg-white border-0 d-flex justify-content-center align-items-center "
      >
        <GrAdd />
      </button>
    </div>
  );
};

export default Add;
