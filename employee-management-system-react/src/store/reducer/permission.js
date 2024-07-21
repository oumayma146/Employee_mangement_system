/* eslint-disable */
import { DELETEPERMISSION, PERMISSION, SEARCHPERMISSION } from '../action/permission'
const initialState = {
  permissions: [],
  NewpermissionsList: [],
}
const permissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHPERMISSION:

      let NewpermissionsList =[...state.permissions];
      const resultPermission=NewpermissionsList.filter(elem=>{
          return elem.name.includes(action.payload.name)
      })
      return {
          ...state,
          NewpermissionsList: resultPermission,
      };
    case PERMISSION:
      return {
        ...state,
        permissions: action.payload.permission,
        NewpermissionsList: action.payload.permission,

      }
    case DELETEPERMISSION:
      let newpermissionList = [...state.permissions]
      const result = newpermissionList.filter((elem) => {
        return elem.id != action.payload.id
      })

      return {
        ...state,
        permissions: result,
      }
    default:
      return state
  }
}

export default permissionReducer
