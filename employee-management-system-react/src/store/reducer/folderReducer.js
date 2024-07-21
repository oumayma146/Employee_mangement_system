/* eslint-disable */
import { FETCH_FOLDERS_SUCCESS, FETCH_FOLDERS_FAILURE } from '../action/folderActions';

const initialState = {
    folders: [],
    all_folders: [],
    error: null
  };
  
  const folderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_FOLDER_SUCCESS':
        return {
          ...state,
          folders: [...state.folders, action.payload.message]
        };
      case 'CREATE_FOLDER_FAILURE':
        return {
          ...state,
          error: action.payload
        };
        case 'LIST_FOLDERS_AND_FILES_SUCCESS':
            return {
              ...state,
              folders: action.payload
            };
          case 'LIST_FOLDERS_AND_FILES_FAILURE':
            return {
              ...state,
              error: action.payload
            };
            case FETCH_FOLDERS_SUCCESS:
              return {
                ...state,
                all_folders: action.payload
              };
            case FETCH_FOLDERS_FAILURE:
              return {
                ...state,
                error: action.payload
              };
      default:
        return state;
    }
  };
  
  export default folderReducer;
  