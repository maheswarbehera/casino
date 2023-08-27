import React, { useState } from 'react';
import Welcome from '../component/Welcome';
import signup from '../images/image_63630 1.png'
import Header from '../component/Header';

import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

function Signup() {

    const navigate = useNavigate()
    const [value, setValue] = useState({
        email:"",
        pass:"",
        currency:"",
        referal:''
    })

    const handleOnChange =(e)=>{
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = async(e) =>{
        try {
            await createUserWithEmailAndPassword(auth, value.email, value.pass)
            await updateProfile(auth.currentUser,{
                displayName: value.name
            })

            await signOut(auth)                  
                navigate('/login')
        } catch (error) {
            console.log('error -' + error)
        }
    }

return (
<>
<Header title=""/>
    <Welcome title="WORLD!!" />
    <div className="login-bg">
        <div className="container py-5">
            <p className="text-end"> If you encounter issues, please contact <span style={{color:'#F00'}}>Online
                    CS</span></p>
            <div className="row p-4 border-warning border-4 border">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg">
                    <div className="sign-in">
                        <h4 className="text-center pt-5 border-4 border-bottom border-warning pb-3 w-75 mx-auto">SIGN UP
                        </h4>
                        <div className="mb-3 w-75 mx-auto pt-4">
                            <label className="form-label" htmlFor="email">Username *</label>
                            <input type="text" value={value.email} onChange={handleOnChange} name="email" className="form-control" placeholder="Enter Username / Email" />
                        </div>
                        <div className="mb-3 w-75 mx-auto">
                            <label className="form-label" htmlFor="pass">Password *</label>
                            <input type="password" value={value.pass} onChange={handleOnChange} name="pass" className="form-control" placeholder="Enter Password" />
                        </div>
                        <div className="mb-3 w-75 mx-auto">
                            <label className="form-label" htmlFor="cpass">Confirm Password *</label>
                            <input type="password" value={value.cpass} onChange={handleOnChange} name="cpass" className="form-control" placeholder="Enter Confirm Password" />
                        </div>
                        <div className="mb-3 w-75 mx-auto">
                            <label className="form-label" htmlFor="cpass">Choose Currency *</label>
                            <select className='w-100 select-bg' value={value.currency} onChange={handleOnChange} name="currency" id="">
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                        <div className="mb-3 w-75 mx-auto">
                            <label className="form-label" htmlFor="pass">Referal Code</label>
                            <input type="password" value={value.referal} onChange={handleOnChange} name="referal" className="form-control" placeholder="Referal Code (Optional)" />
                        </div>
                        <div className="text-center pb-3">
                            <button onClick={handleOnSubmit} className="btn custom-btn login-btn mt-2 w-25"
                                style={{borderRadius:0}}>REGISTER</button>
                        </div>
                        <p className="text-center pb-5">Already have account,<Link to='/login' className="text-decoration-none"> Please Login</Link></p>

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 pt-sm-0 pt-3 pt-lg-0 pt-md-0">
                    <img className="img-fluid" src={signup} alt="" />
                </div>
            </div>
        </div>
    </div>
</>
);
}

export default Signup;