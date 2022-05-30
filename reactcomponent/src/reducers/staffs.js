import * as types from "../constants/actionType";
const findIndexId = (department, id) => {
    let resultIndex = -1;
    department.findIndex((value, index) => {
        if (value.id === id) {
            resultIndex = index;
        }
    });
    return resultIndex;
}
var myReducer = (state = { isLoading: true, isError: null, staffs: [] }, action) => {
    switch (action.type) {
        case types.STAFF_LOADING:
            return {
                ...state,
                isLoading: true,
                staffs: []
            }
        case types.ADD_LIST_STAFFS:
            return {
                ...state,
                isLoading: false,
                staffs: action.payload
            }
        case types.STAFF_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        default:
            return state;
    }
}
export default myReducer;