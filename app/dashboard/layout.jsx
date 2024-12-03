"use client";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import Header from "../_components/Header"
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { MdOutlineAccountCircle, MdOutlineUpgrade } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const route = usePathname();
  return (
    <div className="h-[100vh] overflow-hidden">
      <Header />
      <div className="flex h-full shadow-md">
        <div className="w-[20%] px-4">
          <ul className="h-[40%] flex mt-4 flex-col items-start justify-between">
            <li
              className={`flex items-center ml-3 font-semibold cursor-pointer w-full p-2 rounded hover:text-white hover:bg-primary ${
                route === "/dashboard" && "bg-primary text-white"
              }`}
            >
              <Link href="/dashboard" className="flex items-center">
                <RxDashboard className="mr-2" />
                Dashboard
              </Link>
            </li>
            <li
              className={`flex items-center ml-3 font-semibold cursor-pointer w-full p-2 rounded hover:text-white hover:bg-primary ${
                route === "/dashboard/create" && "bg-primary text-white"
              }`}
            >
              <Link href="/dashboard/create" className="flex items-center">
                <AiOutlineVideoCameraAdd className="mr-2" />
                Create New
              </Link>
            </li>
            <li
              className={`flex items-center ml-3 font-semibold cursor-pointer w-full p-2 rounded hover:text-white hover:bg-primary ${
                route === "/upgrade" && "bg-primary"
              }`}
            >
              <Link href="upgrade" className="flex items-center">
                <MdOutlineUpgrade className="mr-2 text-xl" />
                Upgrade
              </Link>
            </li>
            <li
              className={`flex items-center ml-3 font-semibold cursor-pointer w-full p-2 rounded hover:text-white hover:bg-primary ${
                route === "/account" && "bg-primary"
              }`}
            >
              <Link href="account" className="flex items-center">
                <MdOutlineAccountCircle className="mr-2" />
                Account
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[80%] h-full bg-[#edede9] p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
