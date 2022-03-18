import React from "react";
import { Link, Outlet } from "react-router-dom";

const Learn = () => {
  return (
    <div>
      <h1>All courses are listed here.</h1>
      <Link to="/learn/courses" className="btn btn-success">
        Courses
      </Link>
      /<Link to="/learn/bundles">Bundle</Link>
      <Outlet />
    </div>
  );
};

export default Learn;
