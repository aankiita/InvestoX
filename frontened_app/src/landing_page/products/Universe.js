import React from 'react';
function Universe() {
    return ( 
        <div className="container">
            <div className="row text-center">
                <h1 >The Zerodha Universe</h1>
                <p >Extend your trading and investment experience even further with our partner platforms
                </p>

                <div className='col-lg-4 p-3 mt-5'>
                    <img src="media/images/smallcaseLogo.png"/>
                    <div className='mt-3'></div>
                    <p className='text-small text-muted px-5 '>Thematic investment platform that helps you invest in diversified basket of stocks on ETFs.</p>
                </div>
                <div className='col-lg-4 p-3 mt-5'>
                    <img style={{width:"30%"}} src="media/images/streakLogo.png"/>
                    <div className='mt-3'></div>
                    <p className='text-small text-muted px-5'>Algo & strategy platform that allow you to create and backtest strategies without coding.</p>
                </div>
                <div className='col-lg-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg"/>
                    <div className='mt-3'></div>
                    <p className='text-small text-muted px-5'>Options trading platform that lets you create strategies,analyze positions,and examine data points like open intrest,FII/DII ,and more.</p>
                </div>
                <div className='col-lg-4 p-3 mt-5'>
                    <img style={{width:"30%"}} src="media/images/zerodhaFundhouse.png"/>
                    <div className='mt-3'></div>
                    <p className='text-small text-muted px-5'>Our Asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-lg-4 p-3 mt-5'>
                    <img src="media/images/goldenpiLogo.png"/>
                    <div className='mt-3'></div>
                    <p className='text-small text-muted px-5'>Investement research platfrom that offers detailed insights on stocks,sector,supply chains and more.Bonds trading platfrom</p>
                </div>
                <div className='col-lg-4 p-3 mt-5'>
                    <img  style={{width:"30%"}} src="media/images/dittoLogo.png"/>
                    <div className='mt-3'></div>
                    <p className='text-small text-muted px-5'> Personalized advice on life and health insurance.No spam and no mis-selling</p>
                </div>
                <a href="http://localhost:3001/signup"><button className="p-2 fs-5 mt-5 mb-5 btn btn-primary " style={{width:"20%", margin:"0 auto"}}>SignUp Now</button></a>
            </div>
        </div>
     );
}

export default Universe;