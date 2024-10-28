import React, { useState } from "react"
import DarkMode from "./DarkMode"

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return(
        <>
            <header className="bg-primaryColor fixed left-0 top-0 w-full z-50 dark:bg-darkColor">
                <nav className="container relative h-14 flex justify-between items-center dark:bg-darkColor">
                    <div>
                        <a href="#" className="text-2xl uppercase font-oswald">Bur<span className="text-secondaryColor">ger</span></a>
                    </div>
                    <div className="flex gap-8 max-md:hidden">
                        <a href="#home" className="hover:text-secondaryColor ease-in duration-200">Home</a>
                        <a href="#about" className="hover:text-secondaryColor ease-in duration-200">About Us</a>
                        <a href="#menu" className="hover:text-secondaryColor ease-in duration-200">Menu</a>
                        <a href="#review" className="hover:text-secondaryColor ease-in duration-200">Review</a>
                        <a href="#contact" className="hover:text-secondaryColor ease-in duration-200">Contact</a>
                    </div>
                    <div className="flex items-center gap-5">
                        <DarkMode/>
                        <div className="cursor-pointer text-xl md:hidden" onClick={()=>setMenu(!menu)}>
                            <i className="ri-menu-2-line"></i>
                        </div>
                    </div>  
                </nav>

                {/* Menu with Toggle Functionality */}

                {
                    menu ? <div className="absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor flex flex-col text-center gap-5 dark:bg-darkColor">
                                <a href="#home" className="hover:text-secondaryColor ease-in duration-200" onClick={()=> setMenu(!menu)}>Home</a>
                                <a href="#about" className="hover:text-secondaryColor ease-in duration-200" onClick={()=> setMenu(!menu)}>About Us</a>
                                <a href="#menu" className="hover:text-secondaryColor ease-in duration-200" onClick={()=> setMenu(!menu)}>Menu</a>
                                <a href="#review" className="hover:text-secondaryColor ease-in duration-200" onClick={()=> setMenu(!menu)}>Review</a>
                                <a href="#contact" className="hover:text-secondaryColor ease-in duration-200" onClick={()=> setMenu(!menu)}>Contact</a>
                                <div className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer" onClick={()=> setMenu(!menu)}>
                                    <i className="ri-close-line"></i>
                                </div>
                            </div> : null
                }
            
            </header>
        </>
    )
}

export default Navbar