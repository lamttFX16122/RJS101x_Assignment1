import * as types from "./../constants/actionType";
import { baseUrl } from "./../share/baseUrl";
import moment from "moment";
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


export const getStaffDefault = () => {
    return {
        type: types.STAFF_DEFAULT
    }
}

export const InitialForm = () => {
    return {
        type: types.INITIAL_FORM
    }
}
export const deleteStaff = (id) => (dispatch) => {
    return fetch(baseUrl + "staffs/" + id, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok)
                return response;
            else {
                var errMes = new Error("Error " + response.status + ': ' + response.statusText);
                errMes.response = response;
                throw errMes;
            }
        }, err => {
            var errMes = new Error(err.message);
            throw errMes;
        })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffList(staffs)))
        .catch(err => dispatch(staffFailed(err)))
}
export const updateStaff = (staff) => (dispatch) => {
    const staffUpdate = {
        id: Number(staff.id),
        name: staff.name,
        doB: moment(staff.doB).format(),
        startDate: moment(staff.startDate).format(),
        departmentId: staff.department,
        salaryScale: Number(staff.salaryScale),
        annualLeave: Number(staff.annualLeave),
        overTime: Number(staff.overTime)
    }
    return fetch(baseUrl + "staffs", {
            method: "PATCH",
            body: JSON.stringify(staffUpdate),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => {

            if (response.ok)
                return response;
            else {
                var errMes = new Error("Error " + response.status + ': ' + response.statusText);
                errMes.response = response;
                throw errMes;
            }
        }, err => {
            var errMes = new Error(err.message);
            throw errMes;
        })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffList(staffs)))
        .catch(err => dispatch(staffFailed(err)))
}
export const postStaff = (staff) => (dispatch) => {
    staff.doB = moment(staff.doB).format();
    staff.startDate = moment(staff.startDate).format();
    staff.salaryScale = Number(staff.salaryScale);
    staff.annualLeave = Number(staff.annualLeave);
    staff.overTime = Number(staff.overTime);
    staff.image = "/assets/images/alberto.png";
    return fetch(baseUrl + "staffs", {
            method: "POST",
            body: JSON.stringify(staff),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        .then(response => {

            if (response.ok)
                return response;
            else {
                var errMes = new Error("Error " + response.status + ': ' + response.statusText);
                errMes.response = response;
                throw errMes;
            }
        }, err => {
            var errMes = new Error(err.message);
            throw errMes;
        })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffList(staffs)))
        .catch(err => dispatch(staffFailed(err)))
}
export const getStaffInfo = (id) => {
    return {
        type: types.STAFF_INFOR,
        id
    }
}
export const staffLoading = () => {

    return { type: types.STAFF_LOADING }
}
export const addStaffList = (staffs) => ({
    type: types.ADD_LIST_STAFFS,
    payload: staffs
})
export const staffFailed = (errMes) => ({
    type: types.STAFF_FAILED,
    payload: errMes
})
export const fetchListStaff = () => (dispatch) => {
    dispatch(staffLoading());
    return fetch(baseUrl)
        .then(response => {

            if (response.ok)
                return response;
            else {
                var errMes = new Error("Error " + response.status + ': ' + response.statusText);
                errMes.response = response;
                throw errMes;
            }
        }, err => {
            var errMes = new Error(err.message);
            throw errMes;
        })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffList(staffs)))
        .catch(err => dispatch(staffFailed(err)))
}
export const fetchStaffDepartment = (id) => (dispatch) => {
    dispatch(staffLoading());
    return fetch(baseUrl + id.toString())
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var errMes = new Error("Error " + response.status + ": " + response.statusText);
                errMes.response = response;
                throw errMes;
            }
        }, err => {
            var errMes = new Error(err.message)
            throw errMes;
        })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffList(staffs)))
        .catch(err => { dispatch(staffFailed(err)) })
}

// Department
export const fetchDepartment = () => (dispatch) => {
    dispatch(departmentLoading());
    return fetch(baseUrl + "departments")
        .then(response => {
            if (response.ok)
                return response;
            else {
                var errMes = new Error("Error " + response.status + ": " + response.statusText);
                errMes.response = response;
                throw errMes;
            }
        }, err => {
            var errMes = new Error(err.message);
            throw errMes;
        })
        .then(response => response.json())
        .then(departments => dispatch(addListDepartments(departments)))
        .catch(err => dispatch(departmentFailed(err)))
}

export const departmentLoading = () => ({
    type: types.DEPARTMENT_LOADING
})
export const departmentFailed = (errMes) => ({
    type: types.DEPARTMENT_FAILED,
    payload: errMes
})
export const addListDepartments = (departments) => ({
        type: types.ADD_LIST_DEPARTMENTS,
        payload: departments
    })
    // Salary

export const salaryLoading = () => ({
    type: types.SALARY_LOADING
})
export const salaryFailed = (errMes) => ({
    type: types.SALARY_FAILED,
    payload: errMes
})
export const addSalarys = (salarys) => ({
    type: types.ADD_SALARYS,
    payload: salarys
})
export const fetchSalary = () => (dispatch) => {
    dispatch(salaryLoading());
    return fetch(baseUrl + "staffsSalary")
        .then(response => {
            if (response.ok)
                return response;
            else {
                var errMes = new Error("Error " + response.status + ": " + response.statusText);
                errMes.response = response;
                throw errMes;
            }
        }, err => {
            var errMes = new Error(err.message);
            throw errMes;
        })
        .then(response => response.json())
        .then(salarys => dispatch(addSalarys(salarys)))
        .catch(err => dispatch(salaryFailed(err)))
}