/* eslint-disable */
import { LINE, PIE } from "../action/dashboard";

const initialState = {
    ListePie:[],
   listeLine:[],
}
const DashboardReducer = (state = initialState, action) =>{
    switch (action.type) {
        case PIE:
     
            return {
                ...state,
                ListePie: action.payload.listePie,

            };
           
        case LINE:
  
            return {
                ...state,
                listeLine: action.payload.listeline,

            };
            default:
                return state;
        }
    }
    
    
    export default DashboardReducer;