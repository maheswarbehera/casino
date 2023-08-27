import React from "react";
import image from '../images/image 1 (2).png'
import image2 from '../images/image 2 (4).png'
import image3 from '../images/image 4 (5).png'
import image4 from '../images/image 6 (2).png'
import image5 from '../images/image 8 (1).png'
import image6 from '../images/image 3 (4).png'
import image7 from '../images/image 5 (3).png'
import image8 from '../images/image 7 (2).png'
import image9 from '../images/image 9 (6).png'
import Slider from "./Slider";
function Content() {
  return (
    <>
    <Slider/>
      <div className="content-bg">
        <div className="container">
            <div className="py-5">
                <div className="bar d-flex justify-content-between">
                        <h6>Slot</h6>
                    <div className="slot d-flex gap-3">
                        {/* <ul className="list-unstyled"> */}
                        <li>JILI</li>
                        <li>NetEnt</li>
                        <li>PG</li>
                        <li>CQ9</li>
                        {/* </ul> */}
                    </div>
                </div>

                <div className="row py-4">
                    <div className="col-lg-2 col-md-2 d-lg-block d-none">
                        <img className="img-fluid" src={image} alt="" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                                <img className="img-fluid mb-2" src={image2} alt="" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                                <img className="img-fluid" src={image3} alt="" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                                <img className="img-fluid" src={image4} alt="" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                                <img className="img-fluid" src={image5} alt="" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                                <img className="img-fluid" src={image6} alt="" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                                <img className="img-fluid" src={image7} alt="" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                                <img className="img-fluid" src={image8} alt="" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                                <img className="img-fluid" src={image9} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-12  pt-3 pt-sm-0 pt-md-0 pt-lg-0" style={{ height: "282px", overflowY: "auto" }}>
                        <div className="slot-card mb-3">
                            <p>Player ****325</p>
                            <p className="py-2">Win <span style={{color:'#FAFF00'}}>₹45142</span></p>
                            <button className="btn custom-btn">Play it</button>
                        </div>
                        <div className="slot-card mb-3">
                            <p>Player ****325</p>
                            <p className="py-2">Win <span style={{color:'#FAFF00'}}>₹45142</span></p>
                            <button className="btn custom-btn">Play it</button>
                        </div>                        
                        <div className="slot-card mb-3">
                            <p>Player ****325</p>
                            <p className="py-2">Win <span style={{color:'#FAFF00'}}>₹45142</span></p>
                            <button className="btn custom-btn">Play it</button>
                        </div>
                        <div className="slot-card mb-3">
                            <p>Player ****325</p>
                            <p className="py-2">Win <span style={{color:'#FAFF00'}}>₹45142</span></p>
                            <button className="btn custom-btn">Play it</button>
                        </div>                        
                        <div className="slot-card mb-3">
                            <p>Player ****325</p>
                            <p className="py-2">Win <span style={{color:'#FAFF00'}}>₹45142</span></p>
                            <button className="btn custom-btn">Play it</button>
                        </div>
                        <div className="slot-card mb-3">
                            <p>Player ****325</p>
                            <p className="py-2">Win <span style={{color:'#FAFF00'}}>₹45142</span></p>
                            <button className="btn custom-btn">Play it</button>
                        </div>                        
                    </div>
                </div>

                <div className="box p-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="d-flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
  <path d="M27.9583 0.127083V5.26125C37.9979 6.50667 45.75 15.0467 45.75 25.4167C45.75 33.5754 40.87 40.6667 33.7533 43.92L27.9583 38.125V50.8333H40.6667L37.5658 47.7325C45.5212 43.3862 50.8333 34.9733 50.8333 25.4167C50.8333 12.2508 40.7937 1.39792 27.9583 0.127083ZM22.875 0C17.9187 0.508333 13.2167 2.44 9.35333 5.61708L12.9625 9.22625C15.8346 6.98958 19.2658 5.59167 22.875 5.08333V0ZM5.59167 9.35333C2.44 13.2167 0.508333 17.9187 0 22.875H5.08333C5.56625 19.2658 6.98958 15.8346 9.22625 12.9625L5.59167 9.35333ZM10.1667 15.25V20.3333H17.7917V22.875H15.25C12.4542 22.875 10.1667 25.1625 10.1667 27.9583V35.5833H22.875V30.5H15.25V27.9583H17.7917C20.6129 27.9583 22.875 25.6962 22.875 22.875V20.3333C22.875 17.5375 20.6129 15.25 17.7917 15.25H10.1667ZM25.4167 15.25V27.9583H33.0417V35.5833H38.125V27.9583H40.6667V22.875H38.125V15.25H33.0417V22.875H30.5V15.25H25.4167ZM0 27.9583C0.508333 32.9146 2.46542 37.6167 5.6425 41.48L9.25167 37.8708C7.015 34.9987 5.59167 31.5675 5.08333 27.9583H0ZM12.9879 41.6071L9.35333 45.2163C13.2167 48.3679 17.9187 50.325 22.875 50.8333V45.75C19.2658 45.2671 15.86 43.8438 12.9879 41.6071Z" fill="white"/>
</svg>
                                <div className="">
                                    <p className="box-head">Customer support 24/7</p>
                                    <span className='box-span'>have a question ? Speak to our agent
 online</span>
                                    <p className='box-p'>Contact Us</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="d-flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 43 43" fill="none">
  <path d="M32.25 3.58331C33.2003 3.58331 34.1118 3.96084 34.7838 4.63285C35.4558 5.30485 35.8333 6.21629 35.8333 7.16665V35.8333C35.8333 36.7837 35.4558 37.6951 34.7838 38.3671C34.1118 39.0391 33.2003 39.4166 32.25 39.4166H10.75C9.79963 39.4166 8.8882 39.0391 8.21619 38.3671C7.54419 37.6951 7.16666 36.7837 7.16666 35.8333V7.16665C7.16666 6.21629 7.54419 5.30485 8.21619 4.63285C8.8882 3.96084 9.79963 3.58331 10.75 3.58331H32.25ZM32.25 7.16665H23.2917V21.5L18.8125 17.4687L14.3333 21.5V7.16665H10.75V35.8333H32.25V7.16665Z" fill="white"/>
</svg>
                                <div className="">
                                    <p className="box-head">New Member Guide</p>
                                    <span className='box-span'>Check out FAQ and guides</span>
                                    <p className='box-p'>Check now
</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="d-flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
  <path d="M27.9583 0.127083V5.26125C37.9979 6.50667 45.75 15.0467 45.75 25.4167C45.75 33.5754 40.87 40.6667 33.7533 43.92L27.9583 38.125V50.8333H40.6667L37.5658 47.7325C45.5212 43.3862 50.8333 34.9733 50.8333 25.4167C50.8333 12.2508 40.7937 1.39792 27.9583 0.127083ZM22.875 0C17.9187 0.508333 13.2167 2.44 9.35333 5.61708L12.9625 9.22625C15.8346 6.98958 19.2658 5.59167 22.875 5.08333V0ZM5.59167 9.35333C2.44 13.2167 0.508333 17.9187 0 22.875H5.08333C5.56625 19.2658 6.98958 15.8346 9.22625 12.9625L5.59167 9.35333ZM10.1667 15.25V20.3333H17.7917V22.875H15.25C12.4542 22.875 10.1667 25.1625 10.1667 27.9583V35.5833H22.875V30.5H15.25V27.9583H17.7917C20.6129 27.9583 22.875 25.6962 22.875 22.875V20.3333C22.875 17.5375 20.6129 15.25 17.7917 15.25H10.1667ZM25.4167 15.25V27.9583H33.0417V35.5833H38.125V27.9583H40.6667V22.875H38.125V15.25H33.0417V22.875H30.5V15.25H25.4167ZM0 27.9583C0.508333 32.9146 2.46542 37.6167 5.6425 41.48L9.25167 37.8708C7.015 34.9987 5.59167 31.5675 5.08333 27.9583H0ZM12.9879 41.6071L9.35333 45.2163C13.2167 48.3679 17.9187 50.325 22.875 50.8333V45.75C19.2658 45.2671 15.86 43.8438 12.9879 41.6071Z" fill="white"/>
</svg>
                                <div className="">
                                    <p className="box-head">Customer support 24/7</p>
                                    <span className='box-span'>have a question ? Speak to our agent
 online</span>
                                    <p className='box-p'>Contact Us</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="d-flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
  <path d="M27.9583 0.127083V5.26125C37.9979 6.50667 45.75 15.0467 45.75 25.4167C45.75 33.5754 40.87 40.6667 33.7533 43.92L27.9583 38.125V50.8333H40.6667L37.5658 47.7325C45.5212 43.3862 50.8333 34.9733 50.8333 25.4167C50.8333 12.2508 40.7937 1.39792 27.9583 0.127083ZM22.875 0C17.9187 0.508333 13.2167 2.44 9.35333 5.61708L12.9625 9.22625C15.8346 6.98958 19.2658 5.59167 22.875 5.08333V0ZM5.59167 9.35333C2.44 13.2167 0.508333 17.9187 0 22.875H5.08333C5.56625 19.2658 6.98958 15.8346 9.22625 12.9625L5.59167 9.35333ZM10.1667 15.25V20.3333H17.7917V22.875H15.25C12.4542 22.875 10.1667 25.1625 10.1667 27.9583V35.5833H22.875V30.5H15.25V27.9583H17.7917C20.6129 27.9583 22.875 25.6962 22.875 22.875V20.3333C22.875 17.5375 20.6129 15.25 17.7917 15.25H10.1667ZM25.4167 15.25V27.9583H33.0417V35.5833H38.125V27.9583H40.6667V22.875H38.125V15.25H33.0417V22.875H30.5V15.25H25.4167ZM0 27.9583C0.508333 32.9146 2.46542 37.6167 5.6425 41.48L9.25167 37.8708C7.015 34.9987 5.59167 31.5675 5.08333 27.9583H0ZM12.9879 41.6071L9.35333 45.2163C13.2167 48.3679 17.9187 50.325 22.875 50.8333V45.75C19.2658 45.2671 15.86 43.8438 12.9879 41.6071Z" fill="white"/>
</svg>
                                <div className="">
                                    <p className="box-head">Affiliates Program</p>
                                    <span className='box-span'>You send us Business, we send 
you Money</span>
                                    <p className='box-p'>Find Out More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom border-warning w-50 mx-auto my-4"></div>
                    <div className="">
                        <p className="box-content pb-2">TomKru World: Cricket Exchange & Casino Sites in India 2022</p>

                        <p>The challenge of choosing the best betting site in India is made more difficult for novices. There are many sites that offer you bonus money if you register,
 but this does not make them better than other casinos because it's only one factor among many others to consider when looking at which gambling 
website will suit your needs most effectively.</p>
                        <p>The challenge of choosing the best betting site in India is made more difficult for novices. There are many sites that offer you bonus money if you register,
 but this does not make them better than other casinos because it's only one factor among many others to consider when looking at which gambling 
website will suit your needs most effectively.</p>
                        <p>The challenge of choosing the best betting site in India is made more difficult for novices. There are many sites that offer you bonus money if you register,
 but this does not make them better than other casinos because it's only one factor among many others to consider when looking at which gambling 
website will suit your needs most effectively.</p>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Content;
