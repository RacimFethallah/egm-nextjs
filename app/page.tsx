"use client"
import Header from "@/components/header";
import SidePanel from "@/components/sidepanel";
import Image from "next/image";
import { useState } from "react";
import bg from "@/assets/uni1.jpg";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home() {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  return (
    <>
      <Header sidePanelOpen={sidePanelOpen} setSidePanelOpen={setSidePanelOpen} />
      <SidePanel sidePanelOpen={sidePanelOpen} setSidePanelOpen={setSidePanelOpen} />
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <main>
        <Hero />


      </main>
      <Footer />

    </>
  );
}
