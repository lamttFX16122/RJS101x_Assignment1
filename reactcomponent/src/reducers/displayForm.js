import * as types from "../constants/actionType";
var initialState = false;
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM_ADDSTAFF:
            return !state;
        default:
            return state;
    }
}
export default myReducer;