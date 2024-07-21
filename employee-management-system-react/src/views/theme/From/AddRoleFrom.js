/* eslint-disable */
import { CButton, CCol, CForm, CFormInput, CFormLabel, CFormCheck } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPermission } from '../../../store/action/permission';

export default function AddRoleForm({ setTitle, setPermission, permission, title, addHandler }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPermission());
  }, [dispatch]);
  
  const onSubmit = (e) => {
    e.preventDefault();
   
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    let updatedPermissions = [...permission];
    
    if (e.target.checked) {
      updatedPermissions.push(value);
    } else {
      updatedPermissions = updatedPermissions.filter(perm => perm !== value);
    }
    
    setPermission(updatedPermissions);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const permissions = useSelector(state => state.permissions.permissions);

  return (
    <CForm className="row g-3" onSubmit={onSubmit}>
      <CCol md={6}>
        <CFormLabel htmlFor="roleTitle">Title</CFormLabel>
        <CFormInput
          type="text"
          value={title}
          onChange={handleTitleChange}
          id="roleTitle"
          required
        />
      </CCol>

      <CCol md={12}>
        <CFormLabel htmlFor="rolePermissions">Permissions</CFormLabel>
        {permissions.map((perm) => (
          <CCol xs={2} key={perm.id}>
            <CFormCheck
              type="checkbox"
              id={`permission-${perm.id}`}
              value={perm.id}
              checked={permission.includes(perm.id.toString())}
              onChange={handleCheckboxChange}
              label={perm.name}
            />
          </CCol>
        ))}
      </CCol>

      <CCol xs={12}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton color="primary" type="submit" onClick={addHandler} className="me-md-2">
            Save
          </CButton>
        </div>
      </CCol>
    </CForm>
  );
}
