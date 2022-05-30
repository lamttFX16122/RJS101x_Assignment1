import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from "./../actions/actionIndex";
import { Loading } from "./LoadingComponent";
import ErrorFetch from "./ErrorComponent";

class Salary extends Component {
  constructor(props) {
    super(props);
     this.state = {
    
     };

  }

  componentDidMount(){
    this.props.fetchSalary();
  }
  // HandleIDChange(e) {
  //   let target = e.target;
  //   let name = target.name;
  //   let value = target.value;
  //   this.setState({
  //     filIdStaff: value,
  //   });
  // }
  // HandleSalChange(e) {
  //   let target = e.target;
  //   let name = target.name;
  //   let value = target.value;
  //   this.setState({
  //     fillSalary: value,
  //   });
  // }
  // HandleSalScale(e) {
  //   let target = e.target;
  //   let name = target.name;
  //   let value = target.value;
  //   this.setState({
  //     filSalaryScale: value,
  //   });
  // }
  render() {

    // if (
    //   this.state.filIdStaff == 0 &&
    //   this.state.filSalaryScale != 0 &&
    //   this.state.fillSalary != 0
    // ) {
    //   arr = this.props.staff.sort((a, b) => {
    //     let aSal =
    //       Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
    //     let bSal =
    //       Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
    //     if (this.state.filSalaryScale == 1 && this.state.fillSalary == 1) {
    //       return Number(a.salaryScale) >= Number(b.salaryScale) && aSal >= bSal
    //         ? -1
    //         : 1;
    //     } else if (
    //       this.state.filSalaryScale == 1 &&
    //       this.state.fillSalary == 2
    //     ) {
    //       return Number(a.salaryScale) >= Number(b.salaryScale) && aSal <= bSal
    //         ? -1
    //         : 1;
    //     } else if (
    //       this.state.filSalaryScale == 1 &&
    //       this.state.fillSalary == 2
    //     ) {
    //       return Number(a.salaryScale) <= Number(b.salaryScale) && aSal <= bSal
    //         ? -1
    //         : 1;
    //     } else {
    //       return Number(a.salaryScale) <= Number(b.salaryScale) && aSal >= bSal
    //         ? -1
    //         : 1;
    //     }
    //   });
    // } else if (
    //   this.state.filIdStaff == 0 &&
    //   this.state.filSalaryScale == 0 &&
    //   this.state.fillSalary != 0
    // ) {
    //   arr = this.props.staff.sort((a, b) => {
    //     let aSal =
    //       Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
    //     let bSal =
    //       Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
    //     if (this.state.fillSalary == 1) {
    //       return aSal >= bSal ? -1 : 1;
    //     } else {
    //       return aSal <= bSal ? -1 : 1;
    //     }
    //   });
    // } else if (
    //   this.state.filIdStaff != 0 &&
    //   this.state.filSalaryScale == 0 &&
    //   this.state.fillSalary == 0
    // ) {
    //   arr = this.props.staff.sort((a, b) => {
    //     if (this.state.filIdStaff == 1) {
    //       return a.id >= b.id ? -1 : 1;
    //     } else {
    //       return a.id <= b.id ? -1 : 1;
    //     }
    //   });
    // } else if (
    //   this.state.filIdStaff != 0 &&
    //   this.state.filSalaryScale != 0 &&
    //   this.state.fillSalary == 0
    // ) {
    //   arr = this.props.staff.sort((a, b) => {
    //     if (this.state.filSalaryScale == 1 && this.state.filIdStaff == 1) {
    //       return Number(a.salaryScale) >= Number(b.salaryScale) && a.id > b.id
    //         ? -1
    //         : 1;
    //     } else if (
    //       this.state.filSalaryScale == 1 &&
    //       this.state.filIdStaff == 2
    //     ) {
    //       return Number(a.salaryScale) >= Number(b.salaryScale) && a.id < b.id
    //         ? -1
    //         : 1;
    //     } else if (
    //       this.state.filSalaryScale == 2 &&
    //       this.state.filIdStaff == 2
    //     ) {
    //       return Number(a.salaryScale) <= Number(b.salaryScale) && a.id < b.id
    //         ? -1
    //         : 1;
    //     } else {
    //       return Number(a.salaryScale) <= Number(b.salaryScale) && a.id > b.id
    //         ? -1
    //         : 1;
    //     }
    //   });
    // } else if (
    //   this.state.filIdStaff != 0 &&
    //   this.state.filSalaryScale != 0 &&
    //   this.state.fillSalary != 0
    // ) {
    //   if (
    //     this.state.filIdStaff == 1 &&
    //     this.state.filSalaryScale == 1 &&
    //     this.state.fillSalary == 1
    //   ) {
    //     arr = this.props.staff.sort((a, b) => {
    //       let aSal =
    //         Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
    //       let bSal =
    //         Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
    //       return Number(a.salaryScale) >= Number(b.salaryScale) &&
    //         a.id >= b.id &&
    //         aSal >= bSal
    //         ? -1
    //         : 1;
    //     });
    //   } else if (
    //     this.state.filIdStaff == 1 &&
    //     this.state.filSalaryScale == 2 &&
    //     this.state.fillSalary == 1
    //   ) {
    //     arr = this.props.staff.sort((a, b) => {
    //       let aSal =
    //         Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
    //       let bSal =
    //         Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
    //       return Number(a.salaryScale) <= Number(b.salaryScale) &&
    //         a.id >= b.id &&
    //         aSal >= bSal
    //         ? -1
    //         : 1;
    //     });
    //   } else if (
    //     this.state.filIdStaff == 1 &&
    //     this.state.filSalaryScale == 1 &&
    //     this.state.fillSalary == 2
    //   ) {
    //     arr = this.props.staff.sort((a, b) => {
    //       let aSal =
    //         Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
    //       let bSal =
    //         Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
    //       return Number(a.salaryScale) >= Number(b.salaryScale) &&
    //         a.id >= b.id &&
    //         aSal <= bSal
    //         ? -1
    //         : 1;
    //     });
    //   } else if (
    //     this.state.filIdStaff == 1 &&
    //     this.state.filSalaryScale == 2 &&
    //     this.state.fillSalary == 2
    //   ) {
    //     arr = this.props.staff.sort((a, b) => {
    //       let aSal =
    //         Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
    //       let bSal =
    //         Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
    //       return Number(a.salaryScale) <= Number(b.salaryScale) &&
    //         a.id >= b.id &&
    //         aSal <= bSal
    //         ? -1
    //         : 1;
    //     });
    //   } else if (
    //     this.state.filIdStaff == 2 &&
    //     this.state.filSalaryScale == 1 &&
    //     this.state.fillSalary == 1
    //   ) {
    //     arr = this.props.staff.sort((a, b) => {
    //       let aSal =
    //         Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
    //       let bSal =
    //         Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
    //       return Number(a.salaryScale) >= Number(b.salaryScale) &&
    //         a.id <= b.id &&
    //         aSal >= bSal
    //         ? -1
    //         : 1;
    //     });
    //   } else if (
    //     this.state.filIdStaff == 2 &&
    //     this.state.filSalaryScale == 2 &&
    //     this.state.fillSalary == 1
    //   ) {
    //     arr = this.props.staff.sort((a, b) => {
    //       let aSal =
    //         Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
    //       let bSal =
    //         Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
    //       return Number(a.salaryScale) <= Number(b.salaryScale) &&
    //         a.id <= b.id &&
    //         aSal >= bSal
    //         ? -1
    //         : 1;
    //     });
    //   } else if (
    //     this.state.filIdStaff == 2 &&
    //     this.state.filSalaryScale == 2 &&
    //     this.state.fillSalary == 2
    //   ) {
    //     arr = this.props.staff.sort((a, b) => {
    //       let aSal =
    //         Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
    //       let bSal =
    //         Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
    //       return Number(a.salaryScale) <= Number(b.salaryScale) &&
    //         a.id <= b.id &&
    //         aSal <= bSal
    //         ? -1
    //         : 1;
    //     });
    //   } else if (
    //     this.state.filIdStaff == 2 &&
    //     this.state.filSalaryScale == 1 &&
    //     this.state.fillSalary == 2
    //   ) {
    //     arr = this.props.staff.sort((a, b) => {
    //       let aSal =
    //         Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
    //       let bSal =
    //         Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
    //       return Number(a.salaryScale) >= Number(b.salaryScale) &&
    //         a.id <= b.id &&
    //         aSal <= bSal
    //         ? -1
    //         : 1;
    //     });
    //   }
    //   //
    // } else if (
    //   this.state.filIdStaff == 0 &&
    //   this.state.filSalaryScale != 0 &&
    //   this.state.fillSalary == 0
    // ) {
    //   arr = this.props.staff.sort((a, b) => {
    //     if (this.state.filSalaryScale == 1) {
    //       return Number(a.salaryScale) >= Number(b.salaryScale) ? -1 : 1;
    //     } else {
    //       return Number(a.salaryScale) <= Number(b.salaryScale) ? -1 : 1;
    //     }
    //   });
    // } else if (
    //   this.state.filIdStaff != 0 &&
    //   this.state.filSalaryScale == 0 &&
    //   this.state.fillSalary != 0
    // ) {
    //   arr = this.props.staff.sort((a, b) => {
    //     let aSal =
    //       Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
    //     let bSal =
    //       Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
    //     if (this.state.filIdStaff == 1 && this.state.fillSalary == 1) {
    //       return a.id > b.id && aSal >= bSal ? -1 : 1;
    //     } else if (this.state.filIdStaff == 1 && this.state.fillSalary == 2) {
    //       return a.id > b.id && aSal <= bSal ? -1 : 1;
    //     } else if (this.state.filIdStaff == 2 && this.state.fillSalary == 2) {
    //       return a.id < b.id && aSal <= bSal ? -1 : 1;
    //     } else {
    //       return a.id < b.id && aSal >= bSal ? -1 : 1;
    //     }
    //   });
    // } else {
    //   arr = this.props.staff.sort((a, b) => {
    //     return a.id <= b.id ? -1 : 1;
    //   });
    // }
  let sal=null;
   if(this.props.salarys.isLoading)
   {
     sal=<Loading/>
   }
   else if(this.props.salarys.isError)
   {
      sal=<ErrorFetch isError={this.props.salarys.isError}/>
   }
   else
   {
      sal = this.props.salarys.salarys.map((value) => {
      return (
        <div key={value.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>
              <p className="card-text">Mã nhân viên: {value.id}</p>
              <p className="card-text">Hệ số lương: {value.salaryScale}</p>
              <p className="card-text">Số ngày làm thêm: {value.overTime}</p>
            </div>
            <div className="card-footer text-muted text-center">
              Lương: {value.salary}
            </div>
          </div>
        </div>
      );
    });
   }
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item mt-2 ml-2 mb-2">
                  <Link to="/">Nhân viên</Link>
                </li>
                <li
                  className="breadcrumb-item mt-2 mb-2 active"
                  aria-current="page"
                >
                  Bảng Lương
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-lg-center  text-md-right text-sm-right text-right">
            <label className="mr-2">Mã nhân viên</label>
            <select
              name="fil-id"
              value={this.state.filIdStaff}
              onChange={this.HandleIDChange}
            >
              <option value={0}>Mặc định</option>
              <option value={1}>Cao đến thấp</option>
              <option value={2}>Thấp đến cao</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-lg-center text-md-right text-sm-right text-right">
            <label className="mr-2">Mức lương</label>
            <select
              name="fil-salary"
              value={this.state.fillSalary}
              onChange={this.HandleSalChange}
            >
              <option value={0}>Mặc định</option>
              <option value={1}>Cao đến thấp</option>
              <option value={2}>Thấp đến cao</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-lg-center text-md-right text-sm-right text-right">
            <label className="mr-2">Hệ số lương</label>
            <select
              name="fil-salaryScale"
              value={this.state.salaryScale}
              onChange={this.HandleSalScale}
            >
              <option value={0}>Mặc định</option>
              <option value={1}>Cao đến thấp</option>
              <option value={2}>Thấp đến cao</option>
            </select>
          </div>
        </div> */}
      <div className="row">{sal}</div>
        
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    salarys: state.salarys
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchSalary:()=>{
      dispatch(actions.fetchSalary());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Salary);
