import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return <div>Information goes here --- {location.state} </div>;
};

export default Dashboard;
