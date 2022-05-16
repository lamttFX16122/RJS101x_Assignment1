import * as types from "../constants/actionType";
import { DEPARTMENTS, ROLE, STAFFS } from "./../share/staffs";
var initialState = {
    name: "",
    doB: "",
    salaryScale: "",
    startDate: "",
    department: DEPARTMENTS[0].id,
    annualLeave: "",
    overTime: ""
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.STAFF_DEFAULT:
            return state;
        case types.INITIAL_FORM:
            return state;
        default:
            return state;
    }
}
export default myReducer;