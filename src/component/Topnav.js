import React, { useState } from "react";

function Topnav() {

  const [clock, setClock] = useState('')

  function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let time = hour + ":" + min + ":" + sec;

    setClock(time)
  }

  setTimeout(() => {
    currentTime()
  }, 1000);

  return (
    <div className="bg-black text-light">
      <div className="container">
        <nav className="navbar ">
          <div className="container-fluid">
            <p className="text-light">
              (GMT+5.5) {clock}
            </p>
            <div className="d-flex gap-4 ">
              <p>24*7 Support</p>
              <p>Facebook</p>
              <p>Email</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Topnav;
