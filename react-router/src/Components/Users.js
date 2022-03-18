import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <p>Details of Users</p>
      <button
        className="btn btn-success me-3"
        onClick={() => {
          setSearchParams({ filter: "active" });
        }}
      >
        Active Users
      </button>
      <button className="btn btn-warning" onClick={() => setSearchParams({})}>
        Reset Filter
      </button>
      <Outlet />
    </>
  );
};

export default Users;
