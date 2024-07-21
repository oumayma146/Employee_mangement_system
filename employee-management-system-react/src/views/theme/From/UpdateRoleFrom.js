/* eslint-disable */
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPermission } from '../../../store/action/permission'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Checkbox } from '@mui/material'

export default function UpdateRoleFrom({ setTitle, setPermission, permission, title, addHandler }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPermission())
  }, [])
  const onSubmit = (e) => {
    e.preventDefault()
  }
  const checkValue = (e) => {
    let list_permissions = [...permission]
    
    if (e.target.checked == true) {
      //check
      if (permission.includes(e.target.value)) {
        //existe deja
        return;
      } else {
        //n'existe pas
        list_permissions.push(e.target.value)
      }
    }  else {
    //!not check
      
     const indice= permission.findIndex(el=> el== e.target.value)
     list_permissions.splice(indice,1) //non 
    }
    setPermission(list_permissions)
    console.log(list_permissions);
  }

  /*  let list_permissions =[...permission]
 list_permissions.push(e.target.value) */

  const addTitleHandler = (e) => {
    setTitle(e.target.value)
  }

  const Permission = useSelector((state) => state.permissions.permissions)

  return (
    <CForm className="row g-3" onSubmit={onSubmit}>
      <CCol md={6}>
        <CFormLabel>Title</CFormLabel>
        <CFormInput
          type="text"
          value={title}
          onInput={(e) => addTitleHandler(e)}
          id="validationDefault01"
          required
        />
      </CCol>

      <CFormLabel htmlFor="inputAddress">Permission</CFormLabel>
      {Permission.map((elem) => {
        return (
          <CCol xs={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value={elem.id}
                    onChange={checkValue}
                    defaultChecked={permission.includes(elem.id)}
                  />
                }
                label={elem.name}
              />
            </FormGroup>
          </CCol>
        )
      })}

      <CCol xs={12}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton color="primary" type="submit" onClick={addHandler} className="me-md-2">
            Save
          </CButton>
        </div>
      </CCol>
    </CForm>
  )
}
