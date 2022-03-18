import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Products = () => {
  const [search, setSearch] = useSearchParams();
  const showHello = search.get("hello") === "world";
  return (
    <>
      <nav>
        <NavLink to="featured" className="mx-3">
          Features
        </NavLink>
        <NavLink to="new" className="me-3">
          New
        </NavLink>
        <button
          onClick={() => {
            setSearch({ hello: "world" });
          }}
        >
          Hello
        </button>
        {showHello ? <h2>Show active users</h2> : <h2>Show all users</h2>}
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
