import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body";

function App() {
  const [count, setCount] = useState([]);
  const [cartValue, setCartValue] = useState([]);

  return (
    <div className="App">
      <Navbar
        count={count}
        setCount={setCount}
        cartValue={cartValue}
        setCartValue={setCartValue}
      />
      <Body
        count={count}
        setCount={setCount}
        cartValue={cartValue}
        setCartValue={setCartValue}
      />
    </div>
  );
}

export default App;
