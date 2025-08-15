import React from 'react'

const TaskListNumber = ({data}) => {
    const newTaskLen = data.tasks.reduce((count,task) => task.new_task ? count + 1 : count, 0);
    const failedTaskLen = data.tasks.reduce((count,task)=>task.failed ? count + 1 : count, 0);
    const completedTaskLen = data.tasks.reduce((count,task)=>task.completed ? count + 1 : count, 0);
  return (
    <div className='flex mt-10 screen justify-between gap-5'>
        <div className="w-[45%] rounded-xl px-9 py-6 bg-blue-400">
            <h1 className="text-3xl font-semibold">{newTaskLen}</h1>
            <h2 className="text-xl font-medium">New Task</h2>
        </div>
        <div className="w-[45%] rounded-xl px-9 py-6 bg-blue-400">
            <h1 className="text-3xl font-semibold">{completedTaskLen}</h1>
            <h2 className="text-xl font-medium">Completed Task</h2>
        </div>
        <div className="font-purple w-[45%] rounded-xl px-9 py-6 bg-green-400">
            <h1 className="text-3xl font-semibold">3</h1>
            <h2 className="text-xl font-medium">Accepted Task</h2>
        </div>
        <div className="w-[45%] rounded-xl px-9 py-6 bg-yellow-400">
            <h1 className="text-3xl font-semibold">{failedTaskLen}</h1>
            <h2 className="text-xl font-medium">Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskListNumber