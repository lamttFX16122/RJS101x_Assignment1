import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import StaffList from "../components/StaffListComponent";
import { DEPARTMENTS, ROLE, STAFFS } from "../share/staffs";
import StaffInfo from "../components/StaffInfoComponent";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import { Department } from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import moment from "moment";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStaff: STAFFS,
      listDepartment: DEPARTMENTS,
      staffInfo: null,
      isHide: true,
    };
  }
renderIdStaff = () => {
    let id = this.state.listStaff.length;
    while (id === this.state.listStaff.id) {
        id++;
    }
    return id;
}
 findIndexId = (department, id) => {
  let resultIndex = -1;
  department.findIndex((value, index) => {
      if (value.id === id) {
          resultIndex = index;
      }
  });
  return resultIndex;
}
  addStaff=(staff)=>{
      staff.id = this.renderIdStaff();
      staff.department = this.state.listDepartment[this.findIndexId(this.state.listDepartment,staff.department)];
      staff.doB = moment(staff.doB).format();
      staff.startDate = moment(staff.startDate).format();
      staff.salaryScale = Number(staff.salaryScale);
      staff.annualLeave = Number(staff.annualLeave);
      staff.overTime = Number(staff.overTime);
      staff.image = "/assets/images/alberto.png";
      this.setState(prevState => ({
        listStaff: [...prevState.listStaff, staff]
  }))
  console.log(this.state.listStaff);
  
  }
  render() {
    const ReStaffInfoy = () => {
      const params = useParams();
      return (
        <StaffInfo
          staff={
            this.state.listStaff.filter(
              (stf) => stf.id === parseInt(params.staffId)
            )[0]
          }
          department={
            this.state.listStaff.filter(
              (stf) => stf.id === parseInt(params.staffId)
            )[0].department.name
          }
        ></StaffInfo>
      );
    };

    return (
      <div>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<StaffList listStaff={this.state.listStaff} departments={this.state.listDepartment} addStaff={this.addStaff}></StaffList>}
            ></Route>
            <Route
              exact
              path="/staff/:staffId"
              element={<ReStaffInfoy></ReStaffInfoy>}
            ></Route>
            <Route
              exact
              path="/department"
              element={
                <Department department={this.state.listDepartment}></Department>
              }
            ></Route>
            <Route
              path="/salary"
              element={<Salary staff={this.state.listStaff}></Salary>}
            ></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
