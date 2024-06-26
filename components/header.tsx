"use client";

import React, { useEffect, useState } from 'react'
import { links } from '@/lib/data';
import { CiLocationOn, CiMail, CiMenuBurger, CiMenuKebab, CiPhone, CiSearch } from 'react-icons/ci';
import { IoCloseOutline, IoSearch } from 'react-icons/io5';
import Image from 'next/image'
import logo from '../assets/logo.png'
import SidePanel from './sidepanel';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Header({ sidePanelOpen, setSidePanelOpen }: { sidePanelOpen: boolean, setSidePanelOpen: Function }) {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [isSticky, setIsSticky] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);

    const toggleSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setIsSticky(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <header className={`flex flex-col bg-white transition-transform ease-in-out duration-500 ${isSticky ? 'sticky top-0 left-0 right-0 z-50 lg:translate-y-[-40%]' : ''}`}>
            <div
                className={`bg-[#0d2d62] text-white text-sm py-3 hidden lg:flex flex-row justify-around transition-transform duration-500 ${isSticky ? '' : ''
                    }`}
            >
                <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                    href="tel:+213799039212"><CiPhone size={24} />+213 799-03-92-12</a>


                <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer hover:underline'
                    href="https://www.google.com/maps/place/Universit%C3%A9+d'Alger+3+Annexe+Ben+Aknoun/@36.7639659,3.0112916,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb1b1054e13c1:0xbd8bd5f377cb6f67!8m2!3d36.7639616!4d3.0138665!16s%2Fg%2F11h_ccgmk2?entry=ttu" target="_blank"><CiLocationOn size={24} />Université d&apos;Alger 3, Algiers, Algeria</a>


                <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                    href="mailto:egmclubua3@gmail.com"><CiMail size={24} />egmclubua3@gmail.com</a>
            </div>

            <div className={`shadow-xl flex flex-col sm:items-center justify-between lg:flex-row lg:py-0 py-5 `}>
                <div className={`sm:flex lg:flex-row flex-col items-center pl-5 py-3 gap-5 hidden`}>
                    <Image
                        onClick={() => { window.location.href = '/' }}
                        src={logo.src}
                        width={isSticky ? 70 : 100}
                        height={100}
                        alt="Picture of the author"
                        className='hover:cursor-pointer transition-all'
                    />
                    <div className='lg:flex flex-col items-center lg:items-start hidden'>
                        <div className='font-bold text-lg font-sans'>Entrepreneur Growth Mindset</div>
                        <div className=' text-slate-500 text-sm italic'>Université d&apos;alger 3</div>
                    </div>

                </div>


                <div className="flex flex-row justify-between items-center sm:px-0 px-5">
                    <button
                        className='sm:hidden hover:cursor-pointer hover:text-red-800 transition-all'
                        onClick={() => setSidePanelOpen(!sidePanelOpen)}>
                        <CiMenuBurger size={24} strokeWidth={1} className='ml-5 flex' />
                    </button>
                    <div>
                        <Image
                            className='sm:hidden'
                            src={logo.src}
                            width={60}
                            height={100}
                            alt="Picture of the author"
                        />
                    </div>
                    {showSearchBar ? (
                        <div
                            className={`fixed top-20 right-0 pr-24 transition-transform duration-700 ${showSearchBar
                                ? 'translate-x-0'
                                : 'translate-x-full '
                                }`}
                        >
                            <input
                                onClick={(e) => e.stopPropagation()}
                                type="text"
                                placeholder="Search..."
                                className={`px-4 py-2 shadow-md border-none border-gray-300 rounded-md w-96`}
                            />
                        </div>
                    ) : (
                        <nav className={`sm:flex hidden ${showSearchBar ? 'sm:hidden' : 'block'} px-10`}>
                            <ul className="flex text-lg font-semibold transition-all group">
                                {
                                    links.map(link => (
                                        <motion.li
                                            key={link.hash}

                                            className={` hover:cursor-pointer hover:shadow-lg hover-underline-animation hover:text-red-800 transition-all mx-5 
                                            ${activeSection == link.name ? 'text-red-800 shadow-lg' : ''}  `}>
                                            <Link
                                                onClick={() => {
                                                    setActiveSection(link.name);
                                                    setTimeOfLastClick(Date.now());
                                                }}
                                                href={link.hash}>
                                                {link.name}
                                                {
                                                    link.name === activeSection && (
                                                        <motion.span className='bg-black dark:bg-slate-200 dark:text-blue-950 
                                             rounded-full block h-1 backdrop-blur-[0.5rem]'
                                                            layoutId='activeSection'
                                                            transition={{
                                                                type: 'spring',
                                                                stiffness: '380',
                                                                damping: '30',
                                                            }}
                                                        ></motion.span>
                                                    )
                                                }

                                            </Link>

                                        </motion.li>

                                    ))
                                }
                            </ul>
                        </nav>
                    )}

                    {/* <div
                        className="hover:cursor-pointer lg:flex hidden px-10 relative"
                        onClick={toggleSearchBar}
                    >
                        {showSearchBar ? (
                            <IoCloseOutline size={28} onClick={toggleSearchBar} />
                        ) : (
                            <IoSearch size={24} />
                        )}
                    </div> */}
                    <div className=" hover:cursor-pointer sm:hidden">
                        <Popover>
                            <PopoverTrigger>
                                <CiMenuKebab size={24} />
                            </PopoverTrigger>
                            <PopoverContent className="mx-2 w-fit">
                                <div className='space-y-5 text-sm'>
                                    <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                                        href="tel:+213799039212"><CiPhone size={18} />+213 799-03-92-12</a>


                                    <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                                        href="https://www.google.com/maps/place/Universit%C3%A9+d'Alger+3+Annexe+Ben+Aknoun/@36.7639659,3.0112916,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb1b1054e13c1:0xbd8bd5f377cb6f67!8m2!3d36.7639616!4d3.0138665!16s%2Fg%2F11h_ccgmk2?entry=ttu" target="_blank"><CiLocationOn size={18} />Université d&apos;Alger 3, Algiers, Algeria</a>


                                    <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                                        href="mailto:egmclubua3@gmail.com"><CiMail size={18} />egmclubua3@gmail.com</a>

                                </div>
                            </PopoverContent>

                        </Popover>

                    </div>

                </div>



            </div>
            {/* <div
                className={`bg-red-700 text-white text-sm py-2 sm:flex hidden flex-row justify-around transition-transform duration-300 ${isSticky ? 'translate-y-0' : ''
                    } overflow-hidden whitespace-nowrap`}
            >
                <span
                    className={` animate-scroll`}
                >
                    heey this is a new text
                </span>
            </div> */}
        </header>
    )
}
