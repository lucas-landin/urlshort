"use client"
import Image from "next/image";
import {logo, iconMenu} from "../assets"
import React, { useState, useEffect } from "react";

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
          setToggleMenu(false);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      useEffect(() => {
        setWindowWidth(window.innerWidth);
      }, []);

      const openMenu = () => {
        setToggleMenu(true);
      };
    
      const closeMenu = () => {
        setToggleMenu(false);
      };
    
      const handleMenuClick = (event:React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation(); // Impede que o clique dentro do modal se propague para fechá-lo.
      };

    return ( 
    <header >
        <nav className=" w-full flex justify-between items-center pt-4 px-4 min-[1440px]:px-40 ">

        <div className="flex gap-4">
        <Image
        src={logo}
        width={122}
        height={34}
        alt="logo"
        className=" mr-4"
        />
        {windowWidth > 640 &&(
            <div className="text-black flex items-center gap-5  text-sm">
            <a href="/" className=" font-bold hover:opacity-70  ">Features</a>
            <a href="/" className=" font-bold hover:opacity-70  ">Pricing</a>
            <a href="/" className=" font-bold hover:opacity-70  ">Resources</a>
          </div>
        )}
       </div>

       {windowWidth > 640 && (
        <div className="flex gap-8 items-center text-sm">
        <a href="/" className=" font-bold p-6 hover:opacity-70  ">Login</a>
        <button className=" bg-[#2ACECC] font-bold w-full text-white px-5 py-2 rounded-3xl hover:opacity-70">Sign Up </button>
        </div>
       )}

       
    {windowWidth < 640 && (
    <>
    <div className="">
        <Image 
        src={iconMenu}
        width={20}
        height={20}
        alt="menu"
        onClick={openMenu}
        />
        
    </div>
    </>
    )} 
        </nav>
    
     {toggleMenu && (
    <div>
        <div className=" z-10 flex justify-center items-start mt-16 inset-0 fixed bg-transparent " onClick={closeMenu}>
            <div className=" text-white menu bg-[#3B3154] w-[20rem]  rounded-xl py-10 px-5 text-center " onClick={handleMenuClick}>
               <div className="border-b border-b-slate-600 ">
               <ul className=" list-none   ">
                  <li className=" mb-5 font-bold"><a href="/">Features</a></li>
                  <li className=" mb-5 font-bold"><a href="/">Pricing</a></li>
                  <li className=" mb-5 font-bold"><a href="/">Resources</a></li>
                </ul>
               </div>
               <div className=" mt-5">
                 <ul className=" list-none">
                  <li className=" font-bold  mb-5"><a href="/">Login</a></li>
                  <li>
                    <button className=" bg-[#2ACECC] font-bold w-full p-2 rounded-3xl">
                    Sign Up 
                    </button>
                  </li>
                 </ul>
               </div>
            </div>
        </div>
    </div>
    )}
    
    </header> );
    
}

export default Header;