import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFromReducer from './EmployeeFormReducer';
import EmployeesReducer from './EmployeeReducer'

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFromReducer,
    employees: EmployeesReducer
});

