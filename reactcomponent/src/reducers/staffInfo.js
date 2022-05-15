import * as types from "../constants/actionType";
import { DEPARTMENTS, ROLE, STAFFS } from "./../share/staffs";
var initialState = "";
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
        case types.STAFF_INFOR:
            const index = findIndexId(STAFFS, action.id);
            console.log("sss", STAFFS[index]);
            return STAFFS[index];
        default:
            return state;
    }
}
export default myReducer;