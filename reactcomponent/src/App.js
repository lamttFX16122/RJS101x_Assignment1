import "./App.css";
import React, { Component } from "react";
import StaffList from "./components/StaffListComponent";
import { DEPARTMENTS, ROLE, STAFFS } from "./share/staffs";
import StaffInfo from "./components/StaffInfoComponent";
import SetColumn from "./components/SetColumnComponent";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStaff: STAFFS,
      staffInfo: null,
      department: null,
      column: "col-lg-4 col-md-6 col-sm-6 col-12"
    };
  }
  getStaff = (staff) => {
    if (staff != null) {
      this.setState({
        staffInfo: staff,
        department: staff.department.name,
      });
    }
  };
  onReceiveCul=col=>{
    this.setState({
      column:col
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary text-white">
          <a className="nav-link active">Ứng dụng quản lý nhân sự v1.0</a>
        </nav>
        <div className="row">
          <SetColumn setCulumn={this.onReceiveCul}></SetColumn>
        </div>
        <div className="container">
          <StaffList
            listStaff={this.state.listStaff}
            onReceiveStaff={this.getStaff}
            column={this.state.column}
          ></StaffList>
          <StaffInfo
            staffInfo={this.state.staffInfo}
            department={this.state.department}
          ></StaffInfo>
        </div>
      </div>
    );
  }
}

export default App;
