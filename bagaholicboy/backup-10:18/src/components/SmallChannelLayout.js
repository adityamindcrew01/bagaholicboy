'use client'
import React from 'react'
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import M from './channel1.jpg';
import { Base_URL } from '@/app/Config';

const SmallChannelLayout = () => {


    const [data, setData] = useState('')
    useEffect(() => {

        const fetchData = async () => {

            await displayProfile();


        };

        fetchData();



    }, []);

    const displayProfile = async () => {


        try {

            //   setLoading(true)

            const response = await fetch(`${Base_URL}/api/chanel-smallbanner?populate=*`, {

            });
            const data = await response.json();
            console.log("published-focus area", data);

            setData(data)
            //   setLoading(false)

        } catch (error) {
            console.error('Error fetching buyer data:', error);
        }

    };


    return (
        <div>
            {/* <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center items-center"> 
                            <h2 className="text-sm title-font text-gray-500 tracking-widest text-center"> 
                                {data?.data?.title}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 text-center"> 
                                The Catcher in the Rye
                            </h1>
                            <div className="flex mb-4 justify-center">
                               
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                         
                            src={`http://localhost:1337/${data?.data?.image?.url}`}
                        />
                    </div>
                </div>
            </section> */}


            <div className=" flex justify-center mt-20 mb-20 mx-20">
                <img alt="ecommerce" className="lg:w-4/6 w-full lg:h-auto h-24 object-cover object-center rounded"
                    // src={data?.data?.image?.url}
                    src={data?.data?.image?.url}
                />
            </div>


        </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const repo = await res.json();

    return {
        props: { name: 'sdjkncdbjskcjbksjbk' } // Return the prop here
    };
}

export default SmallChannelLayout;
