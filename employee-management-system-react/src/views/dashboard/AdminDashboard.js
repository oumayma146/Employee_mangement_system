import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CContainer, CCard, CCardBody, CCardHeader, CListGroup, CListGroupItem, CSpinner } from '@coreui/react';

const AdminDashboard = () => {
 

  return (
    <CContainer>
      <CCard>
        <CCardHeader>Admin Dashboard</CCardHeader>
        </CCard>
        <br></br>
     <h2>WELCOME BACK ADMIN </h2> 
    </CContainer>
  );
};

export default AdminDashboard;
