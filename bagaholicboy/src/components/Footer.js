'use client'
import { useRouter, useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

import styles from './footer.module.css';

import { Base_URL } from '@/app/Config';

import ima from '../app/asset/image/brand.png'

import Image from 'next/image';


const Footer = () => {
    return (
        <div>
            <footer class="text-gray-600 body-font" style={{ backgroundColor: '#f0f0f0' }}>



                <div className="container px-1 py-7 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col" style={{ justifyContent: 'space-between' }} >
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto md:text-left">
                        <a class="flex title-font font-medium items-center md:justify-start sm:justify-center text-gray-900">

                            <span className={styles.textFooter}>Singapore’s dedicated online magazine for bags, fashion and life’s little luxuries…</span>
                        </a>
                        <p class="mt-8 text-sm text-black-500">Copyright ©2024 Bagaholicboy PTE LTD
                            All rights reserved</p>
                    </div>

                    <div class="flex md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

                        <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full px-10">
                            {/* <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2> */}
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-black hover:border-b-2 border-black text-xs">BAGS</a>
                                </li>
                                <li>
                                    <a class="text-black hover:border-b-2 border-black  text-xs">BEAUTY</a>
                                </li>
                                <li>
                                    <a class="text-black hover:border-b-2 border-black  text-xs">FASHION</a>
                                </li>
                                <li>
                                    <a class="text-black hover:border-b-2 border-black  text-xs">JEWELLERY</a>
                                </li>
                                <li>
                                    <a class="text-black hover:border-b-2 border-black  text-xs">
                                        WATCHES</a>
                                </li>
                                <li>
                                    <a class="text-black hover:border-b-2 border-black  text-xs">LIFESTYLE</a>
                                </li>

                            </nav>
                        </div>
                        <div class="lg:w-1/2 md:w-1/2 w-full px-10">
                            {/* <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2> */}
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-black hover:border-b-2 border-black text-xs">INSTAGRAM</a>
                                </li>
                                <li>
                                    <a class="text-black hover:text-gray-800 text-xs">TIKTOK</a>
                                </li>
                                <li>
                                    <a class="text-black hover:text-gray-800 text-xs">SEARCH</a>
                                </li>
                                <br />
                                <li>
                                    <a class="text-black hover:text-gray-800 text-xs">ABOUT US</a>
                                </li>
                                <li>
                                    <a class="text-black hover:text-gray-800 text-xs">PRIVACY POLICY</a>
                                </li>
                            </nav>
                        </div>
                    </div>




                </div>


                <div style={{ backgroundColor: '#f0f0f0',}}>
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <Image
                            src={ima} // Use the imported image
                            alt="Description of image"
                        // width={500}
                        // height={300}
                        />




                    </div>
                </div>


            </footer>
        </div>
    )
}
export default Footer