'use client'
import { useEffect, useState, } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link'
import styles from './beauty.module.css';
import { Base_URL } from '@/app/Config';
import Footer from '@/components/Footer';
import ima from '../../../app/asset/image/brand.png'
import Image from "next/image";


export default function Beauty() {



    const [products, setProducts] = useState([])


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


    useEffect(() => {

        const fetchData = async () => {


            await displayProdfuctsBags()


        };

        fetchData();



    }, []);


    const displayProdfuctsBags = async () => {


        try {

            //   setLoading(true)

            const response = await fetch(`${Base_URL}/api/beauties?populate=*`, {

            });
            const data = await response.json();
            console.log("published-focus area", data);

            setProducts(data)
            //   setLoading(false)

        } catch (error) {
            console.error('Error fetching buyer data:', error);
        }

    };

    return (
        <>

            <header className="bg-white sticky top-0 z-10">
                <div className=" flex flex-wrap px-5 flex-row items-center justify-between">


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
                        <div className="mx-auto py-4 lg:pr-20 md:pr-0 sm:pr-0 flex flex-wrap flex-col sm:flex-row items-center">
                        <Link href='/'>
                                <Image
                                    src={ima}
                                    alt="Description of image"
                                    className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] h-auto"
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
                        <div className="flex flex-col w-full mt-4 md:hidden space-y-2 text-center">
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


                            <a className="hover:text-gray-900">SEARCH</a>
                        </div>
                    )}
                </div>
            </header>




            <div className={styles.Layout2}>
                <div className='flex gap-4 items-center'>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                        <path d="M44.8342 18.3319L17.3649 45.7969L18.9765 47.4082L46.4457 19.9432L44.8342 18.3319Z" fill="black"></path><path d="M49.5072 8.16016C56.0951 13.6526 60.2879 21.9181 60.2879 31.1649C60.2879 47.7016 46.8802 61.1073 30.3409 61.1073C24.72 61.1073 19.463 59.5562 14.9686 56.8629C20.1618 61.1943 26.8425 63.802 34.135 63.802C50.6743 63.802 64.0835 50.3964 64.0835 33.8597C64.0835 22.9429 58.2379 13.3931 49.5072 8.16161V8.16016Z" fill="black"></path><path d="M4.18646 33.8559C4.18646 17.3192 17.5942 3.91351 34.135 3.91351C39.7559 3.91351 45.0128 5.46455 49.5072 8.15786C44.3126 3.82653 37.6319 1.21875 30.3394 1.21875C13.8001 1.21875 0.392334 14.6244 0.392334 31.1611C0.392334 42.0779 6.23793 51.6277 14.9686 56.8592C8.38073 51.3668 4.18646 43.1013 4.18646 33.8545V33.8559Z" fill="black">
                        </path>
                    </svg>
                    <h1 className={styles.Layout2text}>Beauty</h1>

                </div>






            </div>

            <div className={styles.Layout2Box}>
                <section class="text-gray-600 body-font">
                    <div class="">
                        <div class="flex flex-wrap">
                            {products?.data?.map((itrem, index) => {
                                return (
                                    <>

                                        <div class={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                            <div class=" px-0 pt-10 pb-0 rounded-lg overflow-hidden relative h-full">
                                                <img src={itrem?.image?.url} className={styles.imageLayout2} />
                                                <button className={styles.Layout2Boxbutton}>{itrem?.tags}</button>
                                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2" className={styles.Layout2imageText}>{itrem?.title}</h1>


                                            </div>
                                        </div>
                                    </>
                                )
                            })}



                        </div>
                    </div>
                </section>
            </div>



            <Footer />
        </>
    );
}
