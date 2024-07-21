import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/userSlice';
import { fetchFiles } from '../../store/fileSlice';
import { CContainer, CCard, CCardBody, CCardHeader, CListGroup, CListGroupItem, CSpinner } from '@coreui/react';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { users, loading: usersLoading } = useSelector((state) => state.user);
  const { files, loading: filesLoading } = useSelector((state) => state.file);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <CContainer>
      <CCard>
        <CCardHeader>Admin Dashboard</CCardHeader>
        <CCardBody>
          {usersLoading || filesLoading ? (
            <CSpinner />
          ) : (
            <>
              <h5>Employees</h5>
              <CListGroup>
                {users.map((user) => (
                  <CListGroupItem key={user.id}>{user.name} - {user.permissions.join(', ')}</CListGroupItem>
                ))}
              </CListGroup>
              <h5>Files</h5>
              <CListGroup>
                {files.map((file) => (
                  <CListGroupItem key={file.id}>{file.name} - {file.size} - {file.uploadDate}</CListGroupItem>
                ))}
              </CListGroup>
            </>
          )}
        </CCardBody>
      </CCard>
    </CContainer>
  );
};

export default AdminDashboard;
