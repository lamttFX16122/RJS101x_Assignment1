import React from "react";

export const Department = (props) => {
    const depar=props.department.map((value) => {
        return (
            <div key={value.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card" >
            <h5 className="card-header">{value.name}</h5>
            <div className="card-body">
              <p className="card-text">Số lượng nhân viên: {value.numberOfStaff}</p>
            </div>
            </div>
          </div>
        );
     })
  return (
    <React.Fragment>
      <div className="row mb-4">
           {depar}   
      </div>
    </React.Fragment>
  );
};
