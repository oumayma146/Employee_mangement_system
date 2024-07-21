/* eslint-disable */
import React, { useEffect, useState } from 'react'
import '../../../scss/_custom.scss'
import Modale from '../From/UpdateRoleFrom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass, cilTrash } from '@coreui/icons'
import Modal from '../Modal'
import { useDispatch, useSelector } from 'react-redux'
import DeleteModal from '../DeleteModal'
import {
  AddPermission,
  DeletePermission,
  getPermission,
  SearchPermission,
} from '../../../store/action/permission'
import PermissionFrom from '../From/Permission'

const Permission = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPermission())
  }, [])
  const deletePermissionHandler = (id) => {
    dispatch(DeletePermission(id))
    setDelete(false)
    dispatch(getPermission())
  }
  const ListPermission = useSelector((state) => state.permissions.NewpermissionsList)

  //add state
  const [visible, setVisible] = useState(false)
  const [Delete, setDelete] = useState(false)
  const [name, setName] = useState()
  const [idOfElementToBeDeleted, setIdOfElementToBeDeleted] = useState()
  const onPressDeleteHandler = (id) => {
    setDelete(!Delete)
    setIdOfElementToBeDeleted(id)
  }
  const addPermissionHandler = () => {
    dispatch(AddPermission(name)).then(() => {
      setVisible(false)
      setName()
      dispatch(getPermission())
    })
  }
  const SearchPermissionHandler = (name) => {
    dispatch(SearchPermission(name))
  }
  return (
    <>
      <CRow>
        <DeleteModal
          Delete={Delete}
          setDelete={setDelete}
          deleteHandler={() => deletePermissionHandler(idOfElementToBeDeleted)}
        />
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <CInputGroup className="input-prepend">
                <CInputGroupText>
                  <CIcon icon={cilMagnifyingGlass} />
                </CInputGroupText>
                <CFormInput
                  type="search"
                  placeholder="Search for..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <CButton color="primary" size="sm" onClick={(e) => SearchPermissionHandler(name)}>
                  Search
                </CButton>
                <div style={{ width: '400px' }}> </div>

                <CButton onClick={() => setVisible(!visible)}>ADD</CButton>
                <Modal
                  size="md"
                  title={'Add new Permission'}
                  visible={visible}
                  setVisible={setVisible}
                >
                  <PermissionFrom
                    name={name}
                    setName={setName}
                    addHandler={() => addPermissionHandler()}
                  />
                </Modal>
              </CInputGroup>
            </CCardHeader>
          </CCard>
        </CCol>
      </CRow>
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell>Id</CTableHeaderCell>
            <CTableHeaderCell>Permission Name</CTableHeaderCell>
            <CTableHeaderCell>Options</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {ListPermission.map((elem) => {
            return (
              <CTableRow key={Math.random().toString()}>
                <CTableDataCell>{elem.id}</CTableDataCell>
                <CTableDataCell>{elem.name}</CTableDataCell>

                <CTableDataCell>
                  <CButton color="link" onClick={() => onPressDeleteHandler(elem.id)} role="button">
                    <CIcon size="xl" icon={cilTrash} />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
    </>
  )
}
export default Permission
