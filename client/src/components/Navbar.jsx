import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";

function Navbar() {
    return (
        <div className=''>
            <div className="flex justify-center items-center bg-blue-400 text-white p-2">
                <p className='text-sm font-semibold'>
                    Welcome to Global Mall
                    <FaArrowRightLong className='inline mx-2' />
                </p>
            </div>
            <div className="w-full flex justify-evenly items-center mt-4">
                <CiSearch className='h-7 w-7' />
                <h1 className='text-2xl'>Global Mall</h1>
                <div className="flex justify-center items-center">
                    <CiUser className='h-7 w-7 ' />
                    <BsHandbag className='h-6 w-6 ml-4' />
                </div>
            </div>
            <div className="w-full flex justify-center">
                <nav className=''>
                    <a href="/home">Home</a>
                    <a href="/home">Home</a>
                    <a href="/home">Home</a>
                    <a href="/home">Home</a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;