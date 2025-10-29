import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Navbar() {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const navigate = useNavigate();
    const handleLogout = () => {
        removeCookie("token");
        navigate("/login"); 
    };
    const isLoggedIn = !!cookies.token; 
     const handleOpenDashboard = () => {
        window.open("http://localhost:3000", "_blank");
    };
    return ( 
        <nav className="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:"#FFF"}}>
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" style={{width:"25%"}} alt="zerodha" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                {isLoggedIn ? (
                                    <button className="nav-link active" onClick={handleLogout} type="button">Logout</button>
                                )
                                 
                                : (
                                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                )}
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">Support</Link>
                            </li>
                            {isLoggedIn ? (
                            <li className="nav-item">
                                    <button 
                                    className="nav-link active btn btn-link" 
                                    type="button" 
                                    onClick={handleOpenDashboard}
                                    style={{ textDecoration: "none" }}
                                    >
                                    Get Start
                                    </button>
                            </li>
                            ) : null}
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
