import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Create from "./Create";
import Display from "./Display";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("display");

  return (
    <div className="sm:flex">
    <div classNameName=" w-full text-white">
      <div className="sidebar top-0 bottom-0 lg:left-0 p-2 w-full sm:w-[300px] h-[70px] sm:h-screen  text-center bg-back">
        <div className="text-xl">
          <div className="p-2.5 sm:mt-6">
            <div className="flex justify-between">
              <h1 className="font-bold font-roboto text-primary text-[25px] ml-3 ">
                Workshop App
              </h1>
              {!toggle ? (
                <BiMenu
                  onClick={() => setToggle((prev) => !prev)}
                  className="text-primary sm:hidden text-[30px] "
                />
              ) : (
                <AiOutlineClose
                  onClick={() => setToggle((prev) => !prev)}
                  className="text-primary sm:hidden text-[30px] "
                />
              )}
            </div>
          </div>
        </div>

        <div
          className={`${toggle ? "flex flex-col" : "hidden"} sm:flex flex-col`}
        >
          <div className={`p-3 mt-3 h-[46px] flex items-center px-4 hover:bg-back2  hover:border-primary border-l-[9px] cursor-pointer`}>
            <button
              onClick={() => setSelected("create")}
              className=" ml-4 font-roboto font-[700] text-[17px] text-primary"
            >
              Create Workshop
            </button>
          </div>

          <div className="p-3 mt-3 flex items-center text-center px-4 hover:bg-back2  hover:border-primary border-l-[9px]  cursor-pointer">
            <button
              onClick={() => setSelected("display")}
              className="ml-4 font-roboto font-[700] text-[17px] text-primary "
            >
              Display Workshops
            </button>
          </div>
        </div>
      </div>
    </div>

    <div>
          { selected === "create" ? 
            (<Create />) : <Display />
          }

    </div>
    </div>
  );
};

export default Sidebar;
