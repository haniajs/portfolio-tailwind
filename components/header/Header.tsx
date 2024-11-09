import React from "react";

export default function Header () {
    return (
         <>
            <nav className="bg-[#A29875]">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                             <div className="flex-shrink-0 text-3xl">
                                <a href="/" className="text-white"><b>HANIA IRSHAD</b></a>
                             </div>
                        </div>
        
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                             <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2"><b>Home </b></a>
                             <a href="/about" className="text-white hover:bg-white hover:text-black rounded-lg p-2"><b>About </b></a>
                             <a href="/projects" className="text-white hover:bg-white hover:text-black rounded-lg p-2"><b>Projects </b></a>
                             <a href="/skills" className="text-white hover:bg-white hover:text-black rounded-lg p-2"><b>Skills </b></a>
                             <a href="/contact" className="text-white hover:bg-white hover:text-black rounded-lg p-2"><b>Contact </b></a>
                        </div>
                        </div>
                    </div>
        
                </div>
            </nav>
            </>
    );
}