/* eslint-disable */
import React from 'react'
import {
  CAvatar,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavLink,
} from '@coreui/react'
import {useNavigate} from 'react-router-dom';
import avatar8 from './../../assets/person-icon.png'
import { auth } from '../../store/action/auth'
import { useDispatch, useSelector } from 'react-redux';

function  AppHeaderDropdown  ()  {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  function logout(){  
    localStorage.clear();
    navigate('/login') 
    window.location.reload(false);
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">  
        <CDropdownItem >
        <div className="d-grid gap-2 col-6 mx-auto">
        <CButton  size="sm" color="primary" onClick={logout} role="button"  >logout</CButton>
     </div>
        </CDropdownItem> 
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
