import React from 'react';
function OpenAccount() {
    return (
         <div className="container p-5 mb-5">
          <div className="row text-center">
            <h1 className="mt-2 fs-2">Open a Zerodha account</h1>
            <p className="mt-2 mb-2">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades. </p>
            <a href="http://localhost:3001/signup"><button class="p-2 fs-5 mb-5 btn btn-primary mt-2" style={{width:"20%", margin:"0 auto"}}>Sign up for free</button></a>

            {/* we have 12 col in bootstarp to  divide it we have to write first 
            <div className="row"> 
               <div className="col-8" ></div>
               <div className=col-4"></div>
            </div>*/}

          </div>
        </div>
      );
}
export default OpenAccount;