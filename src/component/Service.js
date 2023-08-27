import React from 'react';

import image2 from '../images/image 2 (4).png'
import image3 from '../images/image 4 (5).png'
import image4 from '../images/image 6 (2).png'
import image5 from '../images/image 8 (1).png'
function Service() {
  return (
    <>
      <div className="contanier">
                <div className="row">
                    <div className="col-10">
                        <form action="">
                            <input className="form-control form-control-lg px-5" type="search " placeholder="Search Anything" aria-label="Search" style={{marginLeft:'10px'}}/><svg className='search' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M9.85417 0.375C12.3682 0.375 14.7793 1.37369 16.5569 3.15138C18.3346 4.92907 19.3333 7.34014 19.3333 9.85417C19.3333 12.2021 18.4729 14.3604 17.0583 16.0229L17.4521 16.4167H18.6042L25.8958 23.7083L23.7083 25.8958L16.4167 18.6042V17.4521L16.0229 17.0583C14.3604 18.4729 12.2021 19.3333 9.85417 19.3333C7.34014 19.3333 4.92907 18.3346 3.15138 16.5569C1.37369 14.7793 0.375 12.3682 0.375 9.85417C0.375 7.34014 1.37369 4.92907 3.15138 3.15138C4.92907 1.37369 7.34014 0.375 9.85417 0.375ZM9.85417 3.29167C6.20833 3.29167 3.29167 6.20833 3.29167 9.85417C3.29167 13.5 6.20833 16.4167 9.85417 16.4167C13.5 16.4167 16.4167 13.5 16.4167 9.85417C16.4167 6.20833 13.5 3.29167 9.85417 3.29167Z" fill="white" fill-opacity="0.6"/>
</svg> 
                        </form>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col">
                                <img src={image5} className='img-fluid mt-3 mx-2' alt="" />
                            </div>
                            <div className="col">
                                <img src={image2} className='img-fluid mt-3 mx-2' alt="" />
                            </div>
                            <div className="col">
                                <img src={image3} className='img-fluid mt-3 mx-2' alt="" />
                            </div>
                            <div className="col">
                                <img src={image4} className='img-fluid mt-3 mx-2' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-10 mt-4">
                        <div style={{ textAlign: "end", fontFamily: "Azonix" }}>
                            <button className="btn btn-primary">CREATE</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
}

export default Service;
