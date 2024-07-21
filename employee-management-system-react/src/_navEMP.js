/* eslint-disable */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
  cilStar,
  cilGroup,
  cilCash,
  cilAudioDescription,
  cilCalendarCheck,
  cilTask,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'



const _nav = [
  
  {
    component: CNavItem,
    name: 'EmployeeDashboard',
    to: '/dashboardEMP',
  },
  {
    component: CNavTitle,
  },
  {
    component: CNavItem,
    name: 'File and Folder management',
    to: '/theme/fileAndFolder',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
  },
 
 
]

export default _nav
