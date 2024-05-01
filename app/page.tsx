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
import Formations from "@/components/formations/formations";
import About from "@/components/about/about";
import ActiveSectionContextProvider from "@/context/active-section-context";


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
      <ActiveSectionContextProvider>
        <Header sidePanelOpen={sidePanelOpen} setSidePanelOpen={setSidePanelOpen} />
        <SidePanel sidePanelOpen={sidePanelOpen} setSidePanelOpen={setSidePanelOpen} />
        {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
        <main>
          <Hero />



          <About />
          <Separator className=" h-0.5" />
          <Departements />
          <Separator className=" mb-8 h-0.5" />
          <Evenements />
          <Separator className=" h-0.5" />
          <Formations />



        </main>
        <Separator className=" mb-8 h-0.5" />
        <Footer />
      </ActiveSectionContextProvider>

    </>

  );

}
