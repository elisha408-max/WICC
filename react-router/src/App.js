import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./Components/Home";
import Courses from "./Components/Courses";

import Coursesdetails from "./Components/Coursesdetails";
import Learn from "./Components/Learn";
import Bundle from "./Components/Bundle";
import Dashboard from "./Components/Dashboard";
import PageNotFound from "./Components/PageNotFound";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/Order-Summary";
import NoMatch from "./Components/NoMatch";
import Products from "./Components/Products";
import Features from "./Components/Features";
import New from "./Components/New";
import Users from "./Components/Users";
import UserDetail from "./Components/UserDetail";
import Elisha from "./Components/Elisha";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Configuring Routes */}
        <Route path="/" element={<Home />} />
        <Route path="hello" element={<Navigate to="/about" />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />

        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetail />} />
          <Route path="elisha" element={<Elisha />} />
        </Route>
        <Route path="products" element={<Products />}>
          <Route index element={<Features />} />
          <Route path="featured" element={<Features />} />
          <Route path="new" element={<New />} />
        </Route>

        <Route path="*" element={<NoMatch />} />

        {/* <Route path="myapps" element={<Navigate replace to="/learn" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="learn" element={<Learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":courseid" element={<Coursesdetails />} />
          </Route>
          <Route path="bundles" element={<Bundle />} />
        </Route>
        <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
