/* eslint-disable */
import axios from "axios";
export const PIE ='PIE';
export const LINE ='LINE';

export const PieChart = () => {
    return async (dispatch,getState) =>{
        const token =localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/chart/pie',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
  
        dispatch({type:PIE,payload:{listePie:response.data,}});
     
    };
}
export const LineChart = () => {
    return async (dispatch,getState) =>{
        const token =localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/chart/donut',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )

        dispatch({type:LINE,payload:{listeline:response.data,}});
     
    };
}