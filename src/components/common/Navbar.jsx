import React from "react";

import Container from "../common/Container";
import { navItems } from "../../helper/projectArryObj";
import allIcons from "../../helper/iconProvider";
import Button from "./Button";
import CommonLogo from "./CommonLogo";

const Navbar = () => {
  const { search, authIcon } = allIcons;
  return (
    <nav className="">
      <div className="py-6 shadow-sm ">
        <Container>
          <div className="flex items-center justify-between">
            {/* <h6 className="text-success heading-six">বাজার দর</h6> */}
            <div className="">
              <CommonLogo />
            </div>
            <div className=" border border-gray-400 w-[500px] relative  px-7 py-3 rounded-[40px]  ">
              <input
                type="text"
                placeholder="এখানে সার্চ করুন"
                className="w-[450px]  para-normal text-secondary "
              />
              <span className="absolute top-1/2 -translate-y-1/2 right-4  text-2xl text-gray-600  ">
                {search}
              </span>
            </div>
            <div>
              <div className="flex gap-x-3">
                <Button children={"নিবন্ধন"} icon={authIcon[0].icon} />
                <Button children={"লগইন"} icon={authIcon[1].icon} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-5">
        <Container>
          <div className="">
            <ul className="flex justify-center   gap-x-[60px]">
              {navItems.map((items) => {
                return (
                  <li key={items.id}>
                    <a
                      href="#"
                      className="navitems text-primary hover:text-success transition-all duration-300 ease-in-out inline-block   relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-success after:bottom-[0px] after:left-[-100%] hover:after:left-0  overflow-hidden pb-[2px]  after:transition-all after:duration-300 after:ease-in-out"
                    >
                      {items.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
