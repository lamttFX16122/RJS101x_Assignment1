import * as types from "../constants/actionType";

var myReducer = (state = { isLoading: true, isError: null, salarys: [] }, action) => {
    switch (action.type) {
        case types.SALARY_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: null,
                salarys: []
            };
        case types.SALARY_FAILED:
            return {...state, isLoading: false, isError: action.payload };
        case types.ADD_SALARYS:
            return {...state, isLoading: false, isError: null, salarys: action.payload }
        default:
            return state;
    }
}
export default myReducer;