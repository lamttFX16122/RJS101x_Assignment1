import * as types from "./../constants/actionType";
export const getAllListStaff = () => {
    return types = types.LIST_ALL;
}

export const searchStaff = (name) => {
    return {
        type: types.SEARCH_STAFF,
        name
    }
}
export const toggleFormAddStaff = () => {
    return {
        type: types.TOGGLE_FORM_ADDSTAFF
    }
}
export const departmentsList = () => {
    return {
        type: types.DEPARTMENTS_LIST
    }
}
export const addStaff = (staff) => {
    return {
        type: types.ADD_STAFF,
        staff
    }
}
export const getStaffDefault = () => {
    return {
        type: types.STAFF_DEFAULT
    }
}
export const getStaffInfo = (id) => {
    return {
        type: types.STAFF_INFOR,
        id
    }
}
export const InitialForm = () => {
    return {
        type: types.INITIAL_FORM
    }
}