import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>Order-Summary</p>
      <button onClick={() => navigate("/")}>Go back</button>
    </>
  );
};

export default OrderSummary;
