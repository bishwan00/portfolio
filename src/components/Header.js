import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <span className="text-gradient">BISHWAN</span>
            <div className="">
              <span className="text-3xl text-white">SHERKO</span>
            </div>
          </div>

          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
