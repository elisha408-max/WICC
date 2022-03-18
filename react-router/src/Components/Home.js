import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>This is Home Page</div>
      <button
        onClick={() => {
          navigate("order-summary");
        }}
      >
        Place Order
      </button>
    </>
  );
};

export default Home;