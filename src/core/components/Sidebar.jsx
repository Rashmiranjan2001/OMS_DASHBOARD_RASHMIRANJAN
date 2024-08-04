import React, { useId } from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'; // Adjust the path as needed

import {
  BiSolidDashboard,
  BiSolidUserRectangle,
  BiMoney,
  BiSolidChat,
} from "react-icons/bi";
import { AiFillHome } from 'react-icons/ai';
import { HiLogout } from 'react-icons/hi'; // Import the logout icon
import { MdWallet } from 'react-icons/md';

const menuItem = (menu, key) => (
  <li
    key={key}
    className="text-gray-200 text-sm rounded-md p-2 my-1.5 transition-all duration-200 hover:bg-blue-900 cursor-pointer"
  >
    <NavLink to="#" className="flex items-center">
      <span className="text-xl">{menu.icon}</span>
    </NavLink>
  </li>
);

const Sidebar = ({ isOpen, setIsOpen }) => {
  const uid = useId();
  const menuList = [
    {
      icon: <BiSolidDashboard style={{ color: 'rgb(59, 130, 246)' }} />
    },
    {
      icon: <AiFillHome style={{ color: 'rgb(59, 130, 246)' }} />
    },
    {
      icon: <BiSolidUserRectangle />
    },
    {
      icon: <BiMoney />
    },
    {
      icon: <MdWallet />
    },
    {
      icon: <BiSolidChat />
    },
  ];

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
  };

  return (
    <aside
      className={`bg-gradient-to-r from-gray-800 to-gray-900 sidebar ${
        isOpen ? "open" : "closed"
      }`}
      style={{ "--sidebar-translate-x": isOpen ? "0" : "-100%" }}
    >
      <div className="flex flex-col justify-between h-full">
        <ul className="mx-3 mt-6">
          {menuList.map((menu) => menuItem(menu, uid))}
        </ul>
        <div className="flex justify-start p-4">
          <button
            onClick={handleLogout}
            className="text-gray-200 hover:text-white transition-colors duration-200"
            aria-label="Logout"
          >
            <HiLogout size={24} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
