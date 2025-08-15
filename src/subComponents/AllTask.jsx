import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  const employees = authData ? authData.employees : [];

  return (
    <div
      id="alltask"
      className="h-52 mt-4 bg-[#1c1c1c] rounded p-5 overflow-auto"
    >
      {employees.map((employee, empIndex) =>
        employee.tasks.map((task, taskIndex) => {
          let status = "";
          let bgColor = "";

          if (task.active) {
            status = "Active";
            bgColor = "bg-blue-400";
          } else if (task.completed) {
            status = "Completed";
            bgColor = "bg-green-400";
          } else if (task.failed) {
            status = "Failed";
            bgColor = "bg-red-400";
          } else if (task.new_task) {
            status = "New Task";
            bgColor = "bg-yellow-400";
          }

          return (
            <div
              key={`${empIndex}-${taskIndex}`}
              className={`${bgColor} py-3 mb-2.5 px-4 flex justify-between rounded`}
            >
              <h2>{employee.name}</h2>
              <h3>{task.title}</h3>
              <h5>{status}</h5>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AllTask;
