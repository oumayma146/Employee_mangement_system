import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles } from '../../store/fileSlice';
import { CContainer, CCard, CCardBody, CCardHeader, CListGroup, CListGroupItem, CButton, CSpinner } from '@coreui/react';

const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const { files, loading: filesLoading } = useSelector((state) => state.file);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  const handleFileUpload = (event) => {
    // Implement file upload logic
  };

  const handleCreateFolder = () => {
    // Implement folder creation logic
  };

  return (
    <CContainer>
      <CCard>
        <CCardHeader>Employee Dashboard</CCardHeader>
        <CCardBody>
          {filesLoading ? (
            <CSpinner />
          ) : (
            <>
              <CButton color="primary" component="label">
                Upload File
                <input type="file" hidden onChange={handleFileUpload} />
              </CButton>
              <CButton color="primary" onClick={handleCreateFolder}>Create Folder</CButton>
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

export default EmployeeDashboard;
