import "./App.css";
import React, { Component } from "react";
import StaffList from "./components/StaffListComponent";
import { DEPARTMENTS, ROLE, STAFFS } from "./share/staffs";
import StaffInfo from "./components/StaffInfoComponent";
import SetColumn from "./components/SetColumnComponent";
import SearchStaff from "./components/SearchStaffComponent";
import { Button } from "bootstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStaff: STAFFS,
      staffInfo: null,
      department: null,
      column: "col-lg-4 col-md-6 col-sm-6 col-12",
      txtFilter: null,
      isHide:true
    };
  }
  getStaff = (staff) => {
    if (staff != null) {
      this.setState({
        staffInfo: staff,
        department: staff.department.name,
        isHide:true
      });
    }
  };
  onReceiveCul=col=>{
    this.setState({
      column:col
    });
  }
  displayText=()=>{
    if(this.state.staffInfo==null || !this.state.isHide)
    {
      return {display:"block"}
    }
    else{
      return {display:"none"}
    }
  }
  filterName=(text)=>{
    this.setState({
      txtFilter:text,
      isHide:false
    })
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary text-white">
          <a className="nav-link active">Ứng dụng quản lý nhân sự v1.0</a>
        </nav>
          <SetColumn setCulumn={this.onReceiveCul}></SetColumn>
        <div className="container">
          <SearchStaff onReceiveStaffName={this.filterName}></SearchStaff>
          <StaffList
            listStaff={this.state.listStaff}
            onReceiveStaff={this.getStaff}
            column={this.state.column}
            txtFilter={this.state.txtFilter}
          ></StaffList>
        <div className="row mt-2 ml-4" style={this.displayText()}>
            <p>Bấm vào tên nhân viên để xem thông tin.</p>
        </div>
          <StaffInfo
            staffInfo={this.state.staffInfo}
            department={this.state.department}
            isHide={this.state.isHide}
          ></StaffInfo>
        </div>
      </div>
    );
  }
}

export default App;
