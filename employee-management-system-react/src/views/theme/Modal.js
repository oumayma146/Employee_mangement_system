/* eslint-disable */
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'


export default function Modal({title,visible,setVisible , children,addHandler,size}) {
  return (
    <CModal visible={visible} onClose={() => setVisible(false)} size={size?"sm":"xl"}>
    <CModalHeader onClose={() => setVisible(false)}>
      <CModalTitle>{title}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      {children}
    </CModalBody>
    <CModalFooter>
    </CModalFooter>
  </CModal>

  )
}
