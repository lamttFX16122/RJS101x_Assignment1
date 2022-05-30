import React, {useEffect} from "react"; 
import { useParams,Link } from "react-router-dom";
import * as actions from "./../actions/actionIndex";
import { connect } from "react-redux";
import { Loading } from "./LoadingComponent";
import ErrorFetch from "./ErrorComponent";


const StaffDepartment = (props) => {
    const params = useParams();
    useEffect(()=>{
            props.getStaffDepartment("departments/"+params.departId.toString());
            props.fetchDepartment();
    },[params])
    const depart=new Object(props.departments.departments.filter((depart)=>(depart.id===params.departId))[0]);
    if(props.staffs.isLoading)
    {
        return <Loading/>
    }
    else if(props.staffs.isError)
    {
        return <ErrorFetch isError={props.staffs.isError}/>
    }
    else {
        let list = props.staffs.staffs.map((value) => {
            return (
              <div key={value.id} className="col-lg-2 col-md-4 col-sm-6 col-6">
                <Link to={`/staff/${value.id}`}>
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
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item mt-2 ml-2 mb-2">
                  <Link to="/department">Phòng ban</Link>
                </li>
                <li
                  className="breadcrumb-item mt-2 mb-2  active"
                  aria-current="page"
                >
                Nhân viên phòng {depart.name}
                </li>
                        </ol>
                        </nav>
                    </div>
              </div>
              <React.Fragment>
                <div className="row m-2">{list}</div>
                <div className="row mt-2 ml-4">
                  <p>Bấm vào tên nhân viên để xem thông tin.</p>
                </div>
              </React.Fragment>
            </div>
            );
    }
}
const mapStateToProps = (state) => {
    console.log("StaffDepartment ", state.staffs);
    console.log("Department ", state.departments.departments);
    return {
      staffs:state.staffs,
      departments:state.departments
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getStaffDepartment: (id) => {
            dispatch(actions.fetchStaffDepartment(id));
        },fetchDepartment: () => {
            dispatch(actions.fetchDepartment());
          }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StaffDepartment);