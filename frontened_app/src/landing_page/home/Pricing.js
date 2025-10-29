import React from 'react';
function Pricing() {
    return ( 
        <div className="container mt-5">
            <div className="row ">
                <div className="col-lg-4 col-sm-12 mb-5 mt-5">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" style={{textDecoration:"none"}}>See pricing  <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-lg-2 col-sm-12"></div>
                <div className="col-lg-6 col-sm-12 mb-5 mt-5">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1>₹0</h1>
                            <p className="mb-3">Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className="col p-3 border ">
                            <h1>₹20</h1>
                            <p className="mb-3">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;