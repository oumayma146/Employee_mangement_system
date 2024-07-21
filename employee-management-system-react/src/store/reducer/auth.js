/* eslint-disable */
import { ALERT, LOGIN, TOKEN } from '../action/auth'
const initialState = {
  token: null,
  role: [],
  alert: false,
  //sidebarShow: true,
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.payload.token,
        role: action.payload.role,
      }
    case TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case ALERT:
      const errExist = true

      return {
        ...state,
        alert: errExist,
      }
    default:
      return state
  }
}

export default authReducer
