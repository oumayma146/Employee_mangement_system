/* eslint-disable */
import axios from "axios";
export const UPLOAD_FILE_REQUEST = 'UPLOAD_FILE_REQUEST';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILURE = 'UPLOAD_FILE_FAILURE';


const uploadFileRequest = () => ({
    type: UPLOAD_FILE_REQUEST,
  });
  
  const uploadFileSuccess = (path) => ({
    type: UPLOAD_FILE_SUCCESS,
    payload: path,
  });
  
  const uploadFileFailure = (error) => ({
    type: UPLOAD_FILE_FAILURE,
    payload: error,
  });

  export const uploadFile = (file, folder) => {
    return async (dispatch, getState) => {
      dispatch(uploadFileRequest());
  
      const token =localStorage.getItem('token');
      let formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);
  
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/files/upload', formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        dispatch(uploadFileSuccess(response.data.path));
      } catch (error) {
        dispatch(uploadFileFailure(error.message));
      }
    };
  };

export const generateDownloadLink = (file) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`http://127.0.0.1:8000/api/files/download/${file}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.url;
  } catch (error) {
    console.error(error);
    return null;
  }
};