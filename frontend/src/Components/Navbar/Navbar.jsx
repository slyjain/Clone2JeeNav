import React from 'react';
import { IoMenu } from "react-icons/io5";
import DarkMode from '../DarkMode/DarkMode';
import dummyImage from "../../assets/dummyProfile.jpg";

const Navbar = () => {
    return (
        <div className="navbar flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-600 ">
            <div className="left-side flex items-center">
                <div className="sidebarOpener cursor-pointer mr-4">
                    <IoMenu size={30} />
                </div>
                <div className="SiteName text-2xl font-bold font-Mono">JEENavigator</div>
            </div>
            <div className="right-side flex items-center">
                <div className="darkMode mr-4"><DarkMode /></div>
                <div className="profile">
                    <img src={dummyImage} className='h-12 w-12 max-h-full max-w-full rounded-full object-cover' alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
