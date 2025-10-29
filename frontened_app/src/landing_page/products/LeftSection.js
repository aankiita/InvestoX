import React from 'react';
function LeftSection(
  {imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore}
  ){
    return (
        <div className='container '>
          <div className="row p-5">
             <div className='col-lg-1'></div>
            <div className='col-lg-5'>
              <img src={imageURL}/>
              
            </div>

            <div className='col-2'></div>

            <div className='col-lg-4  py-5 mt-5'>
              <h1 className="fs-4" style={{opacity:0.8}}>{productName}</h1>
              <p className='text-muted'>{productDescription}</p>

              <div className='px-4 m-3 '>
                  <a style={{textDecoration:"none"}} href="{tryDemo}">Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                  <a style={{textDecoration:"none" ,marginLeft:"50px"}} href="{learnMore}">Learn More <i class="fa-solid fa-arrow-right"></i></a>
              </div>
              <div className='mt-3'>
                  <a style={{textDecoration:"none"}} href="https://play.google.com/store/games?device=windows"><img src="media/images/googlePlayBadge.svg"/></a>
                  <a style={{textDecoration:"none" ,marginLeft:"50px"}} href="https://www.apple.com/app-store/"><img src="media/images/appstoreBadge.svg"/></a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default LeftSection;