import React from "react";
import Barchart from "./charts/Barchart";
import {
  FaBullseye,
  FaHamburger,
  FaUtensils,
  FaChevronRight,
} from "react-icons/fa";
import "./Menu.css";


const ChartSection = () => {
  return (
    <>
      <div className="col-span-2 mt-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-md px-6 py-4">
        <div className="flex flex-col justify-between items-center h-80">
          <div className="flex justify-between items-center w-full mb-4">
            <h3 className="text-white text-left text-xl font-bold">Activity</h3>
            <div>
              <select
                id="months"
                defaultValue="3"
                className="bg-gray-100 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="text-left" value="3">
                  Weekly
                </option>
                <option className="text-left" value="6">
                  Yearly
                </option>
                <option className="text-left" value="12">
                  Monthly
                </option>
              </select>
            </div>
          </div>
          <Barchart />
        </div>
      </div>

      <div className="mt-8 grid-cols-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-md px-6 py-4">
        <div className="menu">
          <MenuItem
            icon={<FaBullseye size={24} color="#FF6347" />}
            text="Goals"
          />
          <MenuItem
            icon={<FaHamburger size={24} color="#1E90FF" />}
            text="Popular Dishes"
          />
          <MenuItem
            icon={<FaUtensils size={24} color="#20B2AA" />}
            text="Menus"
          />
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ icon, text }) => (
    <div className="menu-item">
      <div className="left-section">
        <div className="icon text-xl">{icon}</div>
        <div className="text text-lg text-white">{text}</div>
      </div>
      <div className="chevron text-xl text-gray-400">
        <FaChevronRight />
      </div>
    </div>
  );
  

export default ChartSection;
