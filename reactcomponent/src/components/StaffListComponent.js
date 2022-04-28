import React, { Component } from "react";

class StaffList extends Component {
  staffClick = (value) => {
    this.props.onReceiveStaff(value);
  };
  render() {
    let list = "";
    let count = 0;
    if (this.props.filterName == null || this.props.filterName == "") {
      count++;
      list = this.props.listStaff.map((value) => {
        return (
          <div key={value.id} className={this.props.column}>
            <div
              className="card text-white bg-info cart-list"
              onClick={() => this.staffClick(value)}
            >
              <div className="card-body">
                <p className="card-text">{value.name}</p>
              </div>
            </div>
          </div>
        );
      });
    } else {
     
      list = this.props.listStaff.map((value) => {
        if (
          value.name
            .toUpperCase()
            .indexOf(this.props.filterName.toUpperCase()) >= 0
        ) {
          count++;
          return (
            <div key={value.id} className={this.props.column}>
              <div
                className="card text-white bg-info cart-list"
                onClick={() => this.staffClick(value)}
              >
                <div className="card-body">
                  <p className="card-text">{value.name}</p>
                </div>
              </div>
            </div>
          );
        }
      });
    }
    if (count != 0) {
      return <div className="row m-2">{list}</div>;
    } else
      return (
        <div className="row m-2">
          <p>Không tìm nhân viên có tên <b>{this.props.filterName}</b></p>
        </div>
      );
  }
}

export default StaffList;
