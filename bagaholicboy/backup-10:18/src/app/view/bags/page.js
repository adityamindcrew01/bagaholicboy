'use client'
import { useEffect, useState, } from 'react';
import Navbar from '@/components/Navbar';

import styles from './bags.module.css';
import { Base_URL } from '@/app/Config';
import Footer from '@/components/Footer';

export default function Bags() {



  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchData = async () => {


      await displayProdfuctsBags()


    };

    fetchData();



  }, []);


  const displayProdfuctsBags = async () => {


    try {

      //   setLoading(true)

      const response = await fetch(`${Base_URL}/api/bags-lists?populate=*`, {

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
      <Navbar />


      <div className={styles.Layout2}>
        <div className='flex gap-4 items-center'>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
            <path d="M44.8342 18.3319L17.3649 45.7969L18.9765 47.4082L46.4457 19.9432L44.8342 18.3319Z" fill="black"></path><path d="M49.5072 8.16016C56.0951 13.6526 60.2879 21.9181 60.2879 31.1649C60.2879 47.7016 46.8802 61.1073 30.3409 61.1073C24.72 61.1073 19.463 59.5562 14.9686 56.8629C20.1618 61.1943 26.8425 63.802 34.135 63.802C50.6743 63.802 64.0835 50.3964 64.0835 33.8597C64.0835 22.9429 58.2379 13.3931 49.5072 8.16161V8.16016Z" fill="black"></path><path d="M4.18646 33.8559C4.18646 17.3192 17.5942 3.91351 34.135 3.91351C39.7559 3.91351 45.0128 5.46455 49.5072 8.15786C44.3126 3.82653 37.6319 1.21875 30.3394 1.21875C13.8001 1.21875 0.392334 14.6244 0.392334 31.1611C0.392334 42.0779 6.23793 51.6277 14.9686 56.8592C8.38073 51.3668 4.18646 43.1013 4.18646 33.8545V33.8559Z" fill="black">
            </path>
          </svg>
          <h1 className={styles.Layout2text}>Bags</h1>

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
                        <button className={styles.Layout2Boxbutton}>{itrem?.tag}</button>
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
