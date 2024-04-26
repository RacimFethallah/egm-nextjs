import React from 'react'
import Image from "next/image";
import { useState } from "react";
import bg from "@/assets/uni1.jpg";

export default function Hero() {
  return (
    <div className="w-screen h-screen relative">
        <Image
          src={bg.src}
          fill={true}
          objectFit="cover"
          alt="Picture of the author"
        />

        </div>
  )
}
