import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

function Header(props) {

  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        document.getElementById('logout').style.display = 'inline'
        document.getElementById('login').style.display = 'none'
      }
    })
  })

  const handleOnLogout = async () => {
    await auth.signOut()
    document.getElementById('logout').style.display = 'none'
    document.getElementById('login').style.display = 'inline'
    navigate('/')
  }

  return (
    <div>
      <div className="header-bg py-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <p className=" ">
              <a className="logo" href="/">
                TomKru
              </a>
            </p>
            <Link to='/login' id="login" className="login text-decoration-none">{props.title}</Link>
            <button className='btn text-white h1 me-5 pe-4' id='logout' onClick={handleOnLogout} style={{ display: "none" }}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <path d="M23.3333 24.7917V20.4167H13.125V14.5833H23.3333V10.2083L30.625 17.5L23.3333 24.7917ZM20.4167 2.91666C21.1902 2.91666 21.9321 3.22395 22.4791 3.77093C23.026 4.31791 23.3333 5.05977 23.3333 5.83332V8.74999H20.4167V5.83332H7.29167V29.1667H20.4167V26.25H23.3333V29.1667C23.3333 29.9402 23.026 30.6821 22.4791 31.229C21.9321 31.776 21.1902 32.0833 20.4167 32.0833H7.29167C6.51812 32.0833 5.77625 31.776 5.22927 31.229C4.68229 30.6821 4.375 29.9402 4.375 29.1667V5.83332C4.375 5.05977 4.68229 4.31791 5.22927 3.77093C5.77625 3.22395 6.51812 2.91666 7.29167 2.91666H20.4167Z" fill="white"/>
</svg></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
