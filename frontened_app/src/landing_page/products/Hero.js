import React from 'react';
function Hero() {
    return ( 
        <div className="container py-5">
            <div className="row p-3 mx-auto mt-3 text-center p-2 py-5 border-bottom mb-5">
                <h1 className="fs-2 " style={{opacity:0.9}}>Zerodha Products</h1>
                <h3 className="fs-5  text-muted mt-2">Sleek, modern, and intuitive trading platforms</h3>
                <p className="fs-6 text-muted mt-2 mb-3">Check out our <a  style={{textDecoration:"none"}}  href=" ">investment offerings <i class="fa-solid fa-arrow-right"></i></a> </p>
            </div>
        </div>
     );
}

export default Hero;