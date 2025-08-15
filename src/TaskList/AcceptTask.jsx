import React from "react";

const AcceptTask = ({ data }) => {
//   console.log("this", data);
  return (
    <>
      <div className=" h-full flex-shrink-0 w-[335px] bg-red-400 rounded-xl">
        <div className="font-medium flex justify-between items-center p-5 mt-2">
          <h3 className="bg-red-600 px-3 py-1 rounded-md text-sm">High</h3>
          <h4 className="text-sm ">20 feb 2024</h4>
        </div>
        <h2 className="px-5 text-[27px] font-semibold">{data.title}</h2>
        <p className="px-5 text-sm mt-2">{data.description}</p>
        <div className='flex justify-between mt-6 px-4'>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
        </div>
      </div>
    </>
  );
};

export default AcceptTask;
