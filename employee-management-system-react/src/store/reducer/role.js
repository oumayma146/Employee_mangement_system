/* eslint-disable */
import { DELETEROLE, NAME, ROLE, ROLENAME, SEARCHROLE} from "../action/role";
const initialState = {
    roleList:[],
    nameList:[],
    NewroleList:[],
    NameList:[],
 
}
const roleReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEARCHROLE:
          
            let NewroleList =[...state.roleList];
            const resultRole=NewroleList.filter(elem=>{
                return elem.name.includes(action.payload.name)
            })
            return {
                ...state,
                NewroleList: resultRole,
            };
        case ROLE:
            return {
                ...state,
                roleList: action.payload.roleList,
                NewroleList: action.payload.roleList,

            };
            case ROLENAME:
            return {
                ...state,
                NameList: action.payload.NameList,
                NewroleList: action.payload.NameList,

            };
        case NAME:
            
             return {
                    ...state,
                    nameList: action.payload.nameList,
                    NewnameList: action.payload.nameList,
    
                };    
            case DELETEROLE:
                let newRoleList =[...state.roleList];
                const result=newRoleList.filter(elem=>{
              
                    return elem.id!=action.payload.id
                })
       
                return {
                    ...state,
                    roleList: result,
                };
        default:
            return state;
    }
}


export default roleReducer;