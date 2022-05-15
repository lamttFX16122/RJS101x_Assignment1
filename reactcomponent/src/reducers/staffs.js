import * as types from "../constants/actionType";
import { DEPARTMENTS, ROLE, STAFFS } from "./../share/staffs";
import moment from "moment";
import { type } from "@testing-library/user-event/dist/type";
var initialState = STAFFS;
const renderIdStaff = () => {
    let id = STAFFS.length;
    while (id === STAFFS.id) {
        id++;
    }
    return id;
}
const findIndexId = (department, id) => {
    let resultIndex = -1;
    department.findIndex((value, index) => {
        if (value.id === id) {
            resultIndex = index;
        }
    });
    return resultIndex;
}
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_STAFF:
            action.staff.id = renderIdStaff();
            action.staff.department = DEPARTMENTS[findIndexId(DEPARTMENTS, action.staff.department)];
            action.staff.doB = moment(action.staff.doB).format();
            action.staff.startDate = moment(action.staff.startDate).format();
            action.staff.salaryScale = Number(action.staff.salaryScale);
            action.staff.annualLeave = Number(action.staff.annualLeave);
            action.staff.overTime = Number(action.staff.overTime);
            action.staff.image = "/assets/images/alberto.png";
            STAFFS.push(action.staff);
            return state;

        default:
            return state;
    }
}
export default myReducer;