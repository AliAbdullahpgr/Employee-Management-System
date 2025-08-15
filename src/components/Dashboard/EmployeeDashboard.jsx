import React from 'react'
import Header from '../../subComponents/Header'
import TaskListNumber from '../../subComponents/TaskListNumber'
import TaskList from '../../subComponents/TaskList'

const EmployeeDashboard = ({data}) => {
  // console.log(data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen text-white'>
        <Header />
        <TaskListNumber data={data}/>
        <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard