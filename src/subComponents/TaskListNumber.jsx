import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 screen justify-between gap-5'>
        <div className="w-[45%] rounded-xl px-9 py-6 bg-red-400">
            <h1 className="text-3xl font-semibold">0</h1>
            <h2 className="text-xl font-medium">New Task</h2>
        </div>
        <div className="w-[45%] rounded-xl px-9 py-6 bg-blue-400">
            <h1 className="text-3xl font-semibold">0</h1>
            <h2 className="text-xl font-medium">New Task</h2>
        </div>
        <div className="w-[45%] rounded-xl px-9 py-6 bg-green-400">
            <h1 className="text-3xl font-semibold">0</h1>
            <h2 className="text-xl font-medium">New Task</h2>
        </div>
        <div className="w-[45%] rounded-xl px-9 py-6 bg-yellow-400">
            <h1 className="text-3xl font-semibold">0</h1>
            <h2 className="text-xl font-medium">New Task</h2>
        </div>
    </div>
  )
}

export default TaskListNumber