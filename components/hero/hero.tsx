import React, { useEffect, useState } from 'react'
import Image from "next/image";
import uni1 from "@/assets/e1.jpg";
import uni2 from "@/assets/e2.jpg";
import uni3 from "@/assets/e4.jpg";

export default function Hero() {
  const images = [
    { src: uni1.src, alt: "uni1", text: "" },
    { src: uni2.src, alt: "uni1", text: "" },
    { src: uni3.src, alt: "uni1", text: "" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setShowText(true);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setShowText(true);
  };

  return (
    <div className="w-screen h-screen relative shadow-xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image src={image.src} fill={true} objectFit="cover" alt={image.alt} className='brightness-75' />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1
              className={`text-white text-7xl font-bold transition-all duration-1000 ${showText && index === currentIndex
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
                }`}
            >
              {image.text}
            </h1>

          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-4 w-4 mx-3 border-white border-2 rounded-full cursor-pointer hover:bg-gray-400 transition-all ${index === currentIndex ? 'bg-white opacity-100' : ''
              }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}