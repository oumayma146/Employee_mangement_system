/* eslint-disable */
import { CButton, CCol, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function ModalEmployee({employee,setEmplyee,id }) {
  const [employeeData, setEmplyeeData] = useState({});
  const EmployeeInfo= useSelector(state => state.emp.EmployeeInfos);
  useEffect(() => {
    setEmplyeeData(EmployeeInfo)
  },)
  
 

  
  return (
    <CModal visible={employee} onClose={() => setEmplyee(false)} size="xl">
    <CModalHeader onClose={() => setEmplyee(false)}>
      <CModalTitle>Additional Information</CModalTitle>
    </CModalHeader>
    <CModalBody>
 
   <CTable small>
  <CTableHead>
    <h4 >Contract</h4>
    <CTableRow color="primary">
      <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
      <CTableHeaderCell scope="col">End Date</CTableHeaderCell>
      <CTableHeaderCell scope="col">Registration Number</CTableHeaderCell>
      <CTableHeaderCell scope="col">Number Of Hours</CTableHeaderCell>
      <CTableHeaderCell scope="col">Contract Type</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {employeeData?
    <>

    <CTableRow>
      <CTableHeaderCell scope="row">  {employeeData?.contrat?.debutdate} </CTableHeaderCell>               
      <CTableHeaderCell scope="row">  {employeeData?.contrat?.findate} </CTableHeaderCell>
      <CTableHeaderCell scope="row">  {employeeData?.contrat?.matricule}</CTableHeaderCell>
      <CTableHeaderCell scope="row">  {employeeData?.contrat?.nbheure} </CTableHeaderCell>
      <CTableHeaderCell scope="row">  {employeeData?.contrat?.typeContart} </CTableHeaderCell>
    </CTableRow>
     </>  :null}   
   </CTableBody>
    </CTable>  
    <CTable small>
  <CTableHead title='Other Info'>
    <h4>Other Info</h4>
    <CTableRow color="primary">
  {/*   <CTableHeaderCell scope="col">Password</CTableHeaderCell> */}
      <CTableHeaderCell scope="col">CIN Number</CTableHeaderCell>
      <CTableHeaderCell scope="col">Bank Account Number</CTableHeaderCell>
      <CTableHeaderCell scope="col">Telephone Number</CTableHeaderCell>
      <CTableHeaderCell scope="col">Language</CTableHeaderCell>
      <CTableHeaderCell scope="col">Education</CTableHeaderCell>
      <CTableHeaderCell scope="col">Skills</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {employeeData?
    <>
 
    <CTableRow>{/* 
    <CTableHeaderCell scope="row">  {employeeData?.password}  </CTableHeaderCell>   */}    
      <CTableHeaderCell scope="row">  {employeeData?.user_info?.numeroCIN}  </CTableHeaderCell>               
      <CTableHeaderCell scope="row">  {employeeData?.user_info?.numeroCarteBancaire }</CTableHeaderCell>
      <CTableHeaderCell scope="row">  {employeeData?.user_info?.numeroTelephone} </CTableHeaderCell>
      <CTableHeaderCell scope="row">  {employeeData?.langues?.map(e=>{  return(  <div>{e.nom} </div>)      })}</CTableHeaderCell>
      <CTableHeaderCell scope="row">  {employeeData?.education?.map(el=>{  return(  <div>{el.diplome} </div>)      })}</CTableHeaderCell>
      <CTableHeaderCell scope="row">  {employeeData?.competance?.map(elm=>{  return(  <div>{elm.nomCompetence} </div>)      })}</CTableHeaderCell>
    </CTableRow>
   </>  :null}   
   </CTableBody>
    </CTable>  
    <CTable small>
  <CTableHead>
    <h4 >Certificates</h4>
    <CTableRow color="primary">
      <CTableHeaderCell scope="col">Title</CTableHeaderCell>
      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
      <CTableHeaderCell scope="col">Source</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {employeeData?
    <>
 
    <CTableRow>
      <CTableHeaderCell scope="row">  {employeeData?.cartification?.map(a=>{  return(  <div>{a.titre} </div>)      })}</CTableHeaderCell>
      <CTableHeaderCell scope="row">  {employeeData?.cartification?.map(a=>{  return(  <div>{a.date} </div>)      })}</CTableHeaderCell>
      <CTableHeaderCell scope="row">  {employeeData?.cartification?.map(a=>{  return(  <div>{a.source} </div>)      })}</CTableHeaderCell>
    </CTableRow>
   </>  :null}   
   </CTableBody>
    </CTable>  

    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" onClick={() => setEmplyee(false)}>
        Close
      </CButton>
    
    </CModalFooter>
  </CModal>

  )
}
