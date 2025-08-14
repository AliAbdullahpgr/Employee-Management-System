import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="font-medium text-2xl">
        Hello,<br /> <span className="text-4xl font-semibold ">Abdullah 👋</span>
      </h1>
      <button className="bg-red-600 text-lg font-semibold text-white rounded-sm px-4 py-2">
        Log Out
      </button>
    </div>
  );
};

export default Header;
