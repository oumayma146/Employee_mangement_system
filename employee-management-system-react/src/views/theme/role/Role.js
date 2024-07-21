/* eslint-disable */
import React, { useEffect, useState } from 'react'
import '../../../scss/_custom.scss'
import Modale from '../From/UpdateRoleFrom'
import {
  CButton,
  CCard,
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
import { cilColorBorder, cilMagnifyingGlass, cilPlus, cilTrash } from '@coreui/icons'

import RoleFrom from '../From/UpdateRoleFrom'
import Modal from '../Modal'
import DeleteModal from '../DeleteModal'
import ModalPermission from '../ModalPermission'
import { useDispatch, useSelector } from 'react-redux'
import { AddRole, DeleteRole, getRole, SearchRole, UpdateRole } from '../../../store/action/role'
import { getRolePermission } from '../../../store/action/RolePermission'
import AddRoleFrom from '../From/AddRoleFrom'
import UpdateRoleFrom from '../From/UpdateRoleFrom'

const Role = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRole())
  }, [])

  const RoleList = useSelector((state) => state.role.NewroleList)
  const [visible, setVisible] = useState(false)
  const [visiblePermission, setVisiblePermission] = useState(false)
  const [Delete, setDelete] = useState(false)
  const [title, setTitle] = useState('')
  const [permission, setPermission] = useState([])
  //update state
  const [updatetitle, setUpdateTitle] = useState('')
  const [updatepermission, setUpdatePermission] = useState([])
  const [updatevisible, setUpdateVisible] = useState(false)
  const [idOfElementToBeUpdate, setIdOfElementToBeUpdate] = useState()
  const [idOfElementToBeDeleted, setIdOfElementToBeDeleted] = useState()

  const onPressDeleteHandler = (id) => {
    setDelete(!Delete)
    setIdOfElementToBeDeleted(id)
  }

  const openModalPermission = (id) => {
    dispatch(getRolePermission(id))
    setVisiblePermission(!visiblePermission)
  }

  const onPressUpdateHandler = (id) => {
    setUpdateVisible(!updatevisible)
    setIdOfElementToBeUpdate(id)
    let newRole = RoleList.filter((el) => {
      return id == el.id
    })
    setUpdateTitle(newRole[0].name)
    
    const ins = newRole[0]?.permission?.map(elem=>{
      return   elem.id;
     }) 

    setUpdatePermission(ins)
  }

  const deleteRoleHandler = (id) => {
    dispatch(DeleteRole(id))
    setDelete(false)
    dispatch(getRole())
  }

  const addRoleHandler = () => {
    dispatch(AddRole(title, permission)).then(() => {
      dispatch(getRole())
      setVisible(false)
      setTitle('')
    })
  }
  const SearchRoleHandler = (title) => {
    dispatch(SearchRole(title))
  }
  const updateRoleHandler = (id) => {
    dispatch(UpdateRole(id ,updatetitle,updatepermission)).then(() => {
      dispatch(getRole()),
      setUpdateVisible(false)
    })
  }
  return (
    <>
      <CRow>
        <Modal
          title={'Update Role'}
          visible={updatevisible}
          setVisible={setUpdateVisible}
         
        >
          <UpdateRoleFrom
            setTitle={setUpdateTitle}
            setPermission={setUpdatePermission}
            permission={updatepermission}
            title={updatetitle}
            
            addHandler={() => updateRoleHandler(idOfElementToBeUpdate)}
          />
        </Modal>
        <DeleteModal
          Delete={Delete}
          setDelete={setDelete}
          deleteHandler={() => deleteRoleHandler(idOfElementToBeDeleted)}
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <CButton color="primary" size="sm" onClick={(e) => SearchRoleHandler(title)}>
                  Search
                </CButton>
                <div style={{ width: '400px' }}> </div>

                <CButton color="primary" onClick={() => setVisible(!visible)}>
                  ADD
                </CButton>
                <Modal
                  title={'Add new Role'}
                  visible={visible}
                  setVisible={setVisible}
                 
                >
                  <AddRoleFrom
                    setTitle={setTitle}
                    setPermission={setPermission}
                    permission={permission}
                    title={title}
                    addHandler={() => addRoleHandler()}
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
            <CTableHeaderCell className="text-center">Role Name</CTableHeaderCell>
            <CTableHeaderCell>Permissions</CTableHeaderCell>
            <CTableHeaderCell>Options</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {RoleList.map((elem) => {
            return (
              <CTableRow key={elem.id}>
                <CTableDataCell className="text-center">
                  {elem.name} 
                </CTableDataCell>
                <CTableDataCell>
                  <CButton color="link" size="sm" onClick={() => openModalPermission(elem.id)}>
                    See All Permission
                  </CButton>
                  <ModalPermission
                    visible2={visiblePermission}
                    setVisible2={setVisiblePermission}
                    id={elem.id}
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CButton color="link" onClick={() => onPressUpdateHandler(elem.id)}>
                    <CIcon size="xl" icon={cilColorBorder} />
                  </CButton>
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

export default Role
