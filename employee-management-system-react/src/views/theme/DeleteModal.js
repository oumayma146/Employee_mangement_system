/* eslint-disable */
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useEffect, useState } from 'react'


export default function DeleteModal({Delete , setDelete,deleteHandler}) {
    return (
      <>
        <CModal visible={ Delete } onClose={() => setDelete(false)}>
          <CModalHeader onClose={() => setDelete(false)}>
            <CModalTitle>Delete </CModalTitle>
          </CModalHeader>
          <CModalBody>Are you  sure to delete this</CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setDelete(false)}>
              Close
            </CButton>
            <CButton color="primary" onClick={deleteHandler}>Delete</CButton>
          </CModalFooter>
        </CModal>
      </>
    )
}

