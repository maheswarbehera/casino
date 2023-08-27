import React from "react";
import image1 from "../images/Rectangle.png";
import image2 from "../images/Ellipse 6.png";
function Profile() {
  return (
    <>
      <div className=" my-5 pb-md-5 px-md-4">
        <div
          className="w-75 mx-auto mb-5"
          style={{ background: "rgba(42, 50, 84, 0.40)", borderRadius: "50px" }}
        >
          <div
            className="d-flex flex-row mt-5"
            style={{
              background: `url(${image1})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "inherit",
            }}
          >
            <img
              src={image2}
              className="img-fluid"
              alt=""
              style={{ zIndex: "3" }}
            />
            <div className="d-flex flex-column ms-sm-auto mt-5">
              <div className="mt-5 pe-lg-4 pt-5">
                <button
                  className="btn btn-primary px-3 mt-5 d-none d-md-block d-xl-block d-lg-block"
                  style={{
                    background: "#2EF700",
                    border: "1px solid #2EF700",
                    color: "black",
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-6 px-lg-5 mx-auto">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white ms-3">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="nameHelp"
                    style={{
                      background: "rgba(42, 50, 84, 0.60)",
                      border: "1px solid rgba(42, 50, 84, 0.60)",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="mobile"
                    className="form-label text-white ms-3"
                  >
                    MOBILE NO.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    style={{
                      background: "rgba(42, 50, 84, 0.60)",
                      border: "1px solid rgba(42, 50, 84, 0.60)",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="currency" className="form-label text-white">
                    CHOOSE CURRENCY
                  </label>
                  <select
                    id="currency"
                    className="form-select"
                    style={{
                      background: "rgba(42, 50, 84, 0.60)",
                      border: "1px solid rgba(42, 50, 84, 0.60)",
                    }}
                  >
                    <option style={{ color: "rgba(255, 255, 255, 0.50))" }}>
                      INR
                    </option>
                    <option style={{ color: "rgba(255, 255, 255, 0.50))" }}>
                      USD
                    </option>
                    <option style={{ color: "rgba(255, 255, 255, 0.50))" }}>
                      POUND
                    </option>
                  </select>
                </div>
              </form>
            </div>
            <div className="col-md-6 mb-5 px-lg-5">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="userName"
                    className="form-label text-white ms-3"
                  >
                    USERNAME
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="usernameHelp"
                    style={{
                      background: "rgba(42, 50, 84, 0.60)",
                      border: "1px solid rgba(42, 50, 84, 0.60)",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="address"
                    className="form-label text-white ms-3"
                  >
                    ADDRESS
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    style={{
                      background: "rgba(42, 50, 84, 0.60)",
                      border: "1px solid rgba(42, 50, 84, 0.60)",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="referral"
                    className="form-label text-white ms-3"
                  >
                    REFERRAL CODE
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="referral"
                    style={{
                      background: "rgba(42, 50, 84, 0.60)",
                      border: "1px solid rgba(42, 50, 84, 0.60)",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  />
                </div>
                <div className="ps-2">
                  <button
                    className="btn btn-primary px-3 mt-5 d-block d-md-none d-xl-none d-lg-none"
                    style={{
                      background: "#2EF700",
                      border: "1px solid #2EF700",
                      color: "black",
                    }}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
