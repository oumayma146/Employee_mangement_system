/* eslint-disable */
import { EMPLOYEE, DELETEEMPLOYEE, SEARCHEMPLOYEE } from "../action/Employee";

const initialState = {
    employeeList:[],
    NewemployeeList:[],
    filesAndFolders: {},
}
const employeeReducer = (state = initialState, action) =>{
    switch (action.type) {
        
        case SEARCHEMPLOYEE:
   
            let NewemployeeList =[...state.employeeList];
            const resultEmployee=NewemployeeList.filter(elem=>{
                return elem.name.includes(action.payload.name)
            })
            return {
                ...state,
                NewemployeeList: resultEmployee,
            };
        case EMPLOYEE:
            return {
                employeeList: action.payload.employeeList,
                NewemployeeList: action.payload.employeeList,

            };
         case DELETEEMPLOYEE:
                let newEmployeeList =[...state.employeeList];
                const result=newEmployeeList.filter(elem=>{
              
            return elem.id!=action.payload.id
                })
       
                return {
                    ...state,
                    adsList: result,
                };
                
                    
        default:
            return state;
    }
}


export default employeeReducer;