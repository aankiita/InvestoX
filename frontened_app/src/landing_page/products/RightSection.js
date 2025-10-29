import React from 'react';
function RightSection(
  {imageURL,
    productName,
    productDescription,
    learnMore
  }
   ){
    return (
        <div className='container '>
          <div className="row p-5">
            <div className='col-lg-1'></div>

            <div className='col-lg-4  py-5 mt-5'>
              <h1 className="fs-4 mt-5" style={{opacity:0.8}}>{productName}</h1>
              <p className='text-muted'>{productDescription}</p>

              <div className='mt-3 '>
                  <a style={{textDecoration:"none" }} href="{learnMore}">Learn More <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-1 "></div>
            <div className='col-lg-5'>
              <img src={imageURL}/>
            </div>
          </div>
        </div>
      );
}

export default RightSection;