import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";
const TaskList = ({ data }) => {
  console.log("TaskList received data:", data);

  // Safety check - if no data or no tasks, show message
  if (!data || !data.tasks || !Array.isArray(data.tasks)) {
    return (
      <div className="w-full h-[60%] flex items-center justify-center text-gray-400">
        <p>No tasks available</p>
      </div>
    );
  }

  console.log("Rendering tasks:", data.tasks);

  return (
    <div
      id="tasklist"
      className=" w-full h-[60%] overflow-x-auto py-5 flex items-center gap-5 justify-start mt-6 flex-nowrap"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.new_task) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        return null; 
      })}
    </div>
  );
};

export default TaskList;
