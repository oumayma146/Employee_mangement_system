/* eslint-disable */
import axios from 'axios';
export const FETCH_FOLDERS_SUCCESS = 'FETCH_FOLDERS_SUCCESS';
export const FETCH_FOLDERS_FAILURE = 'FETCH_FOLDERS_FAILURE';


export const createFolder = (folderName) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post('http://127.0.0.1:8000/api/folders/create', { folder: folderName }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    dispatch({ type: 'CREATE_FOLDER_SUCCESS', payload: response.data });
    console.success("Folder created successfully");
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to create folder';
    dispatch({ type: 'CREATE_FOLDER_FAILURE', payload: errorMessage });
    console.error(errorMessage);
  }
};
export const listFoldersAndFiles = () => async (dispatch, getState) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/api/folders', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      dispatch({ type: 'LIST_FOLDERS_AND_FILES_SUCCESS', payload: response.data.folders });
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to list folders and files';
      dispatch({ type: 'LIST_FOLDERS_AND_FILES_FAILURE', payload: errorMessage });
      console.error(errorMessage);
    }
  };
  export const fetchAllFolders = () => {
    return async (dispatch) => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/all_folders', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        dispatch({ type: FETCH_FOLDERS_SUCCESS, payload: response.data.folders });
      } catch (error) {
        dispatch({ type: FETCH_FOLDERS_FAILURE, payload: error.message });
      }
    };
  };