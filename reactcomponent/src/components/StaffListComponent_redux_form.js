import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchStaff from "./SearchStaffComponent";
import * as actions from "./../actions/actionIndex";
import { connect } from "react-redux";
import moment from "moment";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Loading } from "./../components/LoadingComponent";
import ErrorFetch from "./../components/ErrorComponent";
import { FadeTransform } from 'react-animation-components';
class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      departmentId: "",
      annualLeave: "",
      overTime: "",
    };
  }
  componentDidMount() {
    this.props.fetchListStaff();
  }
  handleSubmit = (staff) => {
    const newStaff = {
      name: staff.name,
      doB: staff.doB,
      salaryScale: staff.salaryScale,
      startDate: staff.startDate,
      departmentId: staff.department,
      annualLeave: staff.annualLeave,
      overTime: staff.overTime,
    };
    this.props.postStaff(newStaff);
    this.props.onHandleButtonToggle();
    //   e.preventDefault();
  };

  staffClick = (value) => {
    this.props.onReceiveStaff(value);
  };

  toggleOnclick = () => {
    this.props.fetchDepartment();
    this.props.onHandleButtonToggle();
  };

  render() {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    const isNum = (val) => !isNaN(Number(val));
    const isdoB = (val) =>
      moment(val).format("YYYY-MM-DD") < moment().format("YYYY-MM-DD");

    let lstStaff = this.props.staffs.staffs;
    const { searchStaff } = this.props;
    if (!searchStaff == null || !searchStaff == "") {
      lstStaff = lstStaff.filter((value) => {
        return (
          value.name.toUpperCase().indexOf(searchStaff.toUpperCase()) !== -1
        );
      });
    }

    let list = lstStaff.map((value) => {
      return (
        <div key={value.id} className="col-lg-2 col-md-4 col-sm-6 col-6">
          <Link to={`/staff/${value.id}`}>
            <div className="card bg-info cart-list">
              <div className="card-body">
                <img
                  src={value.image}
                  className="card-img-top"
                  alt={value.name}
                />
                <p className="card-text text-white">{value.name}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    let optionDepart = this.props.departments.departments.map((value) => {
      return (
        <option key={value.id} value={value.id}>
          {value.name}
        </option>
      );
    });

    return (
      <div>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-10">
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

          <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-center">
            <button
              onClick={this.toggleOnclick}
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
            {/* <!-- Modal --> */}
           
            <Modal
              show={this.props.displayForm}
              onHide={this.toggleOnclick}
              className="w-75 mx-auto"
            >
              <Modal.Header>
                <Modal.Title>Thêm nhân viên</Modal.Title>
              </Modal.Header>
             
              <Modal.Body>
              <FadeTransform  in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <LocalForm
                  model="staff"
                  onSubmit={(staff) => this.handleSubmit(staff)}
                >
                  <div className="mb-3">
                    <label className="form-lable">Tên</label>
                    <Control.text
                      className="form-control"
                      model=".name"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(30),
                      }}
                    />
                  </div>
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập | ",
                      minLength: "Yêu cầu nhiều hơn 2 ký tự | ",
                      maxLength: "Yêu cầu ít hơn 30 ký tự",
                    }}
                  />
                  <div className="mb-3">
                    <label className="form-lable">Ngày sinh</label>
                    <Control
                      className="form-control"
                      model=".doB"
                      type="date"
                      validators={{
                        required,
                        isdoB,
                      }}
                    />
                  </div>
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                      isdoB: "Ngày sinh không hợp lệ",
                    }}
                  />
                  <div className="mb-3">
                    <label className="form-lable">Ngày vào công ty</label>
                    <Control
                      className="form-control"
                      model=".startDate"
                      type="date"
                      validators={{
                        required,
                      }}
                    />
                  </div>
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                    }}
                  />
                  <div className="mb-3">
                    <label className="form-lable">Phòng ban</label>
                    <Control.select
                      className="form-control"
                      model=".department"
                    >
                      {optionDepart}
                    </Control.select>
                  </div>
                  <div className="mb-3">
                    <label className="form-lable">Hệ số lương</label>
                    <Control.text
                      className="form-control"
                      model=".salaryScale"
                      validators={{
                        required,
                        isNum,
                      }}
                    />
                  </div>
                  <Errors
                    className="text-danger"
                    model=".salaryScale"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập | ",
                      isNum: "Yêu cầu phải là số",
                    }}
                  />
                  <div className="mb-3">
                    <label className="form-lable">Số ngày nghỉ còn lại</label>
                    <Control.text
                      className="form-control"
                      model=".annualLeave"
                      validators={{
                        required,
                        isNum,
                      }}
                    />
                  </div>
                  <Errors
                    className="text-danger"
                    model=".annualLeave"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập | ",
                      isNum: "Yêu cầu phải là số",
                    }}
                  />
                  <div className="mb-3">
                    <label className="form-lable">Số ngày đã làm thêm</label>
                    <Control.text
                      className="form-control"
                      model=".overTime"
                      validators={{
                        required,
                        isNum,
                      }}
                    />
                  </div>
                  <Errors
                    className="text-danger"
                    model=".overTime"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập | ",
                      isNum: "Yêu cầu phải là số",
                    }}
                  />
                  <Button variant="primary" type="submit">
                    Thêm
                  </Button>
                </LocalForm>
                </FadeTransform>
              </Modal.Body>
            </Modal>
            
          </div>

          <div className="col-lg-5 col-md-5 col-sm-5 col-12">
            <div className="row">
              <SearchStaff></SearchStaff>
            </div>
          </div>
        </div>
        {this.props.staffs.isLoading ? (
          <Loading />
        ) : this.props.staffs.isError ? (
          <ErrorFetch isError={this.props.staffs.isError} />
        ) : list.length > 0 ? (
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
const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    searchStaff: state.searchStaff,
    displayForm: state.displayForm,
    departments: state.departments,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchListStaff: () => {
      dispatch(actions.fetchListStaff());
    },
    onHandleButtonToggle: () => {
      dispatch(actions.toggleFormAddStaff());
    },
    fetchDepartment: () => {
      dispatch(actions.fetchDepartment());
    },
    postStaff: (staff) => {
      dispatch(actions.postStaff(staff));
    },
    getStaffDefault: () => {
      dispatch(actions.getStaffDefault());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StaffList);
