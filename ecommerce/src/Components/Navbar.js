import React from "react";
// import { BsCartPlus } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import logo12 from "../img/Logo.png";
import Cart from "./Cart";

const Navbar = (props) => {
  const { count, setCount, cartValue, setCartValue } = props;
  // console.log(value, "Value");
  return (
    <div className="Navbar text-white sticky-top">
      <nav
        className="navbar navbar-expand-lg bg-primary "
        style={{ opacity: "0.9" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo12} width="100" className="img-fluid" />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <p>Home</p>
              <Cart
                count={count}
                setCount={setCount}
                cartValue={cartValue}
                setCartValue={setCartValue}
              />

              <CgProfile className="reactIcon" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
