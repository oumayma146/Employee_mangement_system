/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CRow,
  CCol,
} from '@coreui/react';

const FileDetailsModal = ({ file, visible, setVisible }) => {
  if (!file) return null;

  return (
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader closeButton>File Details</CModalHeader>
      <CModalBody>
        <CRow>
          <CCol>Name:</CCol>
          <CCol>{file.name}</CCol>
        </CRow>
        <CRow>
          <CCol>Size:</CCol>
          <CCol>{file.size} bytes</CCol>
        </CRow>
        <CRow>
          <CCol>Last Modified:</CCol>
          <CCol>{new Date(file.last_modified * 1000).toLocaleString()}</CCol>
        </CRow>
        <CRow>
          <CCol>Downloads:</CCol>
          <CCol>{file.downloads}</CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
      </CModalFooter>
    </CModal>
  );
};

FileDetailsModal.propTypes = {
  file: PropTypes.object,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default FileDetailsModal;
