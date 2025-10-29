import React from 'react';
function Team() {
    return (  
         <div className="container">
            <div className="row p-3 mx-auto mt-5 mb-3  border-top">
                <h1 className="fs-4 text-center mt-5" style={{opacity:0.9}}>
                    People
                </h1>
            </div> 
            <div className="row  mx-auto p-2" >
                 <div className="col-1"></div>
                <div className="col-5 text-center">
                   <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%" ,width:"55%"}}/>
                   <h4 className="mt-2" style={{fontSize:"1.1rem" ,opacity:0.9 }}> Nithin Kamath</h4>
                   <h6 className="mt-1" style={{fontSize:"1.1rem" ,opacity:0.9 }}> Founder,CEO</h6>
                </div>
                <div className="col-5 ">
                    <p style={{fontSize:"1.1rem"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.<br/><br/>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br/><br/>Playing basketball is his zen.
                    <br/><br/><a style={{textDecoration:"none"}} href="">Connect on Homepage</a> / <a  style={{textDecoration:"none"}}  href="">TradingQnA</a> / <a style={{textDecoration:"none"}}  href="">Twitter</a>   
                    </p>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default Team;