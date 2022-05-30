import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link , useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../actions/actionIndex";
import { Loading } from "./LoadingComponent";
import ErrorFetch from "./ErrorComponent";
import { useForm } from "react-hook-form";
// Confirm
import {confirm} from "./ConfirmComponent";
import { FadeTransform } from 'react-animation-components';


const StaffInfo = (props) => {
  const navigate=useNavigate();
  const params = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    props.fetchListStaff();
    props.fetchDepartment();
  }, [params]);

  function handleIsEdit() {
    let staff = props.staffs.staffs.filter(
      (value) => value.id === Number(params.staffId)
    )[0];

    let staffUpdate = {
      name: staff.name,
      doB: moment(staff.doB).format("YYYY-MM-DD"),
      startDate: moment(staff.startDate).format("YYYY-MM-DD"),
      department: staff.departmentId,
      salaryScale: staff.salaryScale,
      annualLeave: staff.annualLeave,
      overTime: staff.overTime,
    };
    reset(staffUpdate);
    setIsEdit(true);
  }
  function onSubmit(staff) {
    staff.id = params.staffId;
     props.updateStaff(staff);
    setIsEdit(false);
  }
async function cancelEdit(){
  if (await confirm("Bạn muốn hủy sửa thông tin nhân viên")) {
    setIsEdit(false)
} else {
  return;
}
}
  async function deleteStaff(name)
  {
    if (await confirm("Bạn muốn xóa nhân viên "+name+"?")) {
        props.deleteStaff(params.staffId);
        navigate("/", {replace:true});
    } else {
      return;
    }
  }
  if (props.staffs.staffs.length > 0) {
    let staff = props.staffs.staffs.filter(
      (value) => value.id === Number(params.staffId)
    )[0];
    staff.departmentName = Object(
      props.departments.departments.filter(
        (value) => value.id === staff.departmentId
      )[0]
    ).name;

    const RenderStaff = (staff, isEdit, departments) => {
      if (isEdit) {
        let optionDepart = departments.map((value) => {
          return (
            <option key={value.id} value={value.id}>
              {value.name}
            </option>
          );
        });
        return (
          <div className="row m-2">
            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
              <img
                src={staff.image}
                className="card-img mt-4"
                alt={staff.name}
              />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-8 col-12">
              <div className="card-body">
                {/* Form */}
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <form onSubmit={handleSubmit(onSubmit)}>                 
                  <div className="mb-3">
                    <label className="form-lable">Tên</label>
                    <input
                      className="form-control"
                      {...register("name", {
                        required: "Yêu cầu nhập",
                        minLength: {
                          value: 3,
                          message: "Yêu cầu nhiều hơn 2 ký tự",
                        },
                        maxLength: {
                          value: 30,
                          message: "Yêu cầu ít hơn 30 ký tự",
                        },
                      })}
                    />
                    {errors?.name && <p className="text-danger">{errors?.name.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label className="form-lable">Ngày sinh</label>
                    <input
                      className="form-control"
                      type="date"
                      {...register("doB", { required: "Yêu cầu nhập", 
                        validate:{
                          positiveDate: d=>moment(d).format("YYYY-MM-DD") < moment().format("YYYY-MM-DD")|| "Ngày sinh không hợp lệ"
                        }
                      })}
                    />
                    {errors?.doB && <p className="text-danger">{errors?.doB.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label className="form-lable">Ngày vào công ty</label>
                    <input
                      className="form-control"
                      type="date"
                      {...register("startDate",{required: "Yêu cầu nhập"})}
                    />
                    {errors?.startDate && <p className="text-danger">{errors?.startDate.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label className="form-lable">Phòng ban</label>
                    <select
                      {...register("department")}
                      className="form-control"
                    >
                      {optionDepart}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-lable">Hệ số lương</label>
                    <input
                    type="number"
                      className="form-control"
                      step={0.1}
                      {...register("salaryScale", { required: "Yêu cầu nhập", valueAsNumber:true, 
                        validate:{
                          positive: v=>Number(v)>=0 || "Yêu cầu không nhỏ hơn 0"
                        }
                      })}                     
                    />
                    {errors?.salaryScale && <p className="text-danger">{errors?.salaryScale.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label className="form-lable">Số ngày nghỉ còn lại</label>
                    <input
                    type="number"
                      className="form-control"
                      {...register("annualLeave", { required: "Yêu cầu nhập", valueAsNumber:true, validate:{
                        positive: v=>parseInt(v)>=0 || 'Yêu cầu không nhỏ hơn 0'
                      } })}
                    />
                    {errors?.annualLeave && <p className="text-danger">{errors?.annualLeave.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label className="form-lable">Số ngày đã làm thêm</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("overTime", { required: "Yêu cầu nhập", valueAsNumber:true ,
                      validate: {
                        positive: v => Number(v) >= 0 || 'Yêu cầu không nhỏ hơn 0',     
                      }})}
                    />
                     {errors?.overTime && <p className="text-danger">{errors?.overTime.message}</p>}
                  </div>
                  <input
                    type="submit"
                    value="Lưu"
                    className="btn btn-primary"
                  />
                  <input
                    type="button"
                    value="Hủy"
                    onClick={cancelEdit}
                    className="btn btn-warning ml-2"
                  />
                </form>
                </FadeTransform>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="row m-2">
            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
              <img
                src={staff.image}
                className="card-img mt-4"
                alt={staff.name}
              />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-8 col-12">
              <div className="card-body">
                <h5>Họ và tên: {staff.name}</h5>
                <p>Ngày sinh: {moment(staff.doB).format("DD/MM/YYYY")}</p>
                <p>
                  Ngày vào công ty:{" "}
                  {moment(staff.startDate).format("DD/MM/YYYY")}
                </p>
                <p>Phòng ban: {staff.departmentName}</p>
                <p>Hệ số lương: {staff.salaryScale}</p>
                <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                <p>Số ngày đã làm thêm: {staff.overTime}</p>
                <button onClick={handleIsEdit} className="btn btn-success mr-2">
                  Sửa
                </button>
                <button onClick={()=>deleteStaff(staff.name)} className="btn btn-danger">Xóa</button>
              </div>
            </div>
          </div>
        );
      }
    };
    return (
      <div className="mb-5">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item mt-2 ml-2 mb-2">
                  <Link to="/">Nhân viên</Link>
                </li>
                <li
                  className="breadcrumb-item mt-2 mb-2  active"
                  aria-current="page"
                >
                  {staff.name}
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {props.staffs.isLoading ? (
          <Loading />
        ) : props.staffs.ErrorFetch ? (
          <ErrorFetch isError={props.staffs.isError} />
        ) : (
          <div>{RenderStaff(staff, isEdit, props.departments.departments)}</div>
        )}
      </div>
    );
  } else {
    return <div className="row"></div>;
  }
};
const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchListStaff: () => {
      dispatch(actions.fetchListStaff());
    },
    fetchDepartment: () => {
      dispatch(actions.fetchDepartment());
    },
    updateStaff: (staff) => {
      dispatch(actions.updateStaff(staff));
    },
    deleteStaff:(id)=>{
      dispatch(actions.deleteStaff(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StaffInfo);
