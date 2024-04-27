"use client"
import Header from "@/components/header";
import SidePanel from "@/components/sidepanel";
import Image from "next/image";
import { useState } from "react";
import bg from "@/assets/uni1.jpg";
import Hero from "@/components/hero/hero";
import Footer from "@/components/footer";
import Video from 'next-video';
import YouTube from "react-youtube";
// import awesomeVideo from 'https://www.youtube.com/watch?v=XDqEvmxnLeY';
import { Separator } from '@/components/ui/separator'
import Departements from "@/components/departements/departements";
import Evenements from "@/components/events/evenements";


export default function Home() {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const opts = {
    height: "480",
    width: "860",
    playerVars: {
      autoplay: 0,
    },
  };



  return (
    <>
      <Header sidePanelOpen={sidePanelOpen} setSidePanelOpen={setSidePanelOpen} />
      <SidePanel sidePanelOpen={sidePanelOpen} setSidePanelOpen={setSidePanelOpen} />
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <main>
        <Hero />

        {/* <div className="mt-10 flex items-center flex-col">
          <YouTube videoId="XDqEvmxnLeY"
            opts={opts} onReady={(event) => event.target.pauseVideo()} />
        </div> */}

        <Departements />
        <Separator className="mt-2 mb-8 h-0.5" />
        <Evenements />
        


      </main>
      <Separator className="mt-2 mb-8 h-0.5" />
      <Footer />

    </>

  );

}
