/* eslint-disable */
import React, { useEffect, useState } from 'react'
import '../../../scss/_custom.scss'
import CIcon from '@coreui/icons-react'
import FileDetailsModal from '../FileDetailsModal'
import {
  CButton,
  CCard,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import { cilBrowser, cilFolder, cilFile, cilDataTransferDown } from '@coreui/icons'
import Modal from '../Modal'
import { createFolder, fetchAllFolders } from '../../../store/action/folderActions'
import { uploadFile } from '../../../store/action/uploadActions'
import { useDispatch, useSelector } from 'react-redux'
import Notifications from '../Notifications'
import '../FolderComponent.css';
const AllFileAndFolder = () => {
  const dispatch = useDispatch()

  const [visibleUploadFile, setVisibleUploadFile] = useState(false)
  const [visibleCreateFolder, setVisibleCreateFolder] = useState(false)
  const [file, setFile] = useState(null)
  const [folderName, setFolderName] = useState('')
  const folders = useSelector(state => state.folder.all_folders)
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    dispatch(fetchAllFolders())
  }, [dispatch])
console.log(folders)
  const addNotification = (message, type) => {
    const newNotification = { message, type };
    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);

    setTimeout(() => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification !== newNotification)
        );
    }, 60000); 
};

  const removeNotification = index => {
    setNotifications(prevNotifications =>
      prevNotifications.filter((_, i) => i !== index)
    )
  }

  const handleFileClick = file => {
    setSelectedFile(file)
    setVisible(true)
  }

  const handleFileChange = e => {
    setFile(e.target.files[0])
  }

  const handleUpload = async e => {

    e.preventDefault()
    if (!file) return addNotification('Please add a file name!', 'warning')

    const fileExtension = file.name.split('.').reverse()[0]
    const allowedExtensions = [
      'html', 'php', 'js', 'jsx', 'txt', 'xml', 'css', 'c', 'cpp', 'java',
      'cs', 'py', 'json', 'ppt', 'pptx', 'docx', 'png', 'jpg', 'jpeg',
      'gif', 'svg', 'mp3', 'mp4', 'webm', 'pdf'
    ]

    if (!allowedExtensions.includes(fileExtension)) {
      return addNotification(`File with extension ${fileExtension} not allowed!`, 'danger')
    }

    try {
      const token = localStorage.getItem('token')
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', 'root')

      const response = await axios.post('http://127.0.0.1:8000/api/files/upload', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })

      dispatch(uploadFile(response.data.path))
      addNotification('File uploaded successfully!', 'success')
      setFile(null)
      setProgress(0)
      setVisibleUploadFile(false)
      dispatch(listFoldersAndFiles())
    } catch (error) {
      addNotification(error.message, 'danger')
    }
  }

  const handleCreateFolder = e => {
    e.preventDefault()
    if (!folderName.trim()) {
      return addNotification('Please enter a folder name!', 'warning')
    }
    dispatch(createFolder(folderName))
    setFolderName('')
    setVisibleCreateFolder(false)
    dispatch(listFoldersAndFiles())
    window.location.reload()
  }


  const handleDownload = async (file) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://127.0.0.1:8000/api/files/download/${encodeURIComponent(file.path)}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            responseType: 'blob'
        });

        if (response.status === 200) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', file.split('/').pop()); // Extract file name from path
            document.body.appendChild(link);
            link.click();
            link.remove();
            addNotification('File downloaded successfully!', 'success');
            dispatch(listFoldersAndFiles())
        } else {
            addNotification('Failed to download file', 'danger');
        }
    } catch (error) {
        addNotification('Failed to download file', 'danger');
    }
};

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <CInputGroup className="input-prepend">
                <div style={{ width: '400px' }}> </div>
                <CButton onClick={() => setVisibleUploadFile(!visibleUploadFile)}>
                  <CIcon icon={cilDataTransferDown} style={{ width: '20px' }} /> Upload File
                </CButton>
                <div style={{ width: '20px' }}> </div>
                <CButton onClick={() => setVisibleCreateFolder(!visibleCreateFolder)}>
                  <CIcon icon={cilBrowser} /> Create Folder
                </CButton>
                <div style={{ width: '20px' }}> </div>
                <Modal
                  title={'Upload File'}
                  visible={visibleUploadFile}
                  setVisible={setVisibleUploadFile}
                >
                  <div className="mb-3">
                    <CFormInput
                      type="file"
                      className="file"
                      onChange={handleFileChange}
                      custom="true"
                    />
                  </div>
                  <CButton type="submit" onClick={handleUpload}> Upload </CButton>
                  {progress > 0 && <p>Uploading: {progress}%</p>}
                </Modal>
                <Modal
                  title={'Create Folder'}
                  visible={visibleCreateFolder}
                  setVisible={setVisibleCreateFolder}
                >
                  <div className="mb-3">
                    <CFormInput
                      type="text"
                      placeholder="Enter folder name..."
                      value={folderName}
                      onChange={e => setFolderName(e.target.value)}
                    />
                  </div>
                  <CButton type="submit" onClick={handleCreateFolder}> Add Folder </CButton>
                </Modal>
              </CInputGroup>
            </CCardHeader>
          </CCard>
        </CCol>
      </CRow>
      <CCard xs={12}>
      <div className="folder-container">
        <h2>Folders and Files</h2>
        {folders.map(folder => (
          <div key={folder.path} className="folder">
            <h3>
              <CIcon icon={cilFolder} className="icon folder-icon" />
              {folder.name}
            </h3>
            <ul>
              {folder.files.map(file => (
                <li key={file.path}>
                  <CIcon icon={cilFile} className="icon file-icon" />
                  <span className="file-name" onClick={() => handleFileClick(file)}>
                    {file.name}
                  </span> (Size: {file.size} bytes, Last Modified: {new Date(file.last_modified * 1000).toLocaleString()})
                  <button onClick={() => handleDownload(file)} className="download-button">
                    <CIcon icon={cilDataTransferDown} className="icon download-icon" />
                    Download
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Notifications notifications={notifications} removeNotification={removeNotification} />
        <FileDetailsModal file={selectedFile} visible={visible} setVisible={setVisible} />
      </div>
      </CCard>
    </>
  )
}

export default AllFileAndFolder
