import * as types from "../constants/actionType";
var myReducer = (state = { isLoading: true, isError: null, departments: [] }, action) => {
    switch (action.type) {
        case types.DEPARTMENT_LOADING:
            return {...state, isLoading: true, isError: null, departments: [] };
        case types.DEPARTMENT_FAILED:
            return {...state, isLoading: false, isError: action.payload };
        case types.ADD_LIST_DEPARTMENTS:
            return {...state, isLoading: false, isError: null, departments: action.payload }
        default:
            return state;
    }
}
export default myReducer;