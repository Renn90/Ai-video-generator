import React from "react";
import Empty from "./_components/Empty";

const Page = () => {
  const videos = [];
  return (
    <div className="h-full mx-4">
      <div className="flex items-center justify-between">
        <h1 className="text-primary font-bold text-lg">Dashboard</h1>
        <button className="bg-primary px-4 py-2 rounded text-white font-semibold text-sm">
          + Create New
        </button>
      </div>
      {videos.length < 1 && <Empty />}
    </div>
  );
};

export default Page;