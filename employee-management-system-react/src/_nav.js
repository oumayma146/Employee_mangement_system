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
  cilSettings,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'



const _nav = [
  
  {
    component: CNavItem,
    name: 'AdminDashboard',
    to: '/dashboardAdmin',
   
  },
  {
    component: CNavTitle,
  },
  {
    component: CNavGroup,
    name: 'Role Management',
    to: '/theme/Role',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Permission Managment',
        to: '/theme/permission',
      
      },
      {
        component: CNavItem,
        name: 'Role Management',
        to: '/theme/Role',
      },]
  
  },
  {
    component: CNavItem,
    name: 'Employee Managment',
    to: '/theme/employee',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />
  },
 
  {
    component: CNavItem,
    name: 'File and Folder management',
    to: '/theme/ALLFileAndFolder',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
  },
 

]

export default _nav
