import { combineReducers } from "redux";
import staffs from "./staffs";
import searchStaff from "./searchStaff";
import displayForm from "./displayForm";
import departments from "./departments";
import staffDefault from "./staffDefault";
import staffInfo from "./staffInfo";
import salarys from "./salary";
export var myReducer = combineReducers({
    staffs,
    searchStaff,
    displayForm,
    departments,
    staffDefault,
    staffInfo,
    salarys
});