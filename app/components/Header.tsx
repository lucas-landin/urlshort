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
        <nav className=" w-full flex justify-between items-center pt-4 px-4">
        {windowWidth < 640 && (
    <>
        <div>
        <Image
        src={logo}
        width={122}
        height={34}
        alt="logo"
        />
    </div>

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
        <div className=" z-10 flex justify-center items-center inset-0 fixed bg-black opacity-75" onClick={closeMenu}>
            <div className=" text-white menu bg-[#3B3154] max-w-xs " onClick={handleMenuClick}>
                menu
            </div>
        </div>
    </div>
    )}
    
    </header> );
    
}

export default Header;