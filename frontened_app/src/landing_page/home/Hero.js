import React from 'react';
function Hero() {
    return (
        <div className="container p-5 mb-5">
          <div className="row text-center">
            <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5"/>
            <h1 className="mt-2">Invest in Everything</h1>
            <p>Online platform to invest in stocks,derivatives,mutual funds, and more </p>
            <a href="http://localhost:3001/signup"><button className="p-2 fs-5 mb-5 btn btn-primary mt-2" style={{width:"20%", margin:"0 auto"}}>Signup Now</button></a>

          </div>
        </div>
      );
}
export default Hero;