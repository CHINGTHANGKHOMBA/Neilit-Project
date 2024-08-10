"use client";

import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaCalendar, FaShoppingCart, FaTasks } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

import { MdOutlineLogout } from "react-icons/md";

const MySidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-400">
           <Sidebar collapsed={collapsed} className="bg-gray-500 text-black">
        <button 
          className="sb-button p-2 pl-6 pr-6 bg-blue-500 text-white rounded m-4"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? '>' : '<'}
        </button>
        <Menu>
          <MenuItem icon={collapsed ? <RiAdminLine /> : null}>
            {!collapsed && "Admin"}
          </MenuItem>
          <MenuItem icon={collapsed ? <FaCalendar /> : null}>
            {!collapsed && "Calendar"}
          </MenuItem>
          <MenuItem icon={collapsed ? <FaShoppingCart /> : null}>
            {!collapsed && "E-commerce"}
          </MenuItem>
          <MenuItem icon={collapsed ? <FaTasks /> : null}>
            {!collapsed && "Examples"}
          </MenuItem>
          <div className="my-4">
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-100 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white" />
              {!collapsed && (
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                  Logout
                </h3>
              )}
            </div>
          </div>
        </Menu>
      </Sidebar>
      {/* <main style={{ padding: 10 }}>
        <div>
            Hello world
        </div>
      </main> */}
    </div>
  );
};

export default MySidebar;
