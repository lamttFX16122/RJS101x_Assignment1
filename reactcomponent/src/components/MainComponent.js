import React, { Component } from "react";
import { Routes, Route  } from "react-router-dom";
import StaffList_redux_form from "../components/StaffListComponent_redux_form";
import { DEPARTMENTS, ROLE, STAFFS } from "../share/staffs";
import StaffInfo from "../components/StaffInfoComponent";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import StaffDepartment from "./StaffDepartmentComponent";
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

    return (
      <div>
        <Header></Header>
        <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={<StaffList_redux_form></StaffList_redux_form>}
                ></Route>
                <Route
                  exact
                  path="/staff/:staffId"
                  element={<StaffInfo></StaffInfo>}
                ></Route>
                <Route
                  exact
                  path="/department"
                  element={<Department></Department>}
                ></Route>
                <Route
                  exact
                  path="/departments/:departId"
                  element={<StaffDepartment></StaffDepartment>}
                ></Route>
                <Route path="/salary" element={<Salary></Salary>}></Route>
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
