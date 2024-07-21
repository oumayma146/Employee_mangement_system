/* eslint-disable */
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
} from '@coreui/react';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoleName } from '../../../store/action/role';
import Select from 'react-select';

export default function EmployeeFrom({
  setRole,
  role,
  password,
  setPassword,
  name,
  setName,
  email,
  setEmail,
  addHandler,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoleName());
  }, [dispatch]);

  const Name = useSelector((state) => state.role.NameList);

  const roleList = Name.map((elem) => {
    return { value: elem.id, label: elem.name };
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addHandler();
  };

  const addPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const addRoleHandler = (selectedOption) => {
    setRole(selectedOption.value);
  };

  const addEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const addNameHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <CForm className="row g-3" onSubmit={onSubmit}>
      <CCol md={6}>
        <CFormLabel htmlFor="inputName">Name</CFormLabel>
        <CFormInput type="input" value={name} onInput={addNameHandler} required />
      </CCol>

      <CCol xs={6}>
        <CFormLabel htmlFor="inputEmail">Email</CFormLabel>
        <CFormInput
          type="email"
          value={email}
          onInput={addEmailHandler}
          placeholder="email here"
          required
        />
      </CCol>
      <CCol xs={6}>
        <CFormLabel htmlFor="inputPassword">Password</CFormLabel>
        <CFormInput
          type="password"
          value={password}
          onInput={addPasswordHandler}
          placeholder="min 6 characters"
          required
        />
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="inputRole">Role</CFormLabel>
        <Select defaultValue={role} onChange={addRoleHandler} options={roleList} required />
      </CCol>
      <CCol xs={12}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton color="primary" type="submit" className="me-md-2">
            Save
          </CButton>
        </div>
      </CCol>
    </CForm>
  );
}
