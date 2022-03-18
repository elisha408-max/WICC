import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Coursesdetails = () => {
  const { courseid } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div>Coursesdetails is: {courseid}</div>;
      <button
        onClick={() => {
          navigate("/dashboard", { state: courseid });
        }}
      >
        Submit
      </button>
      ;
    </>
  );
};

export default Coursesdetails;
