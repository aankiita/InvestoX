import React from 'react';
function Hero() {
    return ( 
        <div className="container">
            <div className="row p-3 mx-auto mt-5 ">
                <h1 className="fs-3 text-center" style={{opacity:0.9}}>
                    We pioneered the discount broking model in India.<br></br>
                    Now, we are breaking ground with our technology.
                </h1>
            </div>
            <div className="row  mt-5 mb-5 offset-1 pb-5" style={{width:"80%", opacity:0.5}}>
                <hr/>
            </div>
            <div className="row  mx-auto mt-5  " style={{fontSize:"1.1rem", opacity:0.9}}>
                <div className="col-2"></div>
                <div className="col-4 ">
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.<br/>
                    <br/>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    <br/><br/>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="col-4 ">
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.<br/><br/><a style={{textDecoration:"none"}} href=" ">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    <br/><br/>And yet, we are always up to something new every day. Catch up on the latest updates on our <a style={{textDecoration:"none"}} href=" ">blog</a> or see what the media is <a style={{textDecoration:"none"}}  href=" ">saying about us</a> or learn more about our business and product  <a style={{textDecoration:"none"}} href=" ">philosophies</a>.</p>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
     );
}

export default Hero;