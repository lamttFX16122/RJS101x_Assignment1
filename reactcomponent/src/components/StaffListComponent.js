import React, { Component } from "react";
import {Link} from "react-router-dom";
class StaffList extends Component {
  staffClick = (value) => {
    this.props.onReceiveStaff(value);
  };

  render() {
    let lstStaff = null;
    if (!this.props.txtFilter == null || !this.props.txtFilter == "") {
      lstStaff = this.props.listStaff.filter((value, index, array) => {
        return (
          value.name
            .toUpperCase()
            .indexOf(this.props.txtFilter.toUpperCase()) !== -1
        );
      });
    } else {
      lstStaff = this.props.listStaff;
    }
    let list = lstStaff.map((value) => {
      return (
        <div key={value.id} className={this.props.column}>
          <Link to={`/staff/${value.id}`}>
           <div className="card text-white bg-info cart-list">
            <div className="card-body">
            <img src={value.image} className="card-img-top" alt={value.name}/>
              <p className="card-text">{value.name}</p>
            </div>
          </div>
        </Link>
        </div>
      );
    });
    if (list.length > 0) {
      return (
        <div>
       <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item mt-2 ml-2 mb-2  active" aria-current="page">
                  Nhân viên
                </li>
              </ol>
            </nav>
          </div>
        </div>
          <div className="row m-2">{list}</div>
          <div className="row mt-2 ml-4">
            <p>Bấm vào tên nhân viên để xem thông tin.</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row m-2">
          <p>
            Không tìm thấy nhân viên <b> {this.props.txtFilter}</b>
          </p>
        </div>
      );
    }
  }
}

export default StaffList;
