"use client";  // Add this line at the very top
import Image from "next/image";
import { useEffect, useState, useLayoutEffect } from 'react';
import Link from 'next/link'
import ima from '../app/asset/image/brand.png'

import { RxCrossCircled } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import styles from './styles.module.css';


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


    useLayoutEffect(() => {
        const navbar = document.querySelector('header');
        const handleScroll = () => {
            if (window.scrollY > 500) {
                navbar.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'transition-all', 'duration-3', 'ease-in-out');
            } else {
                navbar.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'transition-all', 'duration-3', 'ease-in-out');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const[openSeacrh, setOpenSearch] = useState('')




    return (
        <div className="mx-5 mt-0">


            <header className="bg-white z-10 transition-all duration-3">
                <div className=" flex flex-wrap px-5 flex-row items-center justify-between">


                    {/* Hamburger Icon for smaller screens */}
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center md:hidden text-gray-900 focus:outline-none"
                    >
                        {isOpen? (

                            <RxCross2  className="w-6 h-6"/>
                        ) : (
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
                        )}
                        
                    </button>

                    {/* Menu Links (Desktop and Tablet) */}
                    <nav className="hidden md:flex flex-wrap items-center text-base justify-center space-x-3 text-xs">
                        <Link href='/view/bags'>
                            <p className="hover:border-b-2 border-black text-black">BAGS</p>

                        </Link>
                        <Link href='/view/beauty'>
                            <p className="hover:border-b-2 border-black text-black">BEAUTY</p>

                        </Link>
                        <Link href='/view/Fashion'>
                            <p className="hover:border-b-2 border-black text-black">FASHION</p>
                        </Link>
                        <Link href='/view/Jewellery'>
                            <p className="hover:border-b-2 border-black text-black">JEWELLERY</p>
                        </Link>
                        <Link href='/view/Watches'>
                            <p className="hover:border-b-2 border-black text-black">WATCHES</p>
                        </Link>
                        <Link href='/view/Lifestyle'>
                            <p className="hover:border-b-2 border-black text-black">LIFESTYLE</p>
                        </Link>
                    </nav>

                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 justify-center">
                        {/* <span className="ml-3 text-xl">BAGAHOLICBOY</span> */}
                        <div className={` mx-auto py-4 lg:pr-20 md:pr-0 sm:pr-0 flex flex-wrap flex-col sm:flex-row items-center  `}>
                            <Link href='/'>
                                <Image
                                    src={ima}
                                    alt="Description of image"
                                    className={`${styles.imageBrandName} w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] h-auto`}
                                />
                            </Link>
                        </div>

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
                        <div className="flex flex-col w-full mt-0 pb-3 md:hidden space-y-2 text-center shadow-lg">

                            <Link href='/view/bags'>
                                <p className="hover:border-b-2 border-black text-black">BAGS</p>

                            </Link>
                            <Link href='/view/beauty'>
                                <p className="hover:border-b-2 border-black text-black">BEAUTY</p>

                            </Link>
                            <Link href='/view/Fashion'>
                                <p className="hover:border-b-2 border-black text-black">FASHION</p>
                            </Link>
                            <Link href='/view/Jewellery'>
                                <p className="hover:border-b-2 border-black text-black">JEWELLERY</p>
                            </Link>
                            <Link href='/view/Watches'>
                                <p className="hover:border-b-2 border-black text-black">WATCHES</p>
                            </Link>
                            <Link href='/view/Lifestyle'>
                                <p className="hover:border-b-2 border-black text-black">LIFESTYLE</p>
                            </Link>

                            <Link href='/view/Lifestyle'>
                                <p className="hover:border-b-2 border-black text-black">INSTAGRAM</p>
                            </Link>

                            <Link href='/view/Lifestyle'>
                                <p className="hover:border-b-2 border-black text-black">TIKTOK</p>
                            </Link>

                        </div>
                    )}


                    {/* Dropdown menu for mobile */}
                    {isOpen2 && (
                        <div className="flex flex-col w-full mt-4 md:hidden space-y-2 text-center">


                            <a className="text-black" >SEAdcdsRCH</a>
                        </div>
                    )}
                </div>
            </header>

        </div>
    );
}
