import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import Image from 'next/image'
import logo from '../assets/logo.png'


export default function SidePanel({ sidePanelOpen, setSidePanelOpen }: { sidePanelOpen: boolean, setSidePanelOpen: Function }) {
  return (
    <div
      className={`fixed z-50 top-0 left-0 h-screen w-64 bg-white  p-4 transition-all ease-in-out duration-300 ${sidePanelOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <button
        className='sm:hidden hover:cursor-pointer hover:text-red-800 transition-all flex ml-auto'
        onClick={() => setSidePanelOpen(!sidePanelOpen)}>
        {/* {sidePanelOpen ? 'Close Side Panel' : 'Open Side Panel'} */}
        <IoCloseOutline size={40} strokeWidth={1} className=' flex' />
      </button>
      <div className='flex flex-col p-5'>
        <div className='flex flex-col items-center'
        >
          <Image
            src={logo.src}
            width={120}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <nav className=" py-14">
          <ul className="flex flex-col space-y-10 text-xl font-semibold  transition-all group">

            <li className="hover:cursor-pointer hover-underline-animation hover:text-red-800 transition-all ">Home</li>
            <li className="hover:cursor-pointer hover-underline-animation hover:text-red-800 transition-all ">Home</li>
            <li className="hover:cursor-pointer hover-underline-animation hover:text-red-800 transition-all ">Home</li>
            <li className="hover:cursor-pointer hover-underline-animation hover:text-red-800 transition-all ">Home</li>
          </ul>
        </nav>
        {/* <h2>Side Panel</h2> */}
        {/* <p>This is a side panel.</p> */}
      </div>

    </div>
  );
}