import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SetColumn from "./SetColumnComponent";
import SearchStaff from "./SearchStaffComponent";
import * as actions from "./../actions/actionIndex";
import { connect } from "react-redux";
import moment from "moment";
class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: this.props.departments[0].id,
      annualLeave: "",
      overTime: "",

      touched: {
        name: false,
        doB: false,
        salaryScale: false,
        startDate: false,
        annualLeave: false,
        overTime: false,
      },
    };
  }
  staffClick = (value) => {
    this.props.onReceiveStaff(value);
  };

  onReceiveCul = (col) => {
    this.setState({
      column: col,
    });
  };

  toggleOnclick = () => {
    this.props.getListDepartment();
    this.props.onHandleButtonToggle();
  };
  onFormChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmitForm = (e) => {
    e.preventDefault();

    const staff = {
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: this.state.department,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
    };
    this.props.getStaffDefault();
    console.log("NEW", staff);
    console.log("default", this.props.staffDefault);
    if (
      JSON.stringify(staff) === JSON.stringify(this.props.staffDefault) ||
      Object.keys(this.validateForm()).length !== 0
    ) {
      this.setState({
        touched: {
          name: true,
          doB: true,
          salaryScale: true,
          startDate: true,
          annualLeave: true,
          overTime: true,
        },
      });
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      this.props.addStaff(staff);
      this.props.onHandleButtonToggle();
    }
  };

  onBlur = (field) => (e) => {
    this.setState({
      touched: {
        ...this.state.touched,
        [field]: true,
      },
    });
  };

  validateForm = () => {
    const { name, doB, salaryScale, startDate, annualLeave, overTime } =
      this.state;
    const { touched } = this.state;
    let err = {};
    // name
    if (touched.name) {
      if (name === "") {
        err.name = "Yêu cầu nhập";
      } else if (name.length < 3) {
        err.name = "Yêu cầu nhiều hơn 2 ký tự";
      } else if (name.length > 30) {
        err.name = "Yêu cầu ít hơn 30 ký tự";
      }
    }
    // ngay sinh
    if (touched.doB) {
      if (doB === "") {
        err.doB = "Yêu cầu nhập";
      } else if (moment(doB).format() >= moment().format()) {
        err.doB = "Ngày sinh không lớn hơn ngày hiện tại";
      }
    }

    //startDate
    if (touched.startDate && startDate === "") {
      err.startDate = "Yêu cầu nhập";
    }
    //salaryScale
    if (touched.salaryScale) {
      if (salaryScale === "") {
        err.salaryScale = "Yêu cầu nhập";
      } else if (isNaN(salaryScale)) {
        err.salaryScale = "Yêu cầu phải là số";
      } else if (!isNaN(salaryScale) && Number(salaryScale) < 0) {
        err.salaryScale = "Yêu cầu phải lớn hơn 0";
      }
    }
    //annualLeave
    if (touched.annualLeave) {
      if (annualLeave === "") {
        err.annualLeave = "Yêu cầu nhập";
      } else if (isNaN(annualLeave)) {
        err.annualLeave = "Yêu cầu phải là số";
      } else if (!isNaN(annualLeave) && Number(annualLeave) < 0) {
        err.annualLeave = "Yêu cầu phải lớn hơn 0";
      }
    }
    //overTime
    if (touched.overTime) {
      if (overTime === "") {
        err.overTime = "Yêu cầu nhập";
      } else if (isNaN(overTime)) {
        err.overTime = "Yêu cầu phải là số";
      } else if (!isNaN(overTime) && Number(overTime) < 0) {
        err.overTime = "Yêu cầu phải lớn hơn 0";
      }
    }

    return err;
  };
  onClickStaff=(id)=>{
    this.props.getStaffInfo(id);
  }
  render() {
    let lstStaff = this.props.staffs;
    var err = this.validateForm();
    const { searchStaff } = this.props;
    if (!searchStaff == null || !searchStaff == "") {
      lstStaff = lstStaff.filter((value) => {
        return (
          value.name.toUpperCase().indexOf(searchStaff.toUpperCase()) !== -1
        );
      });
    }
    // } else {
    //   lstStaff = this.props.listStaff;
    // }
    let list = lstStaff.map((value) => {
      return (
        <div key={value.id} className="col-lg-2 col-md-4 col-sm-6 col-6">
          <Link onClick={()=>this.onClickStaff(value.id)} to={`/staff/${value.id}`}>
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
    let optionDepart = this.props.departments.map((value) => {
      return (
        <option key={value.id} value={value.id}>
          {value.name}
        </option>
      );
    });
    // const {staff}=this.state.;

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

          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
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

            <Modal show={this.props.displayForm} onHide={this.toggleOnclick} className="w-75 mx-auto">
              <Modal.Header>
                <Modal.Title>Thêm nhân viên</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.onSubmitForm} noValidate>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tên"
                      name="name"
                      value={this.state.name}
                      onChange={this.onFormChange}
                      onBlur={this.onBlur("name")}
                      isInvalid={!!err.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {err.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ngày sinh</Form.Label>
                    <Form.Control
                      type="date"
                      name="doB"
                      value={this.state.doB}
                      onChange={this.onFormChange}
                      onBlur={this.onBlur("doB")}
                      isInvalid={!!err.doB}
                    />
                    <Form.Control.Feedback type="invalid">
                      {err.doB}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ngày vào công ty</Form.Label>
                    <Form.Control
                      type="date"
                      name="startDate"
                      value={this.state.startDate}
                      onChange={this.onFormChange}
                      onBlur={this.onBlur("startDate")}
                      isInvalid={!!err.startDate}
                    />
                    <Form.Control.Feedback type="invalid">
                      {err.startDate}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phòng ban</Form.Label>
                    <Form.Control
                      as="select"
                      placeholder="Tên"
                      name="department"
                      value={this.state.department}
                      onChange={this.onFormChange}
                      aria-label="Default select example"
                    >
                      {optionDepart}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Hệ số lương</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Hệ số lương"
                      name="salaryScale"
                      value={this.state.salaryScale}
                      onChange={this.onFormChange}
                      onBlur={this.onBlur("salaryScale")}
                      isInvalid={!!err.salaryScale}
                    />
                    <Form.Control.Feedback type="invalid">
                      {err.salaryScale}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Số ngày nghỉ còn lại</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Số ngày nghỉ còn lại"
                      name="annualLeave"
                      value={this.state.annualLeave}
                      onChange={this.onFormChange}
                      onBlur={this.onBlur("annualLeave")}
                      isInvalid={!!err.annualLeave}
                    />
                    <Form.Control.Feedback type="invalid">
                      {err.annualLeave}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Số ngày đã làm thêm</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Số ngày đã làm thêm"
                      name="overTime"
                      value={this.state.overTime}
                      onChange={this.onFormChange}
                      onBlur={this.onBlur("overTime")}
                      isInvalid={!!err.overTime}
                    />
                    <Form.Control.Feedback type="invalid">
                      {err.overTime}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Thêm
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-5 col-12">
            <SearchStaff></SearchStaff>
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
const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    searchStaff: state.searchStaff,
    displayForm: state.displayForm,
    departments: state.departments,
    staffDefault: state.staffDefault,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onHandleButtonToggle: () => {
      dispatch(actions.toggleFormAddStaff());
    },
    getListDepartment: () => {
      dispatch(actions.departmentsList());
    },
    addStaff: (staff) => {
      dispatch(actions.addStaff(staff));
    },
    getStaffDefault: () => {
      dispatch(actions.getStaffDefault());
    },
    getStaffInfo:(id)=>{
      dispatch(actions.getStaffInfo(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StaffList);
