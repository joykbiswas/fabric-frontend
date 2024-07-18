"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userDefaultPic from "../../../public/wired-gradient-21-avatar.gif";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const NavMenu = () => {
  const user = { email: "joy@example.com", displayName: "Joy", photoURL: "" };
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log("user sign out", result);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex justify-between items-center px-4 gap-2">
          <div className=" ">
            <Image
              width={150}
              height={150}
              alt="image"
              src="https://i.ibb.co/1bm4m9M/fab-logo.png"
            />
          </div>

          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            ></input>
          </div>
          <div className="flex gap-2">
            {user?.email ? (
              <div className="dropdown dropdown-hover dropdown-end bg-sky-900 hover:bg-sky-700 p-[2px] rounded-2xl">
                <label tabIndex={0} className="btn btn-ghost sm:btn-sm md:btn-md btn-circle   avatar">
                  <div className="w-5 md:w-7 rounded-full">
                    {user.photoURL ? (
                      <Image alt="image" src={user.photoURL} />
                    ) : (
                      <Image alt="image" src={userDefaultPic} />
                    )}
                  </div>
                </label>

                <ul className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <button className="btn btn-ghost">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="btn btn-sm">
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link href="/login">
                <button className="btn btn-sm">Login</button>
              </Link>
            )}
            <div className="flex items-center bg-sky-900 hover:bg-sky-700 p-2 md:p-3 rounded-xl"><FaRegHeart className="text-white text-lg md:text-2xl flex items-center"/></div>
            <div className="flex items-center bg-sky-900 hover:bg-sky-700 p-2 md:p-3 rounded-xl"><FaShoppingCart className="text-white text-lg md:text-2xl flex items-center"/></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NavMenu;
