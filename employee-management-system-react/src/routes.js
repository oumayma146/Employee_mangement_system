/* eslint-disable */
import React from 'react'


const Dashboard = React.lazy(() => import('./views/dashboard/AdminDashboard'))
const DashboardEMP = React.lazy(() => import('./views/dashboard/EmployeeDashboard'))
const role = React.lazy(() => import('./views/theme/role/Role'))
const Employee = React.lazy(() => import('./views/theme/employee/Employee'))
const FileAndFolder = React.lazy(() => import('./views/theme/fileAndFolder/FileAndFolder'))
const ALLFileAndFolder = React.lazy(() => import('./views/theme/fileAndFolder/AllFileAndFolder'))
const permission = React.lazy(() => import('./views/theme/permission/Permission'))
const routes = [
 // { path: '/', exact: true, name: 'Home' },
{ path: '/dashboardAdmin', name: 'Dashboard', element: Dashboard },
{ path: '/dashboardEMP', name: 'DashboardEMP', element: DashboardEMP },
  { path: '/theme/Role', name: 'Role', element: role },
  { path: '/theme/employee', name: 'Employee', element: Employee },
  { path: '/theme/fileAndFolder', name: 'fileAndFolder', element: FileAndFolder },
 { path: '/theme/permission', name: 'permission', element: permission },
 { path: '/theme/ALLFileAndFolder', name: 'ALLFileAndFolder', element: ALLFileAndFolder },
]

export default routes
