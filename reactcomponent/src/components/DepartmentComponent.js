import React,{useEffect} from "react";
import * as actions from "./../actions/actionIndex";
import { connect } from "react-redux";
import { Loading } from "./LoadingComponent";
import ErrorFetch from "./../components/ErrorComponent";
import { Link } from "react-router-dom";
const Department = (props) => {
  let length=props.departments.departments.length;
  console.log(length)
  useEffect(()=>{
    if(length===0)
      props.fetchDepartment();
  },[])
    const depar=props.departments.departments.map((value) => {
        return (
          <div key={value.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
         <Link to={`/departments/${value.id}`}>
         <div className="card" >
          <h5 className="card-header">{value.name}</h5>
          <div className="card-body">
            <p className="card-text">Số lượng nhân viên: {value.numberOfStaff}</p>
          </div>
          </div>
         </Link>
        </div>
      );
      //  }
     })
  return (
    <React.Fragment>
      <div className="row mb-4">
           {props.departments.isLoading?<Loading/>:props.departments.isError?<ErrorFetch isError={props.departments.isError}/>:depar}   
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    departments: state.departments,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDepartment: () => {
      dispatch(actions.fetchDepartment());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Department);
