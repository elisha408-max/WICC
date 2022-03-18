import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image123 from "../img/Logo.png";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
// const imageLink = `https://electronic-ecommerce.herokuapp.com/${image}`;

const Cart = (props) => {
  const { count, setCount, cartValue, setCartValue } = props;
  const [show, setShow] = useState(false);
  const [arrays, setArrays] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var totalCartPrice = 0;
  console.log(cartValue, "1233");

  console.log(cartValue, "cartValue");

  const deleteId = (id) => {
    let filteredItem = cartValue.filter((item) => item.id !== id);
    console.log(filteredItem, "filteredItem");
    setCartValue(filteredItem);
    // console.log(cardValue,'hjbljh')
  };

  return (
    <>
      <button
        type="button"
        class="btn position-relative text-white "
        onClick={handleShow}
      >
        <BsCartPlus className="reactIcon" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartValue.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartValue.map((item, index) => {
            let amt = item.price.split("").slice(1).join("") * 120;
            totalCartPrice = amt *  count * cartValue.length;
            console.log( cartValue.length,'cartValue.length')
            console.log(totalCartPrice,'totalCartPrice')
            console.log(count, "countFromCartPage");

            // console.log(amt, "price");
            return (
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-5">
                      <img
                        src={`https://electronic-ecommerce.herokuapp.com/${item.image}`}
                        alt="ItemsAdded"
                        className="img-fluid"
                        style={{}}
                      />
                    </div>
                    <div className="col-7">
                      <h5>{item.name}</h5>
                      <p className="text-success">Rs.{amt * count[index]}</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <b className="text-success stockStyling">{item.stock}</b>{" "}
                  &nbsp; &nbsp; &nbsp;{" "}
                  <span style={{ fontSize: "20px" }}>
                    <button type="button" class="btn btn-danger">
                      <AiOutlineDelete onClick={() => deleteId(item.id)} />
                    </button>
                  </span>
                  <br />
                  <div
                    className="btn-group buttonStyling"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button type="button" className="btn btn-outline-success">
                      -
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      {count[index]}
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Modal.Body>

        <Modal.Footer>
          <div>
            <p className="fw-bold">Total Amount: Rs.1300</p>
            <Button variant="success">Checkout</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
