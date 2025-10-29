import React from 'react';
function NotFound() {
    return (
         <div className="container p-5 mb-5">
          <div className="row text-center">
            <h1 className="mt-2 fs-2">404 Not Found</h1>
            <p className="mt-2 mb-2">Sorry ,the Page you are looking for doesnot exist </p>
        
            {/* we have 12 col in bootstarp to  divide it we have to write first 
            <div className="row"> 
               <div className="col-8" ></div>
               <div className=col-4"></div>
            </div>*/}

          </div>
        </div>
      );
}
export default NotFound;