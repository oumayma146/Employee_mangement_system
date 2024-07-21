import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/authSlice';
import { CContainer, CForm, CFormLabel, CFormInput, CButton, CAlert } from '@coreui/react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <CContainer>
      <CForm onSubmit={handleSubmit}>
        <div className="mb-3">
          <CFormLabel htmlFor="name">Name</CFormLabel>
          <CFormInput
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="email">Email</CFormLabel>
          <CFormInput
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="password">Password</CFormLabel>
          <CFormInput
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <CButton type="submit" color="primary" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </CButton>
        {error && <CAlert color="danger">{error}</CAlert>}
      </CForm>
    </CContainer>
  );
};

export default Register;
