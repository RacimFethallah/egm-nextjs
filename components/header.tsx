import React from 'react'
import { CiLocationOn, CiMail, CiPhone, CiSearch } from 'react-icons/ci';
import { IoSearch } from 'react-icons/io5';
import Image from 'next/image'
import logo from '../assets/logo.png'


export default function Header() {
    return (
        <header className="w-full flex flex-col bg-white">
            <div className="bg-[#0d2d62] text-white text-sm py-4 md:flex flex-row justify-around hidden">
                <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                    href="tel:+213799039212"><CiPhone size={24} />+213 799-03-92-12</a>


                <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer hover:underline'
                    href="https://www.google.com/maps/place/Universit%C3%A9+d'Alger+3+Annexe+Ben+Aknoun/@36.7639659,3.0112916,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb1b1054e13c1:0xbd8bd5f377cb6f67!8m2!3d36.7639616!4d3.0138665!16s%2Fg%2F11h_ccgmk2?entry=ttu" target="_blank"><CiLocationOn size={24} />Université d&apos;Alger 3, Algiers, Algeria</a>


                <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                    href="mailto:egmclubua3@gmail.com"><CiMail size={24} />egmclubua3@gmail.com</a>
            </div>
            <div className="px-10 shadow-md flex flex-col justify-between items-center lg:flex-row">
                {/* <button onClick={() => setSidePanelOpen(true)}>Open Side Panel</button> */}
                <div className='md:flex flex-row items-center py-5 gap-5 hidden'>
                    <Image
                        src={logo.src}
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <div className='flex flex-col'>
                        <div className='font-bold text-lg font-sans'>Entrepreneur Growth Mindset</div>
                        <div className=' text-slate-500 text-sm italic'>Université d&apos;alger 3</div>
                    </div>

                </div>
                <div className="flex items-center md:py-0 py-5">

                    <nav className="">
                        <ul className="flex gap-28 text-lg px-20 font-semibold  transition-all">
                            <li className="hover:cursor-pointer hover:underline hover:text-red-800 transition-all">Home</li>
                            <li className="hover:cursor-pointer hover:underline hover:text-red-800 transition-all">Home</li>
                            <li className="hover:cursor-pointer hover:underline hover:text-red-800 transition-all">Home</li>
                            <li className="hover:cursor-pointer hover:underline hover:text-red-800 transition-all">Home</li>
                        </ul>
                    </nav>
                    <div className="mr-5 hover:cursor-pointer">
                        <IoSearch size={24} />
                    </div>

                </div>



            </div>
        </header>
    )
}
