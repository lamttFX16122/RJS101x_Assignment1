import React, { Component } from "react";
import { Link } from "react-router-dom";
import SetColumn from "./SetColumnComponent";
import SearchStaff from "./SearchStaffComponent";
class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtFil: null,
      colShow: null,
      column: "col-lg-2 col-md-4 col-sm-6 col-6",
    };
  }
  staffClick = (value) => {
    this.props.onReceiveStaff(value);
  };
  FilStaff = (txt) => {
    this.setState({
      txtFil: txt,
    });
  };
  onReceiveCul = (col) => {
    this.setState({
      column: col,
    });
  };
  render() {
    let lstStaff = null;
    if (!this.state.txtFil == null || !this.state.txtFil == "") {
      lstStaff = this.props.listStaff.filter((value) => {
        return (
          value.name.toUpperCase().indexOf(this.state.txtFil.toUpperCase()) !==
          -1
        );
      });
    } else {
      lstStaff = this.props.listStaff;
    }
    let list = lstStaff.map((value) => {
      return (
        <div key={value.id} className={this.state.column}>
          <Link to={`/staff/${value.id}`}>
            <div className="card text-white bg-info cart-list">
              <div className="card-body">
                <img
                  src={value.image}
                  className="card-img-top"
                  alt={value.name}
                />
                <p className="card-text">{value.name}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li
                  className="breadcrumb-item mt-2 ml-2 mb-2  active"
                  aria-current="page"
                >
                  Nhân viên
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-7 col-12">
                <SearchStaff onReceiveStaffName={this.FilStaff}></SearchStaff>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-5 col-12">
                <SetColumn setCulumn={this.onReceiveCul}></SetColumn>
              </div>
            </div>
          </div>
        </div>
        {list.length > 0 ? (
          <React.Fragment>
            <div className="row m-2">{list}</div>
            <div className="row mt-2 ml-4">
              <p>Bấm vào tên nhân viên để xem thông tin.</p>
            </div>
          </React.Fragment>
        ) : (
          <div className="row m-2">
            <p>
              Không tìm thấy nhân viên <b> {this.state.txtFil}</b>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default StaffList;
