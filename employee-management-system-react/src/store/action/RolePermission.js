/* eslint-disable */
import axios from "axios";
export const ROLEPERMISSION ='ROLEPERMISSION';


export const getRolePermission = (id) => {
    return async (dispatch,getState) =>{
        const token =localStorage.getItem('token');
        const response = await axios.get(`http://127.0.0.1:8000/api/role/idRole/${id}`,{ headers: {"Authorization" :`Bearer ${token}` }} 
        )

        dispatch({type:ROLEPERMISSION,payload:{ListPermission:response.data.permissions ,}});
    };
}