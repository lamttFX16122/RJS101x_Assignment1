import React from "react";
import { Link } from "react-router-dom";

export const Salary = (props) => {
  const sal = props.staff.map((value) => {
    return (
      <div key={value.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            <p className="card-text">Mã nhân viên: {value.id}</p>
            <p className="card-text">Hệ số lương: {value.salaryScale}</p>
            <p className="card-text">Số ngày làm thêm: {value.overTime}</p>
          </div>
          <div className="card-footer text-muted text-center">
            Lương: {Number(value.salaryScale) * 3000000 + Number(value.overTime) * 200000}
          </div>
        </div>
      </div>
    );
  });
  return(
    <React.Fragment>
        <div className="row">
        <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item mt-2 ml-2 mb-2">
                  <Link to="/">
                    Nhân viên
                  </Link>
                </li>
                <li className="breadcrumb-item mt-2 mb-2 active" aria-current="page">
                  Bảng Lương
                </li>
              </ol>
            </nav>    
          </div>
        </div>
        <div className="row">{sal}</div>
    </React.Fragment>
  );
};
