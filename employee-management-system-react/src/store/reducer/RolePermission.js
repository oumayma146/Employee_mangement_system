/* eslint-disable */
import { ROLEPERMISSION} from "../action/RolePermission";
const initialState = {
    ListPermission:[],
 
}
const RolePermissionReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ROLEPERMISSION:
            return {
                ListPermission: action.payload.ListPermission,
                
            };
        default:
            return state;
    }
}


export default RolePermissionReducer;