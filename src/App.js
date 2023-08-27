import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "./App.css";

import Topnav from "./component/Topnav";
import Home from "./component/Home";
import Footer from "./component/Footer";
import About from "./page/About";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topnav />
        <Routes>
          <Route path="/about" Component={About} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/" Component={Home} />
          <Route path="*" element={<h1 className="text-center py-5 my-5">404 Not Found</h1>}/>  
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
