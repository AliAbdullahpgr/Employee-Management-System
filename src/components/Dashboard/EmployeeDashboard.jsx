import React from 'react'
import Header from '../../subComponents/Header'
import TaskListNumber from '../../subComponents/TaskListNumber'
import TaskList from '../../subComponents/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen text-white'>
        <Header />
        <TaskListNumber />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard