/* eslint-disable */
import {
  CButton,
  CCol,
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRolePermission } from '../../store/action/RolePermission'

export default function ModalPermission({ visible2, setVisible2, id }) {
  const ListPermission = useSelector((state) => state.RolePermission.ListPermission)

  return (
    <CModal visible={visible2} onClose={() => setVisible2(false)} size="xl">
      <CModalHeader onClose={() => setVisible2(false)}>
        <CModalTitle>Role has Permissions</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {ListPermission.map((elem) => {
          return <div>{elem}</div>
        })}
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible2(false)}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
  )
}
