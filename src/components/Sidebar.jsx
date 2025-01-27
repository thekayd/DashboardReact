import React from "react";
import {
  FaBox,
  FaCog,
  FaShoppingCart,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-grey-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300">
      <h1 className="text-2xl font-bold hidden md:block mt-5  text-center italic">
        KAY Shop
      </h1>

      <ul className="flex flex-col mt-5 text-xl">
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaTachometerAlt />
          <span className="md:inline ">Dashboard</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaShoppingCart />
          <span className="md:inline ">Orders</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaUsers />
          <span className="md:inline ">Customers</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaUsers />
          <span className="md:inline ">Users</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaBox />
          <span className="md:inline ">Products</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaCog />
          <span className="md:inline ">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
