import React, { useState } from "react";
import { CgHello } from "react-icons/cg";

import Card from "../Components/Cart";

function Productlist(props) {
  // console.log(props, "props");
  const {
    name,
    price,
    stock,
    id,
    image,
    click,
    date,
    setArray1,
    array1,
    Hello,
  } = props;
  const [array, setArray] = useState([]);
  const imageLink = `https://electronic-ecommerce.herokuapp.com/${image}`;
  const [count, setCount] = useState(0);
  const [disable, setDisable] = React.useState(false);
  let dateObj = new Date(date);
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  let day = dateObj.getDate();
  const result = ` ${day}/${month}/${year}`;
  let amt = price.split("").slice(1).join("") * 120;

  // console.log(amt, "price");
  // let amount = parseInt(price);

  // console.log(amount, "amt");
  const incrementCount = (id) => {
    count >= stock ? setDisable(true) : setCount(count + 1);
  };
  const decrementCount = () => {
    const decrement = count > 0 ? setCount(count - 1) : 0;
    // if (count<=0) {
    //   count(0)
    // }
  };

  return (
    <>
      <div className="col-3">
        <div className="card p-1 mt-2">
          <img
            src={`https://electronic-ecommerce.herokuapp.com/${image}`}
            className="card-img-top img-fluid"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <div
              className="btn-group buttonStyling"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={decrementCount}
              >
                -
              </button>
              <button type="button" className="btn btn-outline-primary">
                {count}
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={incrementCount}
              >
                +
              </button>
            </div>
            <h5 className="card-title text-start mt-3">{name}</h5>
            <div className="d-flex justify-content-between text-success">
              <p>{`Rs. ${amt}`}</p>
              <p>Stocks Left: {stock}</p>
            </div>
            <p className="card-text text-start fw-bold">
              Released on: {result}
            </p>
            <div className="row">
              <a
                href="#"
                className="btn btn-primary"
                data-index={id}
                onClick={() => {
                  Hello(props);
                  // alert(array);
                  click(count);
                }}
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productlist;
