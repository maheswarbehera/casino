import React, { useEffect, useState } from 'react';
import userlogo from '../images/Ellipse 5.png'
import Graph from '../component/Graph';
import Service from '../component/Service';
import Activity from '../component/Activity';
import Header from '../component/Header';
import Profile from '../component/Profile';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
function Dashboard() {

  const[user,setUser]= useState('')
  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
      }
    })
  },[])


  // const handleOnLogout = async () => {
  //   await auth.signOut()
  //   navigate('/')
  // }


  return (
    <div>
        <Header  title={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <path d="M23.3333 24.7917V20.4167H13.125V14.5833H23.3333V10.2083L30.625 17.5L23.3333 24.7917ZM20.4167 2.91666C21.1902 2.91666 21.9321 3.22395 22.4791 3.77093C23.026 4.31791 23.3333 5.05977 23.3333 5.83332V8.74999H20.4167V5.83332H7.29167V29.1667H20.4167V26.25H23.3333V29.1667C23.3333 29.9402 23.026 30.6821 22.4791 31.229C21.9321 31.776 21.1902 32.0833 20.4167 32.0833H7.29167C6.51812 32.0833 5.77625 31.776 5.22927 31.229C4.68229 30.6821 4.375 29.9402 4.375 29.1667V5.83332C4.375 5.05977 4.68229 4.31791 5.22927 3.77093C5.77625 3.22395 6.51812 2.91666 7.29167 2.91666H20.4167Z" fill="white"/>
</svg>}/>
      <div className="container-fluid" style={{ padding: "", margin: "" }}>
        <div className="row" style={{ fontFamily: "Azonix" }}>
          <div className="col-xl-3 col-md-4" style={{ background: "rgba(42, 50, 84, 1)", overflow: "hidden" }}>
            <div style={{ textAlign: "center" }}>
              <img src={userlogo} className='img-fluid' alt="" />
              <p className='h3 text-white'>User, <span style={{ color: "#FAFF00" }}> {user && user.displayName}</span></p>
            </div>
            <div className="nav flex-column nav-pills mt-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className="btn btn-lg text-white rounded-pill mt-2 ms-xl-5 w-100 d-flex align-items-center justify-content-evenly" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M17.3333 4.30885V12.3148H28V4.30885M17.3333 28.3268H28V14.9835H17.3333M4 28.3268H14.6667V20.3208H4M4 17.6522H14.6667V4.30885H4V17.6522Z" fill="white"/>
</svg> Dashboard</button>
              <button className="btn btn-lg text-white rounded-pill mt-2 ms-xl-5 w-100 d-flex align-items-center justify-content-evenly" id="v-pills-servicies-tab" data-bs-toggle="pill" data-bs-target="#v-pills-servicies" type="button" role="tab" aria-controls="v-pills-servicies" aria-selected="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M15 10.2444C16.3085 10.2444 17.5633 10.7505 18.4885 11.6513C19.4138 12.5522 19.9335 13.774 19.9335 15.048C19.9335 16.322 19.4138 17.5438 18.4885 18.4446C17.5633 19.3455 16.3085 19.8516 15 19.8516C13.6915 19.8516 12.4367 19.3455 11.5115 18.4446C10.5862 17.5438 10.0665 16.322 10.0665 15.048C10.0665 13.774 10.5862 12.5522 11.5115 11.6513C12.4367 10.7505 13.6915 10.2444 15 10.2444ZM15 12.6462C14.3458 12.6462 13.7183 12.8992 13.2557 13.3497C12.7931 13.8001 12.5332 14.411 12.5332 15.048C12.5332 15.685 12.7931 16.2959 13.2557 16.7463C13.7183 17.1967 14.3458 17.4498 15 17.4498C15.6542 17.4498 16.2817 17.1967 16.7443 16.7463C17.2069 16.2959 17.4668 15.685 17.4668 15.048C17.4668 14.411 17.2069 13.8001 16.7443 13.3497C16.2817 12.8992 15.6542 12.6462 15 12.6462ZM12.5332 27.057C12.2249 27.057 11.9659 26.8408 11.9165 26.5526L11.4602 23.3702C10.6832 23.07 10.0171 22.6617 9.37577 22.1813L6.30464 23.3942C6.0333 23.4903 5.70029 23.3942 5.55228 23.13L3.08551 18.9749C2.92517 18.7107 2.99918 18.3865 3.23352 18.2063L5.83596 16.2129L5.74962 15.048L5.83596 13.8471L3.23352 11.8896C2.99918 11.7095 2.92517 11.3852 3.08551 11.121L5.55228 6.96593C5.70029 6.70173 6.0333 6.59365 6.30464 6.70173L9.37577 7.90263C10.0171 7.43428 10.6832 7.02597 11.4602 6.72575L11.9165 3.54336C11.9659 3.25515 12.2249 3.03899 12.5332 3.03899H17.4668C17.7751 3.03899 18.0341 3.25515 18.0835 3.54336L18.5398 6.72575C19.3168 7.02597 19.9829 7.43428 20.6242 7.90263L23.6954 6.70173C23.9667 6.59365 24.2997 6.70173 24.4477 6.96593L26.9145 11.121C27.0748 11.3852 27.0008 11.7095 26.7665 11.8896L24.164 13.8471L24.2504 15.048L24.164 16.2489L26.7665 18.2063C27.0008 18.3865 27.0748 18.7107 26.9145 18.9749L24.4477 23.13C24.2997 23.3942 23.9667 23.5023 23.6954 23.3942L20.6242 22.1933C19.9829 22.6617 19.3168 23.07 18.5398 23.3702L18.0835 26.5526C18.0341 26.8408 17.7751 27.057 17.4668 27.057H12.5332ZM14.075 5.44079L13.6186 8.57513C12.1385 8.87536 10.8312 9.64393 9.88146 10.7127L6.909 9.4638L5.98396 11.025L8.5864 12.8864C8.09305 14.2914 8.09305 15.8166 8.5864 17.2096L5.97163 19.083L6.89667 20.6442L9.89379 19.3952C10.8435 20.452 12.1385 21.2206 13.6063 21.5088L14.0626 24.6552H15.9374L16.3937 21.5208C17.8615 21.2206 19.1565 20.452 20.1062 19.3952L23.1033 20.6442L24.0284 19.083L21.4136 17.2216C21.9069 15.8166 21.9069 14.2914 21.4136 12.8864L24.016 11.025L23.091 9.4638L20.1185 10.7127C19.1688 9.64393 17.8615 8.87536 16.3814 8.58714L15.925 5.44079H14.075Z" fill="white"/>
</svg> Services</button>
              <button className="btn btn-lg text-white rounded-pill mt-2 ms-xl-5 w-100 d-flex align-items-center justify-content-evenly" id="v-pills-activities-tab" data-bs-toggle="pill" data-bs-target="#v-pills-activities" type="button" role="tab" aria-controls="v-pills-activities" aria-selected="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M22.667 24.018L16.0003 21.1091L9.33366 24.018V6.67166H22.667M22.667 4.00299H9.33366C8.62641 4.00299 7.94814 4.28415 7.44804 4.78462C6.94794 5.2851 6.66699 5.96388 6.66699 6.67166V28.021L16.0003 24.018L25.3337 28.021V6.67166C25.3337 5.19055 24.1337 4.00299 22.667 4.00299Z" fill="white"/>
</svg>Activities</button>
              <button className="btn btn-lg text-white rounded-pill mt-2 ms-xl-5 w-100 d-flex align-items-center justify-content-evenly" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M15.9997 5.83435C17.4142 5.83435 18.7707 6.39667 19.7709 7.39762C20.7711 8.39856 21.333 9.75613 21.333 11.1717C21.333 12.5872 20.7711 13.9448 19.7709 14.9457C18.7707 15.9467 17.4142 16.509 15.9997 16.509C14.5852 16.509 13.2286 15.9467 12.2284 14.9457C11.2282 13.9448 10.6663 12.5872 10.6663 11.1717C10.6663 9.75613 11.2282 8.39856 12.2284 7.39762C13.2286 6.39667 14.5852 5.83435 15.9997 5.83435ZM15.9997 19.1777C21.893 19.1777 26.6663 21.5661 26.6663 24.515V27.1837H5.33301V24.515C5.33301 21.5661 10.1063 19.1777 15.9997 19.1777Z" fill="white"/>
</svg> Profile</button>
            </div>
          </div>
          <div className="col-xl-9 col-md-8" style={{ background: "var(--secondary, #111421)", minHeight: "100vh" }}>
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fad mt-5 pt-5" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                <Graph/>
              </div>
              <div className="tab-pane fade mt-5 px-5 pt-5" id="v-pills-servicies" role="tabpanel" aria-labelledby="v-pills-servicies-tab">
                <Service/>
              </div>
              <div className="tab-pane fade ms-5" id="v-pills-activities" role="tabpanel" aria-labelledby="v-pills-activities-tab">
                <Activity />
              </div>
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
