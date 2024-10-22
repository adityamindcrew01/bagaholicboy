"use client";  // Add this line at the very top
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from 'react';

import Bags from "./view/bags/page";
import Main from "./view/main/page";

export default function Home() {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch('http://localhost:1337/api/products?populate=*')  // You can also use external URLs like 'https://api.example.com'
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  console.log("SDcs", data)




  return (
    <div>
     {/* <Navbar/> */}
     {/* <Home/> */}
     <Main/>


    </div>
  );
}
