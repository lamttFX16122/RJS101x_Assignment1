import * as types from "../constants/actionType";
import { DEPARTMENTS } from "./../share/staffs";
var initialState = DEPARTMENTS;
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DEPARTMENTS_LIST:
            return state;
        default:
            return state;
    }
}
export default myReducer;