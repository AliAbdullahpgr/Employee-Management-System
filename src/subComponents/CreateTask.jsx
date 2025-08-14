import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form className="flex flex-wrap w-full items-center justify-between">
        <div className="w-1/2 flex flex-col gap-2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design dev etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start justify-center">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            className="text-sm py-1 px-2 w-full h-56 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            name=""
            id=""
          ></textarea>
          <button className="mt-4 py-3 px-5 w-full hover:bg-emerald-600 bg-emerald-500 rounded">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
