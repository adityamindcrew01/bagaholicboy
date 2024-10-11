"use client";  // Add this line at the very top
import Image from "next/image";
import { useEffect, useState } from 'react';
import Link from 'next/link'

export default function Navbar() {




    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleMenu = () => {
        setIsOpen2(false)
        setIsOpen(!isOpen);
    };
    const toggleMenu2 = () => {
        setIsOpen(false)
        setIsOpen2(!isOpen2);
    };





    return (
        <div className="mx-3">

            {/* <header className="bg-white shadow"> */}
            <header className="bg-white ">
                <div className=" flex flex-wrap p-5 flex-row items-center justify-between">
                    {/* Logo */}
                    {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">BAGAHOLICBOY</span>
        </a> */}

                    {/* Hamburger Icon for smaller screens */}
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center md:hidden text-gray-900 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>

                    {/* Menu Links (Desktop and Tablet) */}
                    <nav className="hidden md:flex flex-wrap items-center text-base justify-center space-x-3 text-xs">
                        <Link href='/view/bags'>
                            <p className="hover:text-red-400 text-gray-900">BAGS</p>

                        </Link>
                        <a className="hover:text-gray-900 text-gray-900">BEAUTY</a>
                        <a className="hover:text-gray-900 text-gray-900">FASHION</a>
                        <a className="hover:text-gray-900 text-gray-900">JEWELLERY</a>
                        <a className="hover:text-gray-900 text-gray-900">WATCHES</a>
                        <a className="hover:text-gray-900 text-gray-900">LIFESTYLE</a>
                    </nav>

                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">BAGAHOLICBOY</span>
                    </a>

                    {/* Right side Links (Desktop and Tablet) */}
                    <nav className="hidden md:flex flex-wrap items-center text-base justify-center space-x-3 text-xs">
                        <a className="hover:text-gray-900 text-gray-900">INSTAGRAM</a>
                        <a className="hover:text-gray-900 text-gray-900">TIKTOK</a>
                        <a className="hover:text-gray-900 text-gray-900">SEARCH</a>
                    </nav>


                    <button
                        onClick={toggleMenu2}
                        className="inline-flex items-center md:hidden text-gray-900 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35m0 0a7 7 0 111.415-1.414L21 21z"
                            ></path>
                        </svg>
                    </button>

                    {/* Dropdown menu for mobile */}
                    {isOpen && (
                        <div className="flex flex-col w-full mt-4 md:hidden space-y-2 text-center">
                            <a className="hover:text-gray-900">BAGS</a>
                            <a className="hover:text-gray-900">BEAUTY</a>
                            <a className="hover:text-gray-900">FASHION</a>
                            <a className="hover:text-gray-900">JEWELLERY</a>
                            <a className="hover:text-gray-900">WATCHES</a>
                            <a className="hover:text-gray-900">LIFESTYLE</a>
                            <a className="hover:text-gray-900 pt-5">INSTAGRAM</a>
                            <a className="hover:text-gray-900">TIKTOK</a>

                        </div>
                    )}


                    {/* Dropdown menu for mobile */}
                    {isOpen2 && (
                        <div className="flex flex-col w-full mt-4 md:hidden space-y-2 text-center">


                            <a className="hover:text-gray-900">SEARCH</a>
                        </div>
                    )}
                </div>
            </header>

        </div>
    );
}
