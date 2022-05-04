import React from "react";

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
            Lương:{" "}
            {Number(value.salaryScale) * 3000000 +
              Number(value.overTime) * 200000}
          </div>
        </div>
        {/* <div className="card text-center">
        <div className="card-header">{value.name}</div>
        <div className="card-body">
        <h5 className="card-title">{value.name}</h5>
          <p className="card-text">Mã nhân viên: {value.id}</p>
          <p className="card-text">Hệ số lương: {value.salaryScale}</p>
          <p className="card-text">Số ngày làm thêm: {value.overTime}</p>
        </div>
      </div> */}
      </div>
    );
  });
  return <div className="row">{sal}</div>;
};
