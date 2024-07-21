/* eslint-disable */
import axios from 'axios'
export const EMPLOYEE = 'EMPLOYEE'
export const DELETEEMPLOYEE = 'DELETEEMPLOYEE'
export const ADDEMPLOYEE = 'ADDEMPLOYEE'
export const EMPLOYEEINFO = 'EMPLOYEEINFO'
export const SEARCHEMPLOYEE = 'SEARCHEMPLOYEE'
export const UPDATEEMPLOYEE = 'UPDATEEMPLOYEE'

export const getEmployee = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem('token')
    const response = await axios.get('http://127.0.0.1:8000/api/users/employees', {
      headers: { Authorization: `Bearer ${token}` },
    })
    dispatch({ type: EMPLOYEE, payload: { employeeList: response.data } })
  }
}
export const DeleteEmployee = (id) => {
  return async (dispatch, getState) => {
    const  token = localStorage.getItem('token')
    const response = await axios.delete(`http://127.0.0.1:8000/api/users/employees/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    dispatch({ type: DELETEEMPLOYEE, payload: { id } })
  }
}

export const AddEmployee = (name, email, password, role) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem('token');
    let formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', role);

    try {
      const response = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/users/employees',
        data: formData,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      dispatch({ type: 'ADD_EMPLOYEE', payload: response.data });
    } catch (error) {
      console.error('Error adding employee:', error.response ? error.response.data : error.message);
      
    
      dispatch({ type: 'ADD_EMPLOYEE_ERROR', payload: error.response ? error.response.data : error.message });
    }
  };
};
export const SearchEmployee = (name) => {
  return async (dispatch, getState) => {
    const  token = localStorage.getItem('token')

    dispatch({ type: SEARCHEMPLOYEE, payload: { name } })
  }
}

export const UpdateEmployee = (name, email, roleId, id) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem('token');
    let formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('role', roleId); 

    try {
      const response = await axios({
        method: 'PUT',
        url: `http://127.0.0.1:8000/api/users/employees/${id}`,
        data: formData,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      dispatch({ type: 'UPDATE_EMPLOYEE', payload: response.data });
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };
};
