import React, { Component } from "react";
import moment from "moment";

class StaffInfo extends Component {
  render() {
    if (this.props.staffInfo != null && this.props.isHide) {
      return (
        <div className="row m-2">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="logo192.png" className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Họ và tên: {this.props.staffInfo.name}
                    </h5>
                    <p className="card-text">
                      Ngày sinh: {moment(this.props.staffInfo.doB).format("DD/MM/YYYY")}
                    </p>
                    <p className="card-text">
                      Ngày vào công ty: {moment(this.props.staffInfo.startDate).format("DD/MM/YYYY")}
                    </p>
                    <p className="card-text">
                      Phòng ban: {this.props.department}
                    </p>
                    <p className="card-text">
                      Số ngày nghỉ còn lại: {this.props.staffInfo.annualLeave}
                    </p>
                    <p className="card-text">
                      Số ngày đã làm thêm: {this.props.staffInfo.overTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="row"></div>;
    }
  }
}

export default StaffInfo;