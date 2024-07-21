/* eslint-disable */
import axios from 'axios'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const TOKEN = 'TOKEN'
export const ALERT = 'ALERT'
export const FORGETPASSWORD = 'FORGETPASSWORD'
export const auth = (userEmail, password) => {
  return async (dispatch, getState) => {
    try {
      let resultat = await axios.post(
        'http://127.0.0.1:8000/api/sign-in',
        { email: userEmail, password: password, returnSecureToken: true },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      if (resultat) {
        localStorage.setItem('token', resultat.data.token)
        localStorage.setItem('role', resultat.data.roles[0])
      }
      dispatch({ type: LOGIN, payload: { token: resultat.data.token, role: resultat.data.roles } })
    } catch (e) {
      dispatch({ type: ALERT })
    }
  }
}

export const setToken = (token) => {
  return (dispatch) => {
    dispatch({ type: TOKEN, token })
  }
}
export const ForgetPassword= (email) => {
  return async (dispatch,getState) =>{
      let formData  = new FormData();
      formData.append("email", email);
     
      const response = await axios({
          method: "POST",
          url: `http://127.0.0.1:8000/api/password/email`,
           data: formData,
           headers: {},
           "Content-Type": "multipart/form-data" 
          })
          console.log(response);
  };
 
}
