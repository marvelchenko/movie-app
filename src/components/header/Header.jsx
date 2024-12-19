import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import { FaBell, FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { RiMovieFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <>
      <header className="fixed h-[10vh] z-10  w-full ">
      <div className="flex md:gap-40 items-center p-4 bg-gradient-to-r from-black via-black/90 via-black/50 to-black/0 text-white">
    {/* Navigation */}
    <nav className="flex w-full items-center gap-4 md:px-8 px-5">
      <div className="flex items-center gap-2">
        <RiMovieFill size={50} className="text-red-500" />
        <h3 className="text-2xl font-bold text-red-500">WatchMovie</h3>
      </div>
      <ul className="hidden md:flex md:gap-5">
        <Link to="/">Home</Link>
        <Link to="/series">Series</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/pages">Pages</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
          <div className="hidden md:flex items-center md:w-full gap-5">
            <div className="flex gap-4 text-white ">
              <div className="w-10 h-10 flex items-center justify-center border-2 rounded-full">
                <FaSearch size={18} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center border-2 rounded-full">
                <FaBell size={18} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center border-2 rounded-full">
                <FaUser size={18} />
              </div>
            </div>
            <button className="bg-red-500 rounded-full px-3 py-2">
              Subscribe Now
            </button>
          </div>
          <div className="md:hidden flex items-center justify-center rounded-lg bg-red-500 h-10 w-11">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuFold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-red-500 text-white left-0 top-0 font-semibold pt-8 pb-4 gap-8 w-4/5 h-fit transition-transform duration-300 `}
        >
          <ul className=" flex flex-col p-14 gap-10  ">
            <Link className="border-b border-gray-500" to="/">Home</Link>
            <Link className="border-b border-gray-500" to="/series">Series</Link>
            <Link className="border-b border-gray-500" to="/movies">Movies</Link>
            <Link className="border-b border-gray-500" to="/pages">Pages</Link>
            <Link className="border-b border-gray-500" to="/pricing">Pricing</Link>
            <Link className="border-b border-gray-500" to="/contact">Contact</Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
