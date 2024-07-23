/* eslint-disable */
import React, { useEffect, useState } from 'react'
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
import { cilColorBorder, cilMagnifyingGlass, cilFile , cilFolder, cilTrash } from '@coreui/icons'
import Modal from '../Modal'
import { useDispatch, useSelector } from 'react-redux'
import '../FolderComponent.css';
import {
  AddEmployee,
  getEmployee,
  SearchEmployee,
  UpdateEmployee,
  DeleteEmployee
} from '../../../store/action/Employee'
import DeleteModal from '../DeleteModal'
import EmployeeFrom from '../From/EmployeeFrom'
import { listFoldersAndFiles } from '../../../store/action/folderActions';
const Employee = () => {
  const [updatevisible, setUpdateVisible] = useState(false)
  const EmployeeList = useSelector((state) => state.emp.NewemployeeList)
  const folders = useSelector((state) => state.folder.folders);
  const [Delete, setDelete] = useState(false)
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [role, setRole] = useState([])

  const [updateName, setUpdateName] = useState()
  const [updateEmail, setUpdateEmail] = useState()
  const [updatePassword, setUpdatePassword] = useState()
  const [updateRole, setUpdateRole] = useState([])
  const [updateEmploye, setUpdateEmploye] = useState()
  const [idOfElementToBeUpdate, setIdOfElementToBeUpdate] = useState()
  const [idOfElementToBeDeleted, setIdOfElementToBeDeleted] = useState()
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEmployee())
  }, [])

  const onPressDeleteHandler = (id) => {
    setDelete(!Delete)
    setIdOfElementToBeDeleted(id)
  }

  const onPressUpdateHandler = (id) => {
    setUpdateVisible(!updatevisible)
    setIdOfElementToBeUpdate(id)
    let newEmploye = EmployeeList.filter((el) => id == el.id)
    setUpdateEmploye(newEmploye[0])
    setUpdateName(newEmploye[0].name)
    setUpdateEmail(newEmploye[0].email)
    setUpdateRole({ label: newEmploye[0]?.roles[0]?.name, value: newEmploye[0]?.roles[0]?.id })
  }
  const updateEmployeeHandler = () => {
    dispatch(UpdateEmployee(updateName, updateEmail, updateRole.value, idOfElementToBeUpdate)) 
        .then(() => {
            dispatch(getEmployee());
            setUpdateVisible(false);
        })
        .catch(error => {
            console.error('Error updating employee:', error);
        });
};

  const SearchEmployeeHandler = (name) => {
    dispatch(SearchEmployee(name))
  }

  const addEmployeeHandler = () => {
    dispatch(AddEmployee(name, email, password, role)).then(() => {
      setVisible(false)
      setName('')
      setEmail('')
      setPassword('')
      setRole([])
      dispatch(getEmployee())
    })
  }
  const deleteEmployeeHandler = (id) => {
    dispatch(DeleteEmployee(id))
    setDelete(false)
    dispatch(getEmployee())
  }
  useEffect(() => {
    dispatch(listFoldersAndFiles());
  }, [dispatch]);
  return (
    <>
      <CRow>
        <Modal title={'Add New Employee'} visible={visible} setVisible={setVisible}>
          <EmployeeFrom 
            name={name}
            setName={setName} 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            role={role}
            setRole={setRole}
            addHandler={() => addEmployeeHandler()}
          ></EmployeeFrom>
        </Modal>
        <DeleteModal
          Delete={Delete}
          setDelete={setDelete}
          deleteHandler={() => deleteEmployeeHandler(idOfElementToBeDeleted)}
        />
        <Modal title={'UpDate Employee'} visible={updatevisible} setVisible={setUpdateVisible}>
          <EmployeeFrom
            name={updateName}
            setName={setUpdateName}
            email={updateEmail}
            setEmail={setUpdateEmail}
            password={updatePassword}
            setPassword={setUpdatePassword}
            role={updateRole}
            setRole={setUpdateRole}
            addHandler={() => updateEmployeeHandler(idOfElementToBeUpdate)}
          ></EmployeeFrom>
        </Modal>
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
                <CButton color="primary" size="sm" onClick={(e) => SearchEmployeeHandler(name)}>
                  Search
                </CButton>
                <div style={{ width: '400px' }}> </div>
                <CButton onClick={() => setVisible(!visible)}>ADD</CButton>
              </CInputGroup>
            </CCardHeader>
          </CCard>
        </CCol>
      </CRow>
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell>Name</CTableHeaderCell>    
            <CTableHeaderCell>Email</CTableHeaderCell>
            <CTableHeaderCell>Permission</CTableHeaderCell>  
            <CTableHeaderCell>Options</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {EmployeeList.map((elem) => {
            return (
              <CTableRow key={elem.id}>
                <CTableDataCell>{elem.name}</CTableDataCell>
                <CTableDataCell >{elem.email}</CTableDataCell>
                <CTableDataCell>
                  {elem.roles.map(role => 
                    role.permissions.map(permission => (
                      <div key={permission.id}>
                        {permission.name}
                      </div>
                    ))
                  )}
                </CTableDataCell>
                <CTableDataCell>
                  <CButton color="link" onClick={() => onPressUpdateHandler(elem.id)}>
                    <CIcon size="xl" icon={cilColorBorder} />
                  </CButton>
                  <CButton color="link" onClick={() => onPressDeleteHandler(elem.id)}>
                    <CIcon size="xl" icon={cilTrash} />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
     <CCard className="mb-4">
     <div className="folder-container">
      <h2>Folders and Files</h2>
      {folders.map((folder) => (
        <div key={folder.path} className="folder">
          <h3>
          <CIcon icon={cilFolder} className="icon folder-icon" />
            {folder.name}
          </h3>
          <ul>
            {folder.files.map((file) => (
              <li key={file.path}>
                  <CIcon icon={cilFile} className="icon file-icon" />
                {file.name} (Size: {file.size} bytes)
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </CCard>

    </>
  )
}

export default Employee
