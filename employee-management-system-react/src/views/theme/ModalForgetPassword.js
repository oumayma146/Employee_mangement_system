/* eslint-disable */
import { cilInput } from '@coreui/icons';
import { CButton, CCol, CForm, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useEffect, useState } from 'react'

export default function ModalForgotPassword({visible , setVisible,forgetHandler,email,setEmail}) {
    const addEmailHandler = (e) => {
        setEmail(e.target.value)
      }
  
    return (
      <>
        <CModal visible={ visible } onClose={() => setVisible(false)}>
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle>Reset Password</CModalTitle>
          </CModalHeader>
          <CModalBody>
          <CForm className="row g-3" >
      <CCol >
        <CFormLabel> E-Mail Address</CFormLabel>
        <CFormInput  id="validationDefault01" type="input" value={email} onInput={(e) => addEmailHandler(e)} />
      </CCol>
      </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary" onClick={forgetHandler}>  Send Password Reset Link</CButton>
          </CModalFooter>
        </CModal>
      </>
    )
}

