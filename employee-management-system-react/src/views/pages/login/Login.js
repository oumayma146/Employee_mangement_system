/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import hello from './../../../assets/images/12.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { auth, ForgetPassword } from '../../../store/action/auth'
import ModalForgotPassword from '../../theme/ModalForgetPassword'

function Login() {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [userEmail, setUserEmail] = useState()
  const [password, setPassword] = useState()
  const [forget_password, setForget_Password] = useState('')
  const [visbleForget, setVisbleForget] = useState(false)

  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const Alertt = useSelector((state) => state.auth.alert)
  useEffect(() => {
    if (Alertt) {
      setVisible(true)
    }
  }, [Alertt])

  useEffect(() => {
    console.log("token",token,"local token",localStorage.getItem('token'))
    if (token || localStorage.getItem('token') && localStorage.getItem('role')=="admin") {
      navigate('/dashboard/AdminDashboard');
    }else if(token || localStorage.getItem('token') && localStorage.getItem('role')=="employee")
    {
      navigate('/dashboard/EmployeeDashboard');
    }

    
  }, [token])
  async function login() {
    dispatch(auth(userEmail, password))
  }
  async function Forget_Password() {
    dispatch(ForgetPassword(forget_password))
    setForget_Password('')
    setVisbleForget(false)
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={onSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Useremail"
                        autoComplete="useremail"
                        onChange={(e) => setUserEmail(e.target.value)}
                        id="validationDefault01"
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                        id="validationDefault02"
                        required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit" onClick={login}>
                          Login
                        </CButton>
                      </CCol>

                      <CAlert
                        color="info"
                        visible={visible}
                        dismissible
                        onClose={() => setVisible(false)}
                      >
                        verify your email and password
                      </CAlert>
                      <CCol xs={6} className="text-right">
                        <CButton
                          color="link"
                          className="px-0"
                          onClick={() => setVisbleForget(!visible)}
                        >
                          Forgot password?
                        </CButton>
                        <ModalForgotPassword
                          visible={visbleForget}
                          setVisible={setVisbleForget}
                          email={forget_password}
                          setEmail={setForget_Password}
                          forgetHandler={() => Forget_Password()}
                        ></ModalForgotPassword>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>User & File & Folder Management</h2>
                    <p>welcome back</p>
                    <CImage
                      CImage
                      align="center"
                      rounded
                      src={hello}
                      width={200}
                      height={200}
                    ></CImage>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
