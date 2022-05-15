import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import StaffList from "../components/StaffListComponent";
import { DEPARTMENTS, ROLE, STAFFS } from "../share/staffs";
import StaffInfo from "../components/StaffInfoComponent";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import { Department } from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import * as actions from "./../actions/actionIndex";
import {connect} from "react-redux";
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

  render() {
    const ReStaffInfoy = () => {
      const params = useParams();
      return (
        <StaffInfo></StaffInfo>
      );
    };

    return (
      <div>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<StaffList></StaffList>}
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
// const mapStateToProps = (state) => {
//   return {
//     staffInfo:state.staffInfo
//   }
// }
// const mapDispatchToProps = (dispatch,props) => {
//   return {
//     getStaff: (id) => {
//       dispatch(actions.getStaffInfo(id))
//     }
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Main);
export default Main;
