import React from 'react';
import image6 from '../images/image 3 (4).png'
function Activity() {
  return (
    <>
      <div className="container">
                <div className="row">
                    <div className="col-8" >
                        <div className="d-flex flex-row profile my-5 p-4    " style={{ background: "rgba(42, 50, 84, 0.60)", borderRadius: "30px 0px", boxShadow: "rgba(42, 50, 84, 0.60)" }}>
                            <img src={image6} className="img-fluid" alt=''></img>
                            <div className="d-flex flex-column text-white ps-5 ms-3 mt-4" style={{ textAlign: "start" }}>
                                <div className=" ">DIAMOND PARTY</div>
                                <p className="lead" style={{ fontSize: "1.3", color: "#FAFF00" }}>Win  ₹7500/-
                                    <br />
                                    <span className='text-white lead' >Thu,27 July</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
}

export default Activity;
