import React from "react";

const ErrorFetch=(props)=>{
    return (
         <div className="container">
         <div className="row"> 
                <h4 className="text-danger">{props.isError.toString()}</h4>
            </div>
         </div>
    )
}
export default ErrorFetch;