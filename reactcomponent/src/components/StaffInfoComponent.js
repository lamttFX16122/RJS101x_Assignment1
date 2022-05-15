import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "./../actions/actionIndex";

function RenderStaff({ staff }) {
  return (
    <div className="row m-2">
      <div className="col-lg-3 col-md-4 col-sm-4 col-12">
        <img src={staff.image} className="card-img mt-4" alt={staff.name} />
      </div>
      <div className="col-lg-9 col-md-8 col-sm-8 col-12">
        <div className="card-body">
          <h5>Họ và tên: {staff.name}</h5>
          <p>Ngày sinh: {moment(staff.doB).format("DD/MM/YYYY")}</p>
          <p>
            Ngày vào công ty: {moment(staff.startDate).format("DD/MM/YYYY")}
          </p>
          <p>Phòng ban: {staff.departmentName}</p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
          <p>Số ngày đã làm thêm: {staff.overTime}</p>
        </div>
      </div>
    </div>
  );
}
const StaffInfo = (props) => {
  const params = useParams();
  props.getStaff(Number(params.staffId));
  console.log(props.staffInfo);
  if (props.staffInfo != null) {
    return (
      <div className="mb-5">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item mt-2 ml-2 mb-2">
                  <Link to="/">Nhân viên</Link>
                </li>
                <li
                  className="breadcrumb-item mt-2 mb-2  active"
                  aria-current="page"
                >
                  {props.staffInfo.name }
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <RenderStaff
          staff={props.staffInfo}
        ></RenderStaff>
      </div>
    );
  } else {
    return <div className="row"></div>;
  }
};
const mapStateToProps = (state) => {
  return {
    staffInfo:state.staffInfo
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    getStaff: (id) => {
      dispatch(actions.getStaffInfo(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(StaffInfo);
