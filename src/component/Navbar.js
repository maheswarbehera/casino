import React from "react";

function Navbar() {
return (
<>
    <div className="nav-bg">
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="white" />
                </svg>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 59 59" fill="none">
                            <path  d="M51.625 19.6667H7.375V14.75H51.625M22.125 31.9583H51.625V27.0417H22.125M22.125 44.25H51.625V39.3333H22.125" fill="#F0F3FF" />
                        </svg>
                    </span>
                </button>
                <ul className="list-unstyled collapse navbar-collapse justify-content-evenly mt-3" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav mx-auto fs-5"> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Casino
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Slot
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Table
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Lottery
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Arcade
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Promotions
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                VIP
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                |
                            </a>
                        </li>
                        {/*
                    </ul> */}

                </ul>
            </div>
        </nav>
    </div>
</>
);
}

export default Navbar;