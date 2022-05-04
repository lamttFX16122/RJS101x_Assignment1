import React, { Component } from "react";
import { Routes, Route,useParams } from "react-router-dom";
import StaffList from "../components/StaffListComponent";
import { DEPARTMENTS, ROLE, STAFFS } from "../share/staffs";
import StaffInfo from "../components/StaffInfoComponent";
import SetColumn from "../components/SetColumnComponent";
import SearchStaff from "../components/SearchStaffComponent";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import { Department } from "./DepartmentComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStaff: STAFFS,
      listDepartment:DEPARTMENTS,
      staffInfo: null,
      column: "col-lg-2 col-md-4 col-sm-6 col-6",
      txtFilter: null,
      isHide: true,
    };
  }

  onReceiveCul = (col) => {
    this.setState({
      column: col,
    });
  };

  filterName = (text) => {
    this.setState({
      txtFilter: text,
      isHide: false,
    });
  };

  render() {
   
    const ReStaffInfoy = () => {
      const params = useParams()
      return(
        <StaffInfo staff={this.state.listStaff.filter((stf)=>stf.id===parseInt(params.staffId))[0]}
                    department={this.state.listStaff.filter((stf)=>stf.id===parseInt(params.staffId))[0].department.name}
        ></StaffInfo>
      );
    };
    //   return (
    //       <div></div>
        // <StaffInfo
        //   staff={
        //     this.state.listStaff.filter(
        //       (stf) => stf.id === parseInt(match.params.staffId)
        //     )[0]
        //   }
        //   department={
        //     this.state.listStaff.filter(
        //       (stf) => stf.id === parseInt(match.params.staffId)
        //     )[0].department.name
        //   }
    //     // ></StaffInfo>
    //   );
    // };
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <SearchStaff onReceiveStaffName={this.filterName}></SearchStaff>
            </div>
            <div className="col-6">
              <SetColumn setCulumn={this.onReceiveCul}></SetColumn>
            </div>
          </div>

        <Routes>
            <Route
              path="/"
              element={
                <StaffList
                  listStaff={this.state.listStaff}
                  column={this.state.column}
                  txtFilter={this.state.txtFilter}
                ></StaffList>
              }
            ></Route>
            <Route exact path="/staff/:staffId" element={<ReStaffInfoy></ReStaffInfoy>}></Route>
            <Route exact path="/department" element={<Department department={this.state.listDepartment}></Department>}></Route>
          </Routes>
       
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
