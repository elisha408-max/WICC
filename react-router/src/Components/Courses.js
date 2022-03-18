import React from "react";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <h4>Hello Courses</h4>
      <p>React</p>
      <p>Node JS</p>
      <p>Web Development</p>
      <p>Python</p>
      <Outlet />
      <Link to="/">Go to Home Page</Link>
    </>
  );
};

export default Courses;
