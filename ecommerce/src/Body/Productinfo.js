import React from "react";
import Productlist from "./Productlist";
import { AiTwotoneFilter } from "react-icons/ai";
// import { AiTwotoneCalendar } from "react-icons/ai";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { array } from "yup";

const validationSchema = () =>
  Yup.object().shape({
    Price: Yup.string().required(),
    date: Yup.string().required(),
    category: Yup.string().required(),
  });

const Productinfo = (props) => {
 
  const {  count, setCount, cartValue, setCartValue  } = props;
 
  const [show, setShow] = useState(false);
  const [todo, setTodo] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const { cartValue, setCartValue } = props;

  const click = (items) => {
    setCount([items, ...count]);
    if (count === 0) {
      alert("jbjkn;");
    }
  };
  
  const Hello = (array) => {
    console.log(array);
    // if (cartValue === 0){
    //   alert('ghvh')
    // }else if(cartValue >0){
    //   setCardData([...cardData, array]);
    // }
    setCartValue ([...cartValue, array]);
  };
  
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      Price: "",
      date: "",
      category: "",
    },
    onSubmit: (values, { resetForm }) => {
      setTodo([...todo, values]);
      resetForm({ values: "" });
      console.log(todo, "todo");
    },

    validationSchema,
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://electronic-ecommerce.herokuapp.com/api/v1/product"
      );
      setTodo(response.data.data.product);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="productInfo p-4 container ">
        <div className="d-flex justify-content-between mb-3">
          <h4>Products</h4>

          <Button variant="primary" onClick={handleShow}>
            <AiTwotoneFilter /> Filter
          </Button>

          <Offcanvas show={show} onHide={handleClose} className="me-3 ">
            <Offcanvas.Header closeButton className="bg-primary text-white">
              <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="Form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="Price">Price</label> <br />
                    <div className="row">
                      <div className="col-6">
                        <input
                          type="number"
                          className="form-control"
                          id="Price"
                          aria-describedby="Price"
                          placeholder="Min"
                          onChange={handleChange}
                          value={values.Price}
                        />
                        {errors?.Price && (
                          <small className="text-danger">{errors.name}</small>
                        )}
                      </div>

                      <div className="col-6">
                        <input
                          type="number"
                          className="form-control"
                          id="Price1"
                          aria-describedby="Price"
                          placeholder="Max"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <br />

                  <div className="mb-3">
                    <label htmlFor="exampleInputDate1" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputDate1"
                      aria-describedby="Date"
                      placeholder="dd/mm/yyy"
                      onChange={handleChange}
                      value={values.date}
                    />
                  </div>

                  <br />

                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <select id="category" className="form-select">
                      <option>Select Options</option>
                    </select>
                  </div>

                  <section className="footer">
                    <hr />
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-3"
                      >
                        Cancel
                      </button>
                      <button type="button" className="btn btn-success">
                        Apply
                      </button>
                    </div>
                  </section>
                </form>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className="row mt-4">
          {todo.map((item) => (
            <Productlist
              key={item.id}
              name={item.name}
              price={item.price}
              id={item.id}
              stock={item.stock}
              image={item.image}
              date={item.createDate}
              click={click}
              Hello={Hello}
              // array1={array1}
              // setArray1={setArray1}
              // alert={parentAlert}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Productinfo;
