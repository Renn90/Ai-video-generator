import React from "react";

const Empty = () => {
  return (
        <div className="flex flex-col justify-center items-center mt-14 border-dotted rounded border-primary border-[1px] p-[150px]">
          <h2 className="mb-2 font-semibold text-lg">You do not have a short video created yet</h2>
          <button className="bg-primary px-4 py-2 rounded text-white font-semibold text-sm">Create New</button>
        </div>
  );
};

export default Empty;
