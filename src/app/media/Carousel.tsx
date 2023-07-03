"use client";

import React, { useState } from "react";
import Image from "next/image";
import media1 from "../../../public/assets/website/media1.jpg";
import ema1 from "../../../public/assets/website/ema1.jpg";
import ema3 from "../../../public/assets/website/ema3.jpeg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
export default function Carousel() {
  // const slides = [
  //   {
  //    <Image
  //    src={media1} />
  //   },
  //   {
  //     url: ema1,
  //   },
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [media1, ema1, ema3];

  const prevImage = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextImage = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="max-w[90vh] h-1/3 w-1/2 m-auto py-16 px-4 relative group">
      <div
        // style={{ backgroundImage: `url(${slides[0].url})` }}
        className="w-full h-full duration-500 bg-center bg-cover"
      >
        <Image src={images[currentIndex]} alt="Image" />
        {/* <Image src={ema1} alt="Image" /> */}
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft
          onClick={prevImage}
          size={30}
          className="bg-transparent"
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight
          onClick={nextImage}
          size={30}
          className="bg-transparent"
        />
      </div>
    </div>
  );
}
