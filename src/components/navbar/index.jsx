import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { BsArrowBarUp } from "react-icons/bs";
import Dropdown from "components/dropdown";
import { logOut } from "../../redux/reducerSlices/authSlice";
import avatar from "assets/img/avatars/avatar4.png";

const Navbar = ({ onOpenSidenav, brandText }) => {
  const dispatch = useDispatch();
  const [darkmode, setDarkmode] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav className="sticky top-4 z-40 flex flex-row items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <p className="text-[33px] font-bold capitalize text-navy-700 dark:text-white">
          <Link to="#">{brandText}</Link>
        </p>
      </div>
      <div className="relative flex h-[61px] w-[355px] items-center gap-2 rounded-full bg-white px-2 shadow-xl dark:!bg-navy-800 md:w-[365px] xl:w-[365px]">
        <div className="flex h-full items-center rounded-full bg-lightPrimary dark:bg-navy-900 xl:w-[225px]">
          <FiSearch className="ml-3 h-4 w-4 text-gray-400 dark:text-white" />
          <input
            type="text"
            placeholder="Search..."
            className="h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none dark:bg-navy-900 dark:text-white sm:w-fit"
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        <Dropdown
          button={
            <IoMdNotificationsOutline className="h-4 w-4 cursor-pointer text-gray-600 dark:text-white" />
          }
        >
          <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl dark:!bg-navy-700">
            <p className="text-base font-bold">Notifications</p>
            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="text-base font-bold">New Update: Dashboard PRO</p>
                <p className="text-xs">
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>
          </div>
        </Dropdown>
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => setDarkmode(!darkmode)}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4" />
          ) : (
            <RiMoonFill className="h-4 w-4" />
          )}
        </div>
        <Dropdown
          button={
            <img className="h-10 w-10 rounded-full" src={avatar} alt="User" />
          }
        >
          <div className="flex w-56 flex-col rounded-[20px] bg-white p-4 shadow-xl dark:!bg-navy-700">
            <p className="text-sm font-bold">👋 Hey, Adela</p>
            <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />
            <Link to="#" className="text-sm text-gray-800 dark:text-white">
              Profile Settings
            </Link>
            <p
              onClick={handleLogout}
              className="mt-3 cursor-pointer text-sm font-medium text-red-500"
            >
              Log Out
            </p>
          </div>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
