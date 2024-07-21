/* eslint-disable */
import { LEAVE, SEARCHLEAVE } from "../action/uploadActions";
import {  UPLOAD_FILE_REQUEST,UPLOAD_FILE_SUCCESS,UPLOAD_FILE_FAILURE, } from "../action/uploadActions";
const initialState = {
    loading: false,
    path: null,
    error: null,
  };
const FileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPLOAD_FILE_REQUEST:
          return {
            ...state,
            loading: true,
            error: null,
          };
        case UPLOAD_FILE_SUCCESS:
          return {
            ...state,
            loading: false,
            path: action.payload,
            error: null,
          };
        case UPLOAD_FILE_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        default:
          return state;
      }
    };


export default FileReducer;

