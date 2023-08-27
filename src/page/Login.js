import React,  { useState } from "react";
import login from "../images/image 10 (4).png";
import Welcome from "../component/Welcome";
import Header from "../component/Header";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
function Login() {

  const navigate = useNavigate();
    const [value, setValue] = useState({
        email: '',
        pass: '',
    })
    const handleOnChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }
    const Submit = async() => {
        try {
            await signInWithEmailAndPassword(auth, value.email, value.pass)
            navigate('/dashboard');
        } catch (error) {
            console.log('error -'+ error)
        }
    } 
  return (
    <>
     <Header title=""/>
    <Welcome title="WORLD!!"/>
    <div className="login-bg">
      <div className="container py-5">
        <p className="text-end"> If you encounter issues, please contact <span style={{color:'#F00'}}>Online CS</span></p>
        <div className="row p-4 border-warning border-4 border">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg">
            <div className="sign-in">
              <h4 className="text-center pt-5 border-4 border-bottom border-warning pb-3 w-75 mx-auto">SIGN IN</h4>
              <div className="mb-3 w-75 mx-auto pt-4">
                <label className="form-label" htmlFor="email">Username *</label>
                <input 
                  type="text"
                  name="email"
                  className="form-control"
                  value={value.email}
                  placeholder="Enter Username / Email"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3 w-75 mx-auto">
                <label className="form-label" htmlFor="pass">Password *</label>
                <input
                  type="password"
                  name="pass"
                  value={value.pass}
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={handleOnChange}
                />
              </div>
              <div className="text-center">
                <button onClick={Submit} className="btn custom-btn login-btn mt-2 w-25" style={{borderRadius:0}}>Login</button>
              </div>
              <p className=" forget">Forget Password ? </p>
              <p className="text-center">Don't have account,<Link to='/signup' className="text-decoration-none"> Signup Now</Link></p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 pt-sm-0 pt-3 pt-lg-0 pt-md-0">
            <img className="img-fluid" src={login} alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
