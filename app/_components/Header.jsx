import { UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="flex p-4 items-center justify-between shadow">
      <h1 className="text-primary font-bold text-md">
        GenVids<span className="text-secondary">.</span>AI
      </h1>
      <div className="flex items-center">
        <button className="bg-primary outline-none text-white px-4 py-1 shadow text-sm mx-2 rounded font-semibold hover:bg-opacity-70">Dashboard</button>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
