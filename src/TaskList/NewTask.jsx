import React from 'react'

const NewTask = ({data}) => {
  return (
    <>
      <div className=" h-full flex-shrink-0 w-[335px] bg-red-400 rounded-xl">
        <div className="font-medium flex justify-between items-center p-5 mt-2">
          <h3 className="bg-red-600 px-3 py-1 rounded-md text-sm">{data.category}</h3>
          <h4 className="text-sm ">{data.date}</h4>
        </div>
        <h2 className="px-5 text-[27px] font-semibold">{data.title}</h2>
        <p className="px-5 text-sm mt-2">{data.description}</p>
        <div className=' mt-6 px-4'>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
        </div>
      </div>
    </>
  )
}

export default NewTask