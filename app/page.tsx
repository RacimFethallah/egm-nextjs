"use client"
import Header from "@/components/header";
import SidePanel from "@/components/sidepanel";
import Image from "next/image";
import { useState } from "react";
import bg from "@/assets/uni1.jpg";

export default function Home() {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  return (
    <>
      <Header sidePanelOpen={sidePanelOpen} setSidePanelOpen={setSidePanelOpen} />
      <SidePanel sidePanelOpen={sidePanelOpen} />
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <main>
        <div className="w-full h-full absolute">
        <Image
          src={bg.src}

          fill={true}
          // layout="fill"
          // height={500}
          // width={500}
          objectFit="fill"
          alt="Picture of the author"
        />

        </div>
        
        
      </main>

    </>
  );
}
