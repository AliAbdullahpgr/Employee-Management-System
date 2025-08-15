import React from "react";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className=" w-full h-[60%] overflow-x-auto py-5 flex items-center gap-5 justify-start mt-6 flex-nowrap"
    >
      {data.map}
      
    </div>
  );
};

export default TaskList;
